import React from "react";
import { Link } from "react-router-dom";

type Props = {
  onClose: () => void;
  showModal: boolean;
};

const NavBarModel: React.FC<Props> = ({ onClose, showModal }) => {
  return (
    <div className="h-[50%]">
      {/* Overlay to cover the whole screen and sit under the modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Modal container */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-4 transform transition-transform duration-2000 ease-in-out z-50 h-[50%] ${
          showModal ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <span
          onClick={onClose}
          className="cursor-pointer text-2xl absolute top-2 right-2"
        >
          &times;
        </span>
        <div className="links flex flex-col mt-6">
          <Link to="/" className="text-gray-600 mb-2" onClick={onClose}>
            All Hotels
          </Link>
          <Link
            to="/create"
            className="bg-gray-600 text-white rounded-lg p-2"
            onClick={onClose}
          >
            New Hotels
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBarModel;
