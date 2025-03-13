import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import "../styles/stylePages/cart.scss";
import { placeOrder } from "../redux/orderSlice";

export default function CartContent() {
  const { totalAmount } = useSelector((state) => state.cart);
  const tenantId = useSelector((state) => state.tenant.tenantId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleAddToCart = (id, name, description, price) => {
    dispatch(addToCart({ id, name, description, price }));
  };

  const itemsIdArray = items.reduce((acc, item) => {
    for (let i = 0; i < item.quantity; i++) {
      acc.push(item.id);
    }
    return acc;
  }, []);

  const handleOrder = async () => {
    dispatch(placeOrder(itemsIdArray));
    navigate("/orderConfirm");
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
                <span>Antal: {item.quantity}</span>
                <button
                  className="remove_btn"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  -
                </button>
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
