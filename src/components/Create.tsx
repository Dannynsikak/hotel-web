import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addHotel } from "../lib/controller";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("Room Only");
  const [location, setLocation] = useState("");
  const [stars, setStars] = useState("1");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [review, setReview] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [perNight, setPerNight] = useState("");

  // declare a navigate variable for navigation after form submission
  const navigate = useNavigate();

  const addNewHotel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addHotel({
      title,
      description,
      features,
      location,
      stars,
      region,
      country,
      review,
      totalPrice,
      perNight,
    });
    console.log("successfulyy added a new hotel");
    navigate("/");
  };
  // console.log(
  //   title,
  //   "title",
  //   description,
  //   "description",
  //   feature,
  //   "feature",
  //   location,
  //   "loaction"
  // );
  return (
    <div className="create">
      <h2>Add new Hotel</h2>
      <form action="" onSubmit={(e) => addNewHotel(e)}>
        {" "}
        <label htmlFor="hotel-title">Hotel title:</label>{" "}
        <input
          type="text"
          id="hotel-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />{" "}
        <label htmlFor="description">Hotel Description</label>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="features">Main Feature:</label>
        <select
          name="features"
          id="features"
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
        >
          <option value="Room Only">Room Only</option>
          <option value="Bar">Bar</option>
          <option value="Suite">Suite</option>
          <option value="Pool">Pool</option>
        </select>
        <label htmlFor="img-url">Image URL link location:</label>
        <input
          type="text"
          name="img-url"
          id="img-url"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="stars">Stars Rating:</label>
        <select
          name="stars"
          id="stars"
          value={stars}
          onChange={(e) => setStars(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          name="country"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <label htmlFor="region">Region:</label>
        <input
          type="text"
          name="region"
          id="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
        <label htmlFor="reviews">Number of Reviews:</label>
        <input
          type="text"
          name="reviews"
          id="reviews"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <label htmlFor="totalPrice">Total Price (NGN):</label>
        <input
          type="text"
          name="totalPrice"
          id="totalPrice"
          value={totalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
        />
        <label htmlFor="perNight">Price per Night (NGN):</label>
        <input
          type="text"
          name="perNight"
          id="perNight"
          value={perNight}
          onChange={(e) => setPerNight(e.target.value)}
        />{" "}
        <button>Add Hotel</button>
      </form>
    </div>
  );
};

export default Create;
