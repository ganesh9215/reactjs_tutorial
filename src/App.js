import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]); // all users
  const [user, setUser] = useState(null); // single user
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState("1");

  const GRAPHQL_URL = "http://localhost:4000/graphql";

  // Query for ALL users
  const getAllUsersQuery = `
    {
      users {
        id
        name
        email
      }
    }
  `;

  // Query for a SINGLE user
  const getSingleUserQuery = (id) => `
    {
      user(id: "${id}") {
        id
        name
        email
      }
    }
  `;

  // Fetch all users
  const fetchAllUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: getAllUsersQuery }),
      });
      const result = await response.json();
      if (result.errors) throw new Error(result.errors[0].message);
      setUsers(result.data.users);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch single user by ID
  const fetchUserById = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: getSingleUserQuery(id) }),
      });
      const result = await response.json();
      if (result.errors) throw new Error(result.errors[0].message);
      setUser(result.data.user);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Load all users on mount
  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>🚀 GraphQL Fetch Example (React Client)</h1>

      {/* ==== ALL USERS SECTION ==== */}
      <section style={{ marginBottom: 30 }}>
        <h2>👥 All Users</h2>
        {loading && <p>Loading users...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {!loading && users.length > 0 && (
          <ul>
            {users.map((u) => (
              <li key={u.id}>
                {u.name} — {u.email}
              </li>
            ))}
          </ul>
        )}
        <button onClick={fetchAllUsers} style={{ marginTop: 10 }}>
          Refresh Users
        </button>
      </section>

      <hr />

      {/* ==== SINGLE USER SECTION ==== */}
      <section>
        <h2>👤 Single User Lookup</h2>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID"
          style={{ marginRight: 10 }}
        />
        <button onClick={() => fetchUserById(userId)}>Get User</button>

        {loading && <p>Loading user...</p>}
        {user && !loading && (
          <div style={{ marginTop: 10 }}>
            <h3>✅ User Details:</h3>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
