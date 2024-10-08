import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../lib/controller";
import "../index.css";
import Information from "./Information";

const Details = () => {
  const { id } = useParams();

  // fetch a single document

  const getHotel = doc(firestore, `hotels/${id}`);
  const [isLoading, setIsLoading] = useState(false);
  const [hotel, setHotel] = useState({});

  useEffect(() => {
    const fetchHotelData = async () => {
      const docSnap = await getDoc(getHotel);
      if (docSnap.exists()) {
        const newHotelObj = {
          id: docSnap.id,
          ...docSnap.data(),
        };
        setHotel(newHotelObj);
        setIsLoading(false);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document");
      }
    };
    fetchHotelData();
    // eslint-disable-next-line
  }, []);
  if (isLoading) return <div className="loading" />;

  return (
    <div className="hotel-details">
      {Object.keys(hotel) && Object.keys(hotel).length ? (
        <Information hotel={hotel} detailsPage />
      ) : null}
    </div>
  );
};

export default Details;
