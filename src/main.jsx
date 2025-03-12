import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// Add this to your main.jsx or index.js to clear any invalid tenant values on app start
if (
  localStorage.getItem("tenantId") === "undefined" ||
  localStorage.getItem("tenantId") === "null" ||
  localStorage.getItem("tenantId") === ""
) {
  console.log("Clearing invalid tenantId from localStorage");
  localStorage.removeItem("tenantId");
}
