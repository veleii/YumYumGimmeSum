import React from "react";
import { useNavigate } from "react-router-dom"; 
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import '../styles/stylesComponent/header.scss';

const Header = () => {
    const navigate = useNavigate(); 


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
            </div>
        </header>
    );
};

export default Header;