import "./navbar.css";
import React, { useRef, useState } from "react";
import bootstrap from "bootstrap";
import { Container, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import { NewSub } from "./utils";

export default function InfoCard() {
  const { isAuthenticated, user } = useAuth0();
  var user_id = user.sub.split("|")[1]
  const [error, seterror] = useState();
  console.log("email: ", user)
  const serviceRef = useRef();
  const monneyRef = useRef();
  const billingCycleRef = useRef();

  function isValidDate(dateString) {
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
      return false;
  
    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);
  
    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month == 0 || month > 12)
      return false;
  
    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
      monthLength[1] = 29;
  
    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
  }


  async function handleSubmit(e) {
    e.preventDefault();
    console.log(serviceRef.current.value)
    if (isNaN(monneyRef.current.value) === true){
      return seterror("not a valid monney input")
    }

    if (monneyRef.current.value === "" || serviceRef.current.value === "" || billingCycleRef.current.value === ""){
      return seterror("Error: blank spaces ")
    }

    if (isValidDate(billingCycleRef.current.value) == false) {
      return seterror("invalid date")
    }


    NewSub(
      user_id,
      billingCycleRef.current.value,
      monneyRef.current.value,
      serviceRef.current.value,
      user.email
    );
    return seterror("")
  }

  return (
    isAuthenticated && (
      <>
        <form onSubmit={handleSubmit} className="info-card">
          <Container className="text-box">
            <div className="input-group mb-3 margin-text-box">
              <input
                type="text"
                className="form-control"
                placeholder="Service Name"
                ref={serviceRef}
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  eg. Netflix
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                ref={monneyRef}
              />
              <div className="input-group-append">
                <span className="input-group-text">.00</span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Next Billing Cycle"
                ref={billingCycleRef}
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  DD/MM/YYYY
                </span>
              </div>
            </div>
            {error && <Alert key="asdasd" variant= "danger">{error}</Alert>}
            {/* <Button variant="danger" size="md" className="m-2">
              <FontAwesomeIcon icon={faTrashAlt} /> delete
            </Button>{" "} */}
            <Button variant="success" size="md" className="m-2" type="submit">
              <FontAwesomeIcon icon={faCheckSquare} /> Confirm
            </Button>{" "}
          </Container>
        </form>
      </>
    )
  );
}
