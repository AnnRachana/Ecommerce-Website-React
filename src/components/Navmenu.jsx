// Navmenu.js
import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

const Shose = () => <div>Shose</div>;
const Shirt = () => <div>Shirt</div>;
const Sock = () => <div>Sock</div>;
const Cap = () => <div>Cap</div>;

const Navmenu = () => {



  return (
    <div className="bg-slate-400 space-x-3">
      <Link to="/products" key="allProduct">
        Running
      </Link>
      <Link to="shose" key="shose">
        Football
      </Link>
      <Link to="shirt" key="shirt">
        Shirt
      </Link>
      <Link to="sock" key="sock">
        Sock
      </Link>
      <Link to="cap" key="cap">
        Cap
      </Link>

      {/* Add a Link to navigate back to AllProduct */}

      {/* Nested routes for individual products */}
      <Routes>
        <Route path="shose" element={<Shose />} />
        <Route path="shirt" element={<Shirt />} />
        <Route path="sock" element={<Sock />} />
        <Route path="cap" element={<Cap />} />
      </Routes>
    </div>
  );
};

export default Navmenu;
