// import React, { useState } from "react";

// interface NavbarProps {
//   onNavbarClick: (componentName: string) => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ onNavbarClick }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeButton, setActiveButton] = useState("GetStarted"); // Get Started attivo di default

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleClick = (componentName: string) => {
//     setActiveButton(componentName); // Imposta il pulsante attivo
//     onNavbarClick(componentName);
//     setIsOpen(false); // Chiude il menu mobile dopo il click
//   };

//   return (
//     <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-gray-100 shadow-lg">
//       <div className="container mx-auto px-4 flex justify-between items-center py-5">
        
//         {/* Logo */}
//         <div className="text-xl font-bold tracking-tight">
//           <a href="#" className="text-white hover:text-blue-400 transition duration-300">
//             Sala-UI
//           </a>
//         </div>

//         {/* Hamburger Menu */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="focus:outline-none text-gray-200 hover:text-white transition duration-300"
//           >
//             <svg
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Links (Desktop) */}
//         <div className="hidden md:flex md:items-center md:space-x-8">
//           {[
//             { name: "GetStarted", label: "Get Started" },
//             { name: "Button", label: "Button" },
//             { name: "Footer", label: "Footer" },
//             { name: "Form", label: "Form" },
//             { name: "Grid", label: "Grid" },
//             { name: "Header", label: "Header" },
//             { name: "SearchBar", label: "Search Bar" }
//           ].map(({ name, label }) => (
//             <a
//               key={name}
//               href="#"
//               onClick={() => handleClick(name)}
//               className={`font-medium px-4 py-2 rounded-lg transition duration-300 ${
//                 activeButton === name ? "bg-blue-500 text-white" : "hover:bg-slate-700"
//               }`}
//             >
//               {label}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";

interface NavbarProps {
  onNavbarClick: (componentName: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavbarClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("GetStarted"); // "Get Started" attivo di default

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (componentName: string) => {
    setActiveButton(componentName); // Imposta il pulsante attivo
    onNavbarClick(componentName);
    setIsOpen(false); // Chiude il menu mobile dopo il click
  };

  // Definiamo l'array dei link per poterlo riutilizzare sia per desktop che per mobile
  const links = [
    { name: "GetStarted", label: "Get Started" },
    { name: "Button", label: "Button" },
    { name: "Footer", label: "Footer" },
    { name: "Form", label: "Form" },
    { name: "Grid", label: "Grid" },
    { name: "Header", label: "Header" },
    { name: "SearchBar", label: "Search Bar" },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-gray-100 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center py-5">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">
          <a
            href="#"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Sala-UI
          </a>
        </div>

        {/* Hamburger Menu per Mobile */}
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
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Links per Desktop */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {links.map(({ name, label }) => (
            <a
              key={name}
              href="#"
              onClick={() => handleClick(name)}
              className={`font-medium px-4 py-2 rounded-lg transition duration-300 ${
                activeButton === name
                  ? "bg-blue-500 text-white"
                  : "hover:bg-slate-700"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu: appare solo se isOpen è true */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center px-4 space-y-6 pt-4">
            {links.map(({ name, label }) => (
              <a
                key={name}
                href="#"
                onClick={() => handleClick(name)}
                className={`font-medium text-lg w-full text-center py-3 rounded-lg transition duration-300 ${
                  activeButton === name
                    ? "bg-blue-500 text-white"
                    : "hover:bg-slate-700"
                }`}
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

export default Navbar;

