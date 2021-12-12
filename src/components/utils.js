import {
  onSnapshot,
  collection,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import db from "./firebase";

function randomString(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const NewSub = async (user_id, bill, price, service, Email) => {
  var key = randomString(20)
  await setDoc(doc(db, user_id, key ), {
      bill: bill,
      price: price,
      service: service,
      key: key,
      email: Email
  });
  console.log(bill)
};

export const deleteSub = async (id, user_id) => {
    await deleteDoc(doc(db, user_id, id))
}
