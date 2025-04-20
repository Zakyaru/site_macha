import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Traduction des titres selon le chemin
  const getTabFromPath = (pathname) => {
    if (pathname === "/") return "Главная";
    if (pathname.startsWith("/visites/")) return "Подробно";
    if (pathname === "/visites") return "Экскурсии";
    if (pathname === "/faq") return "Вопросы";
    if (pathname === "/contact") return "Контакты";
    return "";
  };
  

  const selectedTab = getTabFromPath(location.pathname);

  const handleTabClick = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <nav className="bg-orange-100 text-black flex items-center justify-between px-6 py-3 shadow-md fixed w-full z-10">
        <button onClick={() => setMenuOpen(true)} className="cursor-pointer">
          <FaBars size={24} />
        </button>
        <h1 className="text-lg font-semibold">{selectedTab}</h1>
        <div style={{ width: 24 }} />
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-10"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-white z-20 p-6 shadow-lg flex flex-col transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Меню</h2>
          <button onClick={() => setMenuOpen(false)} className="cursor-pointer">
            <FaTimes size={24} />
          </button>
        </div>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link to="/" className="text-lg underline hover:font-semibold" onClick={handleTabClick}>
              Главная
            </Link>
          </li>
          <li>
            <Link to="/visites" className="text-lg underline hover:font-semibold" onClick={handleTabClick}>
              Экскурсии
            </Link>
          </li>
          <li>
            <Link to="/faq" className="text-lg underline hover:font-semibold" onClick={handleTabClick}>
              Вопросы
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg underline hover:font-semibold" onClick={handleTabClick}>
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
