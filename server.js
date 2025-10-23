// server.js
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");

// Create an Express app
const app = express();
app.use(cors()); // enable CORS for frontend

// Step 1: Define GraphQL Schema (types & queries)
const schema = buildSchema(`
  type User {
    id: ID
    name: String
    email: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }
`);

// Step 2: Mock Data
const users = [
  { id: "1", name: "Alice", email: "alice@gmail.com" },
  { id: "2", name: "Bob", email: "bob@gmail.com" },
  { id: "3", name: "Charlie", email: "charlie@gmail.com" },
];

// Step 3: Define Resolvers
const root = {
  users: () => users,
  user: ({ id }) => users.find((u) => u.id === id),
};

// Step 4: Create GraphQL Endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true, // enable GraphiQL UI for testing
  })
);

// Step 5: Start Server
app.listen(4000, () => {
  console.log("🚀 GraphQL Server running at http://localhost:4000/graphql");
});
