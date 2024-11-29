import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import App from "./App";
import "./index.css"; // Importing your global styles (if any)

const root = ReactDOM.createRoot(document.getElementById("root")); // Create the root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
