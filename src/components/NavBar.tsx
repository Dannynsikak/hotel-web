import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineSegment } from "react-icons/md";

const NavBar = () => {
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
        <MdOutlineSegment className="size-7" />
      </div>
    </nav>
  );
};

export default NavBar;
