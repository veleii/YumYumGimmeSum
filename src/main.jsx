import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./styles/index.scss";
import store from "./redux/store.jsx";

/* // Clear invalid tenantId only if it's found to be invalid on app start
if (
  localStorage.getItem("tenantId") === "undefined" ||
  localStorage.getItem("tenantId") === "null" ||
  localStorage.getItem("tenantId") === ""
) {
  console.log("Clearing invalid tenantId from localStorage");
  localStorage.removeItem("tenantId");
} */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
