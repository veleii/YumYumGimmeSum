import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import MenuContent from "../components/menuContent";
import Header from "../components/header";
import "../styles/stylePages/menu.scss";

export default function Menu() {
  return (
    <Provider store={store}>
      <div className="menu">
        <Header />
        <MenuContent />
      </div>
    </Provider>
  );
}


