import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import createAuth0Client from '@auth0/auth0-spa-js';

const domain = "dev-l549c08c.us.auth0.com";
const clientId = "qL9fCty3Hk3oqpGWAyiOubVRowfC7ZGS";

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    {console.log(process.env.REACT_APP_AUTH0_CLIENT_ID)}
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
