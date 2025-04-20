import React from "react"
import VisitCard from "../components/VisitCard"
import { visitsData } from "../data/visits"

export default function Visites() {
  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl font-bold mb-8 text-center">Каталог экскурсий</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {visitsData.map((visit, i) => (
          <VisitCard key={i} {...visit} />
        ))}
      </div>
    </div>
  )
}
