import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../redux/menuSlice";
import { addToCart } from "../redux/cartSlice";
import DipContent from "./DipContent";
import Notification from "../components/Notification";
import "../styles/stylePages/menu.scss";

export default function MenuContent() {
  const dispatch = useDispatch();
  const { items, dips, loading, error } = useSelector((state) => state.menu);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  const handleAddToCart = (item, event) => {
    const element = event.currentTarget;

    element.classList.add("added-to-cart");
    setTimeout(() => {
      element.classList.remove("added-to-cart");
    }, 800);

    dispatch(addToCart(item));

    setNotification(`${item.name} har lagts till i kundvagnen`);

    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  if (loading) return <div>Laddar...</div>;
  if (error) return <div>Fel vid hämtning: {error}</div>;

  return (
    <div className="menu_overlay">
      <h1>MENY</h1>

      {items.length > 0 ? (
        items.map((item) => (
          <section
            key={item.id}
            className="fetch_city clickable"
            onClick={(event) => handleAddToCart(item, event)}
          >
            <h2>{item.name}</h2>
            <p className="p_menu">{item.description}</p>
            <div className="menu_dotted_line"></div>
            <section className="sum">
              <h4>{item.price} kr</h4>
            </section>
          </section>
        ))
      ) : (
        <p>Inga andra menyalternativ hittades.</p>
      )}

      <DipContent dips={dips} setNotification={setNotification} />

      {notification && <Notification message={notification} />}
    </div>
  );
}
