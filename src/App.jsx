
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/main.css";

import ShoppingCart from "./components/ShoppingCart.jsx";
import products from "./store/Data.js";
import Navbar from "./components/Navbar.jsx";
import Product from "./components/Product.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";
import ScrollToTop from "./Options/ScrollToTop.jsx";

import './App.css'
import ProductDetail from "./components/ProductDetail.jsx";

function App() {
  const [cartsVisibility, setCartVisible] = useState(false);
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);

  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProducts([...productsInCart, newProduct]);
  };

  const onQuantityChange = (productId, count) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === product.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };

  return (
    <Router>
      <div>
        <ScrollToTop />
        <ShoppingCart
          visibility={cartsVisibility}
          products={productsInCart}
          onClose={() => setCartVisible(false)}
          onQuantityChange={onQuantityChange}
          onProductRemove={onProductRemove}
        />
        <Header />
        <Navbar
          setCartVisible={setCartVisible}
          productsInCart={productsInCart}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <Product products={products} onAddToCart={addProductToCart} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/product/:productId"
            element={<ProductDetail onAddToCart={addProductToCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
