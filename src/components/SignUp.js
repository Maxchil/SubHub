import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap";
import "./navbar.css";

const SignUpButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
          <button
            className="btn btn-lg btn-outline-light"
            onClick={() => loginWithRedirect()}
          >
            Get Started
          </button>
    )
  );
};

export default SignUpButton;
