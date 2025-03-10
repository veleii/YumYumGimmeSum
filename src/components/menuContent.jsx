import React, { useEffect, useState } from "react";
import { getApiKey, getMenu } from "../services/api";
import DipContent from "../components/DipContent";

export default function MenuContent() {
  const [menuItems, setMenuItems] = useState([]);
  const [dips, setDips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = await getApiKey();
        if (!apiKey) throw new Error("Ingen API-nyckel hämtades");

        const menuData = await getMenu(apiKey);
        console.log("API Response:", menuData); // Logga hela API-svaret

        if (menuData && Array.isArray(menuData.items)) {
          // Dela upp menyn i dippar och övriga alternativ (och filtrera bort drinkar)
          const dips = menuData.items.filter((item) => item.type === "dip");
          const otherItems = menuData.items.filter(
            (item) => item.type !== "dip" && item.type !== "drink"
          ); // Exkludera drickor
          setMenuItems(otherItems); // Spara övriga menyobjekt (t.ex. wonton)
          setDips(dips); // Spara dippar
        } else {
          throw new Error("Felaktigt format på API-svar");
        }
      } catch (error) {
        console.error("Fel vid API-anrop:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Laddar...</div>;

  return (
    <div className="menu_overlay">
      <h1>MENY</h1>

      {/* Visa de andra menyobjekten */}
      {menuItems.length > 0 ? (
        menuItems.map((item) => (
          <section key={item.id} className="fetch_city">
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

      {/* Visa dippar */}
      {dips.length > 0 && <DipContent dips={dips} />}
    </div>
  );
}
