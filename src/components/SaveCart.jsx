import React from "react";

const SaveCart = ({ productsInCart }) => {
  const saveCartItems = () => {
    // Implement your logic to save cart items here
    // For example, you can use localStorage
    localStorage.setItem("saved-cart", JSON.stringify(productsInCart));
    alert("Cart saved successfully!");
  };

  return (
    <div>
      <button onClick={saveCartItems} className="btn save-cart-btn">
        Save Cart
      </button>
    </div>
  );
};

export default SaveCart;
