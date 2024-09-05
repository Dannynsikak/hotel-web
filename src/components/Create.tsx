import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const addNewHotel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("successfulyy added a new hotel");
  };
  console.log(title, "title");
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
        />
      </form>
    </div>
  );
};

export default Create;
