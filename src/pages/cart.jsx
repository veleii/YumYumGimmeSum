import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Header from "../components/header";
import CartContent from "../components/cartContent";
import "../styles/stylePages/cart.scss";

export default function Cart() {
  return (
    <Provider store={store}>
      <div className="cart">
        <Header />
        <CartContent />
      </div>
    </Provider>
  );
}
