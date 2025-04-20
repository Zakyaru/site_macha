import React from "react"
import { FaClock, FaTag } from "react-icons/fa"

export default function VisitCard({ title, image, description, duration, price }) {
  return (
    <div className="bg-gray-100 rounded-xl shadow p-4 max-w-sm w-full h-full flex flex-col justify-between">
      
      {/* Haut : titre, image, texte */}
      <div>
        <h2 className="text-xl font-semibold text-center">{title}</h2>
        <img
          src={image}
          alt={title}
          className="rounded-md object-cover w-full h-48 mt-2 mb-4"
        />
        <p className="text-sm text-justify">{description}</p>
      </div>

      {/* Bas : durée, prix, bouton */}
      <div className="mt-6">
        <div className="flex flex-col items-start gap-2 px-2 text-gray-700 text-sm mb-3">
          <span className="flex items-center gap-1">
            <FaClock /> {duration}
          </span>
          <span className="flex items-center gap-1">
            <FaTag /> {price} €
          </span>
        </div>
        <button className="w-full px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
          Подробнее
        </button>
      </div>
    </div>
  )
}
