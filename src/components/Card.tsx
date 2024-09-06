import React, { useEffect, useState } from "react";
import { hotelsCollection } from "../lib/controller";
import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { NewHotelType } from "../types/hotel";
import Information from "./Information";
import "../index.css";

const Card = () => {
  const [hotels, setHotels] = useState<NewHotelType[]>([]);
  useEffect(
    () =>
      onSnapshot(hotelsCollection, (snapshot: QuerySnapshot<DocumentData>) => {
        setHotels(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      }),
    []
  );
  // console.log(hotels, "hotels");
  return (
    <div className="card">
      <h2 className="title font-bold text-[2rem]  mb-[4em] sm:mb-0">
        All Hotels
      </h2>
      {hotels.length > 0 ? (
        <div>
          {hotels.map((hotel) => (
            <Information key={hotel.id} hotel={hotel} />
          ))}
        </div>
      ) : (
        <h2 className="no-hotels">There are no hotels. Please add one.</h2>
      )}
    </div>
  );
};

export default Card;
