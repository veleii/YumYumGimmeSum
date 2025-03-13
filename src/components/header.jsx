import React from "react";
import { useSelector } from "react-redux"; // Importera useSelector
import { useNavigate, useLocation } from "react-router-dom"; // Lägg till useLocation
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import "../styles/stylesComponent/header.scss";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Använd useLocation för att kolla vilken sida vi är på

  // Hämta alla artiklar från Redux
  const { items } = useSelector((state) => state.cart);

  // Beräkna den totala mängden artiklar
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const goToHome = () => {
    navigate("/"); // Navigera till hemsidan
  };

  const goToCart = () => {
    navigate("/cart"); // Navigera till varukorgen
  };

  // Kontrollera om vi är på cart- eller orderConfirm-sidan
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
      {/* Visa endast korgen och pricken om vi inte är på cart eller orderConfirm */}
      {!isOrderConfirmPage && (
        <div className="white_box">
          <img
            src={cart}
            alt="Cart Icon"
            className="cart_img_right"
            onClick={goToCart}
          />
          {/* Visa pricken om vi inte är på cart-sidan */}
          {!isCartPage && totalItems > 0 && (
            <span className="cart_count">{totalItems}</span>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
