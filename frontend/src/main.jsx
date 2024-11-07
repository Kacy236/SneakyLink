import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="https://dev-yylu3bl0w0hpmiy2.uk.auth0.com"
      clientId="mBESRp6QbYx9sY8bJtktxHTmUo0tj6zW"
      authorizationParams={{
        redirect_uri: "https://sneaky-link-tawny.vercel.app",
      }}
      audience="https://dev-yylu3bl0w0hpmiy2.uk.auth0.com/api/v2/"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
