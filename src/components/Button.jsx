import React from "react"

export default function Button({ text }) {
  return (
    <button className="bg-orange-200 cursor-pointer text-black font-semibold py-3 px-6 rounded-full w-full sm:w-auto hover:bg-orange-100 transition">
      {text}
    </button>
  )
}
