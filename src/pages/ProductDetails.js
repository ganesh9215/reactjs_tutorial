import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Product Details for ID: {id}</h3>
      <button onClick={() => navigate("/products")}>⬅️ Back to Products</button>
    </div>
  );
};

export default ProductDetails;
