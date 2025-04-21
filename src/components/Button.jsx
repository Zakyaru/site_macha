import React from "react";
import { Link } from "react-router-dom";

export default function Button({ text, to }) {
  return (
    <Link to={to} className="w-full sm:w-auto">
      <button className="bg-gray-100 cursor-pointer text-black font-semibold py-3 px-6 rounded-full w-full hover:bg-gray-200 transition">
        {text}
      </button>
    </Link>
  );
}
