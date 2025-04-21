import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { visitsData } from "../data/visits";
import ImageCarousel from "../components/ImageCarousel";
import { FaArrowLeft } from "react-icons/fa";

export default function VisiteDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const visit = visitsData.find((v) => v.id === id);

  if (!visit) return <div className="p-6 text-center text-gray-600">Экскурсия не найдена</div>;

  return (
    <div className="px-4 py-8 max-w-4xl mx-auto space-y-6">
      <button
        onClick={() => navigate("/visites")}
        className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-black transition duration-200"
      >
        <FaArrowLeft />
        <span>Назад к списку экскурсий</span>
      </button>

      <h1 className="text-2xl font-bold text-center">{visit.title}</h1>
      <ImageCarousel images={visit.gallery} />
      <p className="text-justify text-sm">{visit.descriptionLongue}</p>
    </div>
  );
}
