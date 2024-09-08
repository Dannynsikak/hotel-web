import React, { useEffect, useState } from "react";
import { onSnapshot, query, orderBy, Timestamp } from "firebase/firestore";
import { hotelsCollection } from "../lib/controller"; // Ensure this points to your collection
import { NewHotelType } from "../types/hotel";
import Information from "./Information";
import "../index.css";

const Card = () => {
  const [hotels, setHotels] = useState<NewHotelType[]>([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState<string | null>(null); // Add an error state
  const [sort, setSort] = useState<string>("");

  useEffect(() => {
    const q = query(hotelsCollection, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setHotels(
          snapshot.docs.map((doc) => {
            const data = doc.data() as NewHotelType;
            return {
              id: doc.id,
              ...data,
              createdAt:
                data.createdAt instanceof Timestamp
                  ? data.createdAt
                  : Timestamp.now(),
            };
          })
        );
        setLoading(false); // Set loading to false after data is fetched
      },
      (error) => {
        console.error("Error fetching hotels: ", error);
        setError("Error fetching hotels. Please try again later."); // Set error message
        setLoading(false); // Set loading to false even if there's an error
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>; // Show a loading state
  }

  if (error) {
    return <div>{error}</div>; // Show error message
  }

  const sortedHotels = hotels?.sort((a, b) => {
    if (sort === "title") {
      if (a.title && b.title) return a.title.localeCompare(b.title);
    }
    if (sort === "perNight") {
      return Number(a.perNight) - Number(b.perNight);
    }
    if (sort === "stars") {
      return Number(a.stars) - Number(b.stars);
    }
    if (sort === "review") {
      return Number(a.review) - Number(b.review);
    }
    return 0;
  });

  return (
    <div className="card">
      <h2 className="sort-title">Sort the hotels</h2>
      <select
        className="select"
        defaultValue={""}
        onChange={(e) => setSort(e.target.value)}
      >
        {" "}
        <option value="">Sort By</option>
        <option value="title">Title</option>
        <option value="perNight">Price per night</option>
        <option value="stars">Stars</option>
        <option value="review">Review</option>
      </select>
      <h2 className="title font-bold text-[2rem] mb-[4em] sm:mb-0">
        All Hotels
      </h2>
      {hotels.length > 0 ? (
        <div>
          {sortedHotels.map((hotel) => (
            <Information key={hotel.id} hotel={hotel} />
          ))}
        </div>
      ) : (
        <h2 className="no-hotels text-center">
          There are no hotels. Please add one.
        </h2>
      )}
    </div>
  );
};

export default Card;
