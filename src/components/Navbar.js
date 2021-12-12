import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotdog } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import LoginButton from "./Loginbutton";
import LogoutButton from "./LogoutButton";

export default function MainNavbar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="m-1">
            <h2 className="brand">
              <FontAwesomeIcon icon={faHotdog} />
              &nbsp;Sub<span className="brand-orange">Hub</span>
            </h2>
          </Navbar.Brand>

          <LoginButton />
          <LogoutButton />
        </Container>
      </Navbar>
    </>
  );
}
