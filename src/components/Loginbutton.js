import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import "./navbar.css";


const LoginButton = () =>{
    const {loginWithRedirect, isAuthenticated} = useAuth0();

    return(
        !isAuthenticated &&(
        <Button className="btn btn-lg background-orange" onClick={() => loginWithRedirect()}>
            Log in
        </Button>
        )
    )
}

export default LoginButton