import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const instagramUrl = "https://www.instagram.com/ton_compte_ici";
  const whatsappUrl = "https://wa.me/33767530644"; // Format sans "+" ni espaces
  const mailto = "mailto:arseni.ergin@gmail.com";

  return (
    <div className="flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Контакты</h1>
        <p className="text-gray-600 mb-8">Свяжитесь со мной удобным способом:</p>

        <div className="space-y-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition"
          >
            <FaInstagram size={20} />
            Instagram
          </a>

          <a
            href={mailto}
            className="flex items-center justify-center gap-3 bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
          >
            <FaEnvelope size={20} />
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
