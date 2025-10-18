import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧾 Your Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #ddd",
                padding: "5px 0",
              }}
            >
              <span>
                {item.name} - ₹{item.price}
              </span>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                ❌ Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => dispatch(clearCart())}
            style={{ marginTop: "10px" }}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
