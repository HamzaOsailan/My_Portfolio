import React, { useState } from "react";

interface NavItem {
  id: string;
  label: string;
}

interface NavbarProps {
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50 shadow-md">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        {/* Logo (اختياري) */}
        <div className="text-white font-bold text-lg md:hidden">
          Hamza Osailan
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center space-x-6 w-full">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:text-teal-400 transition font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Burger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:text-teal-400 transition font-medium text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;