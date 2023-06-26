import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import UserExport from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserExport.ContextProvider>
      <App />
    </UserExport.ContextProvider>
  </React.StrictMode>
);
