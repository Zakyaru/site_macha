import React from "react"
import { useParams } from "react-router-dom"
import { visitsData } from "../data/visits"
import ImageCarousel from "../components/ImageCarousel"

export default function VisiteDetails() {
  const { id } = useParams()
  const visit = visitsData.find(v => v.id === id)

  if (!visit) return <div className="p-6 text-center">Visite non trouvée</div>

  return (
    <div className="px-4 py-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center">{visit.title}</h1>
      <ImageCarousel images={visit.gallery} />
      <p className="text-justify text-sm">{visit.descriptionLongue}</p>
    </div>
  )
}
