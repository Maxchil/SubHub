import Total from "./total";

import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import db from "../components/firebase";
import {
  onSnapshot,
  collection,
} from "firebase/firestore";

import { useEffect, useState } from "react";

var total_price_monthly = 0

function TotalLive() {
  const { user } = useAuth0();

  var user_id = user.sub.split("|")[1] + "total"

  const [users, setUsers] = useState([{ name: "loading....", id: "initial" }]);

  const unsubscribe = useEffect(
    () =>
      onSnapshot(collection(db, user_id), (snapshot) =>
        setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  return (
    <>
      <ul className="no-padding">
        {users.map((user) => (
          <li className="display-none">
            {console.log(user.Service)}
            <Total monthly={user.total}/>
            {console.log("key:", user.key)}
          </li>
        ))}
      </ul>
      {/* <InfoCard /> */}
    </>
  );
}

export default TotalLive;