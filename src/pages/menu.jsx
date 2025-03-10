import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import MenuContent from "../components/menuContent";
import "../styles/stylePages/menu.scss";

export default function Menu() {
  return (
    <div className="menu">
      <Header />

      <MenuContent />
    </div>
  );
}

/* import React, { useEffect } from "react";
import { getApiKey, getMenu } from "../services/api";

export default function Menu() {
  useEffect(() => {
    const fetchData = async () => {
      const apiKey = await getApiKey();
      if (apiKey) {
        await getMenu(apiKey);
      }
    };
    fetchData();
  }, []);

  return <div>Se konsolen för API-data!</div>;
}
 */
