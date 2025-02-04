import { useState } from "react";

interface NavbarProps {
  onNavbarClick: (componentName: string) => void;
}

export const Navbar = ({ onNavbarClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("GetStarted");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClick = (componentName: string) => {
    if (componentName !== "About") {
      setActiveButton(componentName);
      onNavbarClick(componentName);
    }
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const componentLinks = [
    { name: "Button", label: "Button" },
    { name: "Footer", label: "Footer" },
    { name: "Form", label: "Form" },
    { name: "Grid", label: "Grid" },
    { name: "Header", label: "Header" },
    { name: "SearchBar", label: "SearchBar" }
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-gray-100 shadow-lg relative">
      <div className="container mx-auto px-4 flex justify-between items-center py-5">
        <div className="text-xl font-bold tracking-tight">
          <a href="#" className="text-white hover:text-blue-400 transition duration-300">
            Sala-UI
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-gray-200 hover:text-white transition duration-300">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex md:items-center md:space-x-8">
          <a href="#" onClick={() => handleClick("GetStarted")} className={`font-medium px-4 py-2 rounded-lg transition duration-300 ${activeButton === "GetStarted" ? "bg-blue-500 text-white" : "hover:bg-slate-700"}`}>
            Get Started
          </a>

          <div className="relative">
            <button onClick={toggleDropdown} className="font-medium px-4 py-2 rounded-lg transition duration-300 hover:bg-slate-700">
              Components
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-slate-800 rounded-lg shadow-lg py-2">
                {componentLinks.map(({ name, label }) => (
                  <a key={name} href="#" onClick={() => handleClick(name)} className="block px-4 py-2 text-gray-100 hover:bg-slate-700">
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <button onClick={scrollToBottom} className="font-medium px-4 py-2 rounded-lg transition duration-300 hover:bg-slate-700">
            About
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 shadow-lg flex flex-col items-center py-4 space-y-4">
          <a href="#" onClick={() => handleClick("GetStarted")} className={`font-medium px-4 py-2 rounded-lg transition duration-300 ${activeButton === "GetStarted" ? "bg-blue-500 text-white" : "hover:bg-slate-700"}`}>
            Get Started
          </a>

          <button onClick={toggleDropdown} className="font-medium px-4 py-2 rounded-lg transition duration-300 hover:bg-slate-700">
            Components
          </button>

          {isDropdownOpen && (
            <div className="w-5/6 mx-auto bg-slate-800 rounded-lg shadow-lg py-2">
              {componentLinks.map(({ name, label }) => (
                <a key={name} href="#" onClick={() => handleClick(name)} className="block px-4 py-2 text-gray-100 hover:bg-slate-700">
                  {label}
                </a>
              ))}
            </div>
          )}

          <button onClick={scrollToBottom} className="font-medium px-4 py-2 rounded-lg transition duration-300 hover:bg-slate-700">
            About
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
