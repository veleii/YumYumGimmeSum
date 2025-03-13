import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "../styles/stylesComponent/DipContent.scss";

export default function DipAndDrinksContent({ dips, title, setNotification }) {
  const dispatch = useDispatch();

  const handleAddToCart = (dip, event) => {
    const element = event.currentTarget;

    element.classList.add("added-to-cart");
    setTimeout(() => {
      element.classList.remove("added-to-cart");
    }, 800);

    dispatch(addToCart(dip));

    if (setNotification) {
      setNotification(`${dip.name} har lagts till i kundvagnen`);
    }
  };

  return (
    <section className="dip_container">
      <section className="fetch_city">
        <h2>{title}</h2>
        <div className="menu_dotted_line"></div>
        <section className="sum">
          <h4>{dips.length > 0 ? dips[0].price + "kr" : ""}</h4>
        </section>
      </section>

      <section className="dip_items">
        {dips.map((dip) => (
          <div
            key={dip.id}
            className="dip_select clickable"
            onClick={(event) => handleAddToCart(dip, event)}
          >
            <p className="p_dip">{dip.name}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
