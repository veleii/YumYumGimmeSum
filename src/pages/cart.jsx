import Header from "../components/header";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/stylePages/cart.scss";
import cartContent from "../components/cartContent";

export default function Cart() {
  return (
    <div className="cart">
      <Header />

      {cartContent()}
    </div>
  );
}
