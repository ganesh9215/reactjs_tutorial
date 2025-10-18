import React from "react";
import useFetch from "../hooks/useFetch";

const Posts = () => {
  const { data: posts, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>📝 Posts</h2>
      {posts.slice(0, 5).map((post) => (
        <div key={post.id} style={{ marginBottom: "10px" }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
