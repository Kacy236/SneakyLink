import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain = "dev-y0wvm4iw5voue3gk.us.auth0.com"
      clientId= "M5J3nzi9oUp4SNnXMp4OYbwt4gjR9zor"
      authorizationParams={{
        redirect_uri: "http://localhost:5173"
      }}
      audience = "http://localhost:8000"
      scope = "openid profile email"
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
