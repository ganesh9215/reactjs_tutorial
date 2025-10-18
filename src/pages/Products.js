import { Link, Outlet } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Watch" },
];

const Products = () => {
  return (
    <div>
      <h2>🛍️ Products</h2>
      {products.map((p) => (
        <div key={p.id}>
          <Link to={`/products/${p.id}`}>{p.name}</Link>
        </div>
      ))}
      <Outlet />
    </div>
  );
};

export default Products;
