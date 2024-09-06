import React, { useState } from "react";
import { NewHotelType } from "../types/hotel";
// import { Frame1 } from "../img";
import "../index.css";
import { Link } from "react-router-dom";
import Edit from "./Edit";

interface IProps {
  hotel: NewHotelType;
  detailsPage?: boolean;
}

const Information = ({ hotel, detailsPage }: IProps) => {
  console.log(hotel, "hotel");
  const [editDecription, setEditDescription] = useState(false);
  return (
    <div className="hotel-preview">
      <div className="image-container">
        <img
          src={hotel.location}
          className="location-image inline-block max-w-[100%]"
          alt="Hotel"
        />
        <div className="highlights">
          <div className="highlights-text">
            <h2>{hotel.title}</h2>
            <p className="region">{hotel.region}</p>
          </div>
          <div className="highlights-price">
            <h2 className="per-night">{hotel.perNight}</h2>
            <p>per night</p>
          </div>
        </div>
      </div>
      {/* Description*/}
      <div className="description">
        <span className="reviews">
          <strong className="review-number">{hotel.stars} stars</strong> (based
          on {hotel.review} reviews)
        </span>
        <hr />
        <span className="feature"> Main Features: {hotel?.features}</span>
        {detailsPage ? (
          <>
            <p className="description-text">
              {hotel.description}{" "}
              <strong
                className="edit-text"
                onClick={() => setEditDescription(!editDecription)}
              >
                Edit Description
              </strong>
              {editDecription ? (
                <Edit
                  editDescription={editDecription}
                  setEditDescription={setEditDescription}
                />
              ) : null}
            </p>
            <button>Delete Hotel</button>
          </>
        ) : (
          <Link to={`/hotels/${hotel.id}`}>
            {" "}
            <button className="moreinfo-btn">View More Information</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Information;
