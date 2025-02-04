import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", label: "Home", href: "#" },
    { name: "About", label: "About", href: "#" },
    { name: "Services", label: "Services", href: "#" },
    { name: "Contact", label: "Contact", href: "#" }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-gray-100 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center py-5">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">
          <a
            href="#"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Logo
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-gray-200 hover:text-white transition duration-300"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Links Desktop */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {links.map(({ name, label, href }) => (
            <a
              key={name}
              href={href}
              className="font-medium px-4 py-2 rounded-lg hover:bg-slate-700 transition duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center px-4 space-y-6 pt-4 pb-6">
            {links.map(({ name, label }) => (
              <a
                key={name}
                href="#"
                className="font-medium text-lg w-full text-center py-3 rounded-lg hover:bg-slate-700 transition duration-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

