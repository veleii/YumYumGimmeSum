import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../redux/cartSlice";
import { sendOrder } from "../services/api"; // Se till att detta är rätt path till API-anropet
import "../styles/stylePages/cart.scss";

export default function CartContent() {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const tenantId = useSelector((state) => state.tenant.tenantId); // Hämta tenantId från Redux
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleAddToCart = (id, name, description, price) => {
    dispatch(addToCart({ id, name, description, price }));
  };

  const handleOrder = async () => {
    if (!tenantId) {
      alert("Du måste skapa en tenant innan du kan beställa!");
      return;
    }

    if (items.length === 0) {
      alert("Din kundvagn är tom!");
      return;
    }

    try {
      const orderItems = items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })); // Inkluderar antal
      const response = await sendOrder(tenantId, orderItems);
      console.log("Order skickad:", response);
      alert("Din order är bekräftad!");
    } catch (error) {
      console.error("Ordermisslyckande:", error);
      alert("Kunde inte skicka ordern.");
    }
  };

  return (
    <div className="cart_container">
      <div className="cart_overlay">
        {items.length > 0 ? (
          items.map((item) => (
            <section key={item.id} className="fetch_city">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <div className="quantity">
                <button
                  className="add_btn"
                  onClick={() =>
                    handleAddToCart(
                      item.id,
                      item.name,
                      item.description,
                      item.price
                    )
                  }
                >
                  +
                </button>
                <button
                  className="remove_btn"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  -
                </button>
                <span>Antal: {item.quantity}</span>
              </div>
              <div className="menu_dotted_line"></div>
              <section className="sum">
                <h4>{item.price * item.quantity} kr</h4>
              </section>
            </section>
          ))
        ) : (
          <p className="empty-cart-message">Din kundvagn är tom</p>
        )}
      </div>

      <section className="cart_footer">
        <section className="total_footer">
          <p className="sum_footer_left">TOTALT</p>
          <p className="sum_footer_right">{totalAmount} SEK</p>
        </section>
        <button className="button_footer" onClick={handleOrder}>
          TAKE MY MONEY!
        </button>
      </section>
    </div>
  );
}
