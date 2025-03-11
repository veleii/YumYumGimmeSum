import React from "react";
import { useSelector } from "react-redux"; // Importera useSelector
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import "../styles/stylesComponent/header.scss";

const Header = () => {
  const navigate = useNavigate();

  // Hämta totalItems från Redux
  const { totalItems } = useSelector((state) => state.cart);

  const goToHome = () => {
    navigate("/");
  };

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <header className="header_container">
      <img
        src={logo}
        alt="Logo"
        className="header_img_left"
        onClick={goToHome}
      />
      <div className="white_box">
        <img
          src={cart}
          alt="Cart Icon"
          className="cart_img_right"
          onClick={goToCart}
        />
        {totalItems > 0 && (
          <span className="cart_count">{totalItems}</span> // Visa cart count om det finns artiklar
        )}
      </div>
    </header>
  );
};

export default Header;
