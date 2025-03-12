import Header from "../components/header";
import React from "react";
import "../styles/stylePages/orderConfirm.scss";
import { Link } from "react-router-dom";
import orderContent from "../components/orderContent";
import foodbox from "../assets/foodbox.png";

export default function OrderConfirm() {
  return (
    <div className="orderConfirm">
      <Header />
      <img src={foodbox} alt="" className="img_foodbox" />
      {orderContent()}
    </div>
  );
}
