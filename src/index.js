import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>hello,react</h1>
      <Food />
    </div>
  );
}

function Food() {
  return (
    <div>
      <img src="../public/food/soto-betawi.jpg" alt="" />
      <h2>soto betawi dari jakarta</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
