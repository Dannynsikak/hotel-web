import React, { useState } from "react";

interface IProps {
  editDescription: boolean;
  setEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
}

const Edit = ({ editDescription, setEditDescription }: IProps) => {
  const [newDescription, setNewDescription] = useState("");
  const handleUpdate = () => {
    // update the hotel
    setEditDescription(!editDescription);
    // navigate to home page
  };
  return (
    <div className="edit">
      <label htmlFor="description">
        Please enter the new hotel description below:
      </label>
      <textarea
        required
        name="description"
        id="description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button className="update-button" onClick={() => handleUpdate()}>
        Update Hotel
      </button>
    </div>
  );
};

export default Edit;
