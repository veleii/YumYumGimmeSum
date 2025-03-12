import { useSelector } from "react-redux";

export default function OrderContent() {
  const orders = useSelector((state) => state.order.orders); // Hämta orders-arrayen

  if (!orders || orders.length === 0) {
    return <p>Ingen order hittades...</p>;
  }

  const latestOrder = orders[orders.length - 1].order; // Senaste ordern

  return (
    <div className="order_content_container">
      <div className="confirm_container">
        <h1>DINA WONTONS TILLAGAS!</h1>
        <h2>ETA: {new Date(latestOrder.eta).toLocaleTimeString()}</h2>
        <p>Ordernummer: {latestOrder.id}</p>
      </div>
      <section className="bottom_buttons">
        <button className="order_button">GÖR EN NY BESTÄLLNING</button>
        <button className="receipt_button">SE KVITTO</button>
      </section>
    </div>
  );
}
