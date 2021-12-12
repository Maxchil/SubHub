import MainNavbar from "./components/Navbar";
import HomePage from "./components/homepage";
import AddNewService from "./components/AddNewService";
import TotalLive from "./components/totalWithFirebase";
import "bootstrap/dist/css/bootstrap.min.css";
import Subapp from "../src/components/Fixedapp"
import {useAuth0, useauth0} from "@auth0/auth0-react"

//check if date is valid and greater than today javascript (useing format dd/mm/yyyy)



function App() {



  const {isAuthenticated} = useAuth0();

  return (
  <>

    <MainNavbar/>
    {isAuthenticated && (<TotalLive />)}
    <HomePage />
    {isAuthenticated && (<Subapp/>)}
    <AddNewService />
    </>
  
  );

}

export default App;
