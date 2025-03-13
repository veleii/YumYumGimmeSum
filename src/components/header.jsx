import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import "../styles/stylesComponent/header.scss";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { items } = useSelector((state) => state.cart);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const goToHome = () => {
    navigate("/");
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const isCartPage = location.pathname === "/cart";
  const isOrderConfirmPage = location.pathname === "/orderConfirm";

  return (
    <header className="header_container">
      <img
        src={logo}
        alt="Logo"
        className="header_img_left"
        onClick={goToHome}
      />

      {!isOrderConfirmPage && (
        <div className="white_box">
          <img
            src={cart}
            alt="Cart Icon"
            className="cart_img_right"
            onClick={goToCart}
          />

          {!isCartPage && totalItems > 0 && (
            <span className="cart_count">{totalItems}</span>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
