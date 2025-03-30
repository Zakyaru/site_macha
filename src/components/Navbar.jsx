import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Onglet 1");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setMenuOpen(false);
  };

  return (
    <div>
      {/* Barre de navigation */}
      <nav className="bg-orange-100 text-black flex items-center justify-between px-6 py-3 shadow-md fixed w-full z-10">
        {/* Icône burger menu */}
        <button onClick={() => setMenuOpen(true)} className="cursor-pointer">
          <FaBars size={24} />
        </button>

        {/* Nom de l'onglet sélectionné */}
        <h1 className="text-lg font-semibold">{selectedTab}</h1>

        {/* Espace vide pour équilibrer la barre */}
        <div style={{ width: 24 }} />
      </nav>

      {/* Fond opaque */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-10"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Menu latéral (toujours monté, mais glissé hors écran quand fermé) */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-white z-20 p-6 shadow-lg flex flex-col transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="cursor-pointer">
            <FaTimes size={24} />
          </button>
        </div>

        <ul className="list-disc pl-6 space-y-2">
  <li>
    <Link to="/" className="text-lg underline hover:font-semibold" onClick={() => handleTabClick("Accueil")}>
      Accueil
    </Link>
  </li>
  <li>
    <Link to="/visites" className="text-lg underline hover:font-semibold" onClick={() => handleTabClick("Visites")}>
      Visites
    </Link>
  </li>
  <li>
    <Link to="/visites/details" className="text-lg underline hover:font-semibold" onClick={() => handleTabClick("Details")}>
      Details
    </Link>
  </li>
</ul>

      </div>
    </div>
  );
};

export default Navbar;
