import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import '../styles/stylesComponent/header.scss'

const Header = () => {
    return (
      <header className="header_container">
       <img src={logo} alt="Left Image" className="header_img_left" />
       <div className="white_box">
       <img src={cart} alt="Right Image" className="cart_img_right" />
       </div>
      </header>
    );
  };
  
  export default Header;