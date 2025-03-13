import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

export default function OrderContent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orders = useSelector((state) => state.order.orders);

  const [isCartVisible, setIsCartVisible] = useState(true); // State för att dölja varukorgen
  const [etaMinutes, setEtaMinutes] = useState(null); // State för att hålla minutdifferensen

  // Töm varukorgen och döljer den när sidan laddas
  useEffect(() => {
    dispatch(clearCart());
    setIsCartVisible(false); // Döljer varukorgen när användaren är på order-sidan

    if (orders && orders.length > 0) {
      const latestOrder = orders[orders.length - 1].order;
      const eta = new Date(latestOrder.eta);
      const now = new Date();

      const diffInMs = eta - now;
      const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

      setEtaMinutes(diffInMinutes);
    }
  }, [dispatch, orders]);

  if (!orders || orders.length === 0) {
    return <p>Ingen order hittades...</p>;
  }

  const latestOrder = orders[orders.length - 1].order;

  const handleNewOrder = () => {
    navigate("/");
  };

  return (
    <div className="order_content_container">
      <div className="confirm_container">
        <h1>
          DINA WONTONS <span className="last-word">TILLAGAS!</span>
        </h1>
        {etaMinutes !== null ? (
          <h2>ETA {etaMinutes} MIN</h2>
        ) : (
          <h2>Hämtar ETA...</h2>
        )}
        <p>#{latestOrder.id}</p>
      </div>
      <section className="bottom_buttons">
        <button className="order_button" onClick={handleNewOrder}>
          GÖR EN NY BESTÄLLNING
        </button>
      </section>
    </div>
  );
}
