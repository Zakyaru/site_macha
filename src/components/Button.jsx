import React from "react";
import { Link } from "react-router-dom";

export default function Button({ text, to }) {
  return (
    <Link to={to} className="w-full sm:w-auto">
      <button className="bg-orange-200 cursor-pointer text-black font-semibold py-3 px-6 rounded-full w-full hover:bg-orange-100 transition">
        {text}
      </button>
    </Link>
  );
}
