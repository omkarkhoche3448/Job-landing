import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/images/4044.png";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-white">
      <img src={notFoundImage} alt="404 Not Found" loading="lazy" className="w-1/2 max-w-md mb-8"  />
      <p className="text-white/70 mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link 
        to="/" 
        className="bg-lime-400 text-black font-semibold px-4 py-2 rounded hover:bg-lime-500 transition duration-200"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;