import "./navbar.css";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import InfoCard from "./InfoCard";


export default function AddNewService() {
  const { isAuthenticated } = useAuth0();
  var NewService = (false)


  return (
    isAuthenticated && (
      <>
        <InfoCard/>
        <Container className="d-grid gap-2">
          {/* <Button className="btn btn-lg btn-primary btn-block background-orange add-new">
            <FontAwesomeIcon icon={faPlus} onClick={<InfoCard />}/> Add New Service
          </Button> */}
        </Container>
      </>
    )
  );
}
