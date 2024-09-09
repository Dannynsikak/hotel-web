import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineSegment } from "react-icons/md";
import NavBarModel from "./NavBarModel";
import { signOut } from "firebase/auth";
import { auth } from "../lib/controller";

const NavBar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/signUp"); // redirect to the signup screen after logout
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const onCloseModal = () => setShowModal(false);
  return (
    <nav className="navbar">
      <h1>Dashboard</h1>
      <div className="links hidden md:block">
        <Link to="/" className="text-gray-600">
          All Hotels
        </Link>
        <Link to="/create" className="bg-gray-600 text-white rounded-lg ">
          New Hotels
        </Link>
      </div>
      <div className="block md:hidden">
        <MdOutlineSegment className="size-7" onClick={toggleModal} />
      </div>
      {showModal && (
        <NavBarModel onClose={onCloseModal} showModal={showModal} />
      )}
      <button
        onClick={handleLogout}
        className="text-white bg-red-500 p-[.3em] rounded hidden md:block"
      >
        Logout
      </button>
    </nav>
  );
};

export default NavBar;
