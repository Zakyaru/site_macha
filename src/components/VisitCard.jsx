import React from "react"
import { FaClock, FaEuroSign } from "react-icons/fa"
import chateauImg from "../assets/chateau2.jpg"

export default function VisitCard() {
  return (
    <div className="bg-gray-100 rounded-xl shadow p-4 max-w-sm flex flex-col items-center gap-3">
      <h2 className="text-xl font-semibold text-center">Chambord</h2>
      <img
        src={chateauImg}
        alt="Château de Chambord"
        className="rounded-md object-cover w-full h-48"
      />
      <p className="text-sm text-justify">
        Экскурсия в замок Шамбор, жемчужину французского Ренессанса, знаменитую своей впечатляющей архитектурой и двойной винтовой лестницей, приписываемой Леонардо да Винчи.
      </p>

      <div className="flex flex-col gap-2 w-full px-2 text-gray-700 text-sm">
        <span className="flex items-center gap-1">
          <FaClock /> 2 heures
        </span>
        <span className="flex items-center gap-1">
          <FaEuroSign /> 100 €
        </span>
      </div>

      <button className="bg-gray-200 cursor-pointer mt-2 px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
        Подробнее
      </button>
    </div>
  )
}
