import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Dashboard</h1>
      <div className="links">
        <Link to="/" className="text-gray-600">
          All Hotels
        </Link>
        <Link to="/create" className="bg-gray-600 text-white rounded-lg ">
          New Hotels
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
