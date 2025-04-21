import React from "react";
import Button from "../components/Button";
import chateauImg from "../assets/chateau2.jpg";
import machaImg from "../assets/macha.jpg";

export default function Home() {
  return (
    <>
      <p className="text-xl text-center mb-2">Мария, гид в долине луары</p>
      {/* Image plein écran */}
      <div className="w-full">
        <img
          src={chateauImg}
          alt="Château de la Loire"
          className="w-full h-auto max-h-[400px] object-cover"
        />
      </div>
      <div className="flex flex-col items-center px-4 py-8 gap-8">
        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button text="ПОСМОТРЕТЬ ЭКСКУРСИИ" to="/visites" />
          <Button text="ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ" to="/faq" />
          <Button text="НАПИСАТЬ MHE" to="/contact" />
        </div>

        <p className="text-2xl font-semibold mt-8">ОБО МНЕ</p>

        {/* À propos */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-2 max-w-4xl">
          <img
            src={machaImg}
            alt="Guide touristique"
            className="w-48 h-48 object-cover shadow"
          />
          <p className="text-center sm:text-left">
            Bonjour ! Je suis guide touristique passionné des châteaux de la
            Loire. Je vous propose des visites personnalisées et immersives pour
            découvrir l’histoire, l’architecture et les secrets de ces lieux
            emblématiques.
          </p>
        </div>
      </div>
    </>
  );
}
