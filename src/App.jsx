import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/menu"; // Importera Menu-komponenten
import Cart from "./pages/cart"; // Importera Cart-komponenten (skapa denna om du inte har den)

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Rutt för / (Menu) */}
        <Route path="/" element={<Menu />} />
        
        {/* Lägg till rutt för /cart (Cart page) */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}