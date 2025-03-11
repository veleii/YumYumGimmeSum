import React, { useState, useEffect } from "react";

export default function Notification({ message, duration = 2000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      className="notification"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#8dd6be",
        color: "white",
        padding: "10px 20px",
        borderRadius: "4px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );
}
