import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import "./navbar.css";




const LogoutButton = () =>{
    const {logout, isAuthenticated, user} = useAuth0();

    

    return(
        isAuthenticated && (
        <button className="btn btn-lg background-orange white-text" onClick={() => logout()}>
            Log Out: {user.name.split(" ")[0]}
           
        </button>
        )
    )
}

export default LogoutButton