import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import main CSS file
import App from "./App"; // Import main App component
import reportWebVitals from "./reportWebVitals"; // Import for performance measurements
import "./Resources/fonts/walsheim/GTWalsheimPro-Medium.ttf"; // Import custom fonts
import "./Resources/fonts/walsheim/GTWalsheimPro-Regular.ttf";
import "./Resources/fonts/walsheim/GTWalsheimPro-Light.ttf";
import "./Resources/fonts/walsheim/GTWalsheimPro-Bold.ttf";
import Footer from "./Components/Footer/Footer"; // Import Footer component
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import { Auth0Provider } from "@auth0/auth0-react"; // Import Auth0Provider for authentication
import Scroll from "./Components/After/Scroll"; // Import Scroll component

// Create root element for rendering the application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application wrapped with Auth0Provider and BrowserRouter
root.render(
  <Auth0Provider
    domain="dev-ox710sb7vz2anbkm.us.auth0.com"
    clientId="PweQjTPb9YKaZs2rkIBBktZTbcgfxdjl"
    authorizationParams={{
      redirect_uri: window.location.origin, // Ensure this matches the allowed callback URL in Auth0
    }}
  >
    <BrowserRouter>
      <App />
      <Scroll />
    </BrowserRouter>
  </Auth0Provider>
);

// For measuring performance in your app
reportWebVitals();
