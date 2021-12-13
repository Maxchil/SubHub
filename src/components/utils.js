import {
  onSnapshot,
  collection,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
  getDoc,
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

export const NewSub = async (user_id, bill, price, service, Email, userId) => {
  var key = randomString(20);
  await setDoc(doc(db, user_id, key), {
    bill: bill,
    price: price,
    service: service,
    key: key,
    email: Email,
    userId: userId,
  });
};

export const NewSubTotal = async (userId, price) => {
  var current_total = 0;

  const docRef = doc(db, userId + "total", "total");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    current_total = docSnap.data()["total"];
  }

  await setDoc(doc(db, userId + "total", "total"), {
    total: parseInt(price) + parseInt(current_total),
  });
};

export const deleteSub = async (id, user_id) => {
  var current_total = 0;
  var price = 0;

  const docRef = doc(db, user_id + "total", "total");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    current_total = docSnap.data()["total"];
  }

  const docRef1 = doc(db, user_id, id);
  const docSnap1 = await getDoc(docRef1);

  if (docSnap1.exists()) {
    price = parseInt(docSnap1.data()["price"]);
  }

  await setDoc(doc(db, user_id + "total", "total"), {
    total: parseInt(current_total) - parseInt(price),
  });

  await deleteDoc(doc(db, user_id, id));
};

export const updateTotal = async (user_id) => {};
