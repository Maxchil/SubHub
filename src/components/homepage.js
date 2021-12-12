import React from "react";
import SignUpButton from "./SignUp";
import "./navbar.css";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

export default function HomePage() {

  const {isAuthenticated} = useAuth0();

  return (
    !isAuthenticated && (
    <div class="homepage-background">
      <div>
        <Container fluid>
          <h1 className="homepage-title">Your favorite Subscription Manger</h1>
          <h2 className="homepage-disc">
          SubHub is an easy free to use subscription manager to help keep track of your services
          </h2>
          <Row className="signup-btn">
            <Col  md={{ span: 3, offset: 1 }} ><SignUpButton/> </Col>
          </Row>
          
        </Container>
      </div>
    </div>
    )
  );
}
