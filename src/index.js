import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import App1 from "./App1";
import { CartProvider } from "./context/CartContext";
import { Authprovider } from "./context/AuthContex";
import { Themeprovider } from "./context/Themcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Themeprovider>
      <Authprovider>
        <CartProvider>
          <App />
        </CartProvider>
      </Authprovider>
    </Themeprovider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
