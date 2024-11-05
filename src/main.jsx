import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain = "https://dev-yylu3bl0w0hpmiy2.uk.auth0.com"
      clientId= "qUOrRmlBPda8bzqBJB3I8UPeDBPlPJxd"
      authorizationParams={{
        redirect_uri: "http://localhost:5173"
      }}
      audience = "https://dev-yylu3bl0w0hpmiy2.uk.auth0.com/api/v2/"
      scope = "openid profile email"
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
