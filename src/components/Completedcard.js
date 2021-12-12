import "./navbar.css";
import React, { useRef } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import { deleteSub } from "./utils";

export default function CardInfo({ ServiceName, Price, Bill, Key }) {
  const { isAuthenticated, user } = useAuth0();
  var user_id = user.sub.split("|")[1];

  async function handleSubmit(e) {
    e.preventDefault();

    deleteSub(Key, user_id);
  }

  return (
    isAuthenticated && (
      <>
        <form onSubmit={handleSubmit}>
          <Container className="text-box">
            <h1 className="Completed-card center-text">{ServiceName}</h1>
            <h2 className="center-text">Paying: ${Price} Monthly</h2>
            <h2 className="center-text">Next Bill: {Bill}</h2>
            {/* <Button variant="primary" size="md" className="m-2">
              <FontAwesomeIcon icon={faPencilAlt} /> Edit
            </Button>{" "} */}
            <Container>
              <Row>
                <Col>
                  {" "}
                  <h1 className="anaul">Anualy:{Price * 12}$</h1>
                </Col>
                <Col >
                  <Button
                    variant="danger"
                    size="lg"
                    className="m-2 infobtn"
                    type="submit"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} /> delete
                  </Button>{" "}
                </Col>
              </Row>
            </Container>
          </Container>
        </form>
      </>
    )
  );
}
