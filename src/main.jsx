import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
<<<<<<< HEAD
import { DataProvider } from "./shit/DataContext.jsx";
=======
import { DataProvider } from "./context/DataContext.jsx";
>>>>>>> parent of b2480f5 (FIX: Case issues)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
