import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";
import { AddHotelType } from "../types/hotel";

export const firestore = getFirestore(app);

// Hotels Collection

export const hotelsCollection = collection(firestore, "hotels");

// add a new document to your collection
export const addHotel = async (hotelData: AddHotelType) => {
  const newHotel = await addDoc(hotelsCollection, { ...hotelData });
  console.log(`The new hotel was created at ${newHotel.path}`);
};
