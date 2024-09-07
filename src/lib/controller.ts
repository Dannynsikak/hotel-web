import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { app } from "./firebase";
import { AddHotelType } from "../types/hotel";
import { NavigateFunction } from "react-router-dom";

export const firestore = getFirestore(app);

// Hotels Collection

export const hotelsCollection = collection(firestore, "hotels");

// add a new document to your collection
export const addHotel = async (hotelData: AddHotelType) => {
  const newHotel = await addDoc(hotelsCollection, {
    ...hotelData,
    createdAt: serverTimestamp(), // added curent timestamp
  });
  console.log(`The new hotel was created at ${newHotel.path}`);
};

// delet a document in a collection
export const deleteHotel = async (
  id: string | undefined,
  navigate: NavigateFunction
) => {
  const document = doc(firestore, `hotels/${id}`);
  await deleteDoc(document);
  console.log("The hotel has now been deleted");
  navigate("/");
};

// edit a document i.e the description to be precise
export const updateHotel = async (id: string | undefined, docData: any) => {
  const getHotel = doc(firestore, `hotels${id}`);
  await setDoc(getHotel, docData, { merge: true });
  console.log("The value has been written to the database");
};
