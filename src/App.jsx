import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/menu";
import Cart from "./pages/cart";
import OrderConfirm from "./pages/orderConfirm";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderConfirm" element={<OrderConfirm />} />
      </Routes>
    </Router>
  );
}
