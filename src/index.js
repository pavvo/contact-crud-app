import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { AuthContext } from "./data/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContext.Provider>
      <App />
    </AuthContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
