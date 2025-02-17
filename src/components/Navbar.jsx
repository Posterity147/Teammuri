import { useState, useEffect, useRef } from "react";
import { Menu, User } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import logo from "../assets/logooo.webp";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20, visibility: "hidden" },
        { opacity: 1, y: 0, visibility: "visible", duration: 0.4 }
      );
    } else {
      gsap.to(menuRef.current, { opacity: 0, y: -20, duration: 0.3, visibility: "hidden" });
    }
  }, [isMenuOpen]);

  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-4 no-underline">
              <img src={logo} alt="Car logo" className="h-20 w-auto object-contain" />
              <h1 className="text-black text-2xl font-bold no-underline">Aadvark Autos</h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <Link to="/dashboard" className="text-gray-800 hover:text-gray-500 no-underline">Inventory</Link>
            <Link to="/services" className="text-gray-800 hover:text-gray-500 no-underline">Services</Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-500 no-underline">About Us</Link>
            <Link to="/contact" className="text-gray-800 hover:text-gray-500 no-underline">Contact</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            {/* User Login */}
            <Link to="/login" className="bg-gray-800 text-white px-4 py-2 rounded-md no-underline">
              <User className="h-5 w-5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden bg-gray-800 text-white p-2 rounded-md"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hidden by Default) */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 space-y-2 md:hidden"
        >
          <Link to="/" className="block text-gray-800 hover:text-gray-500 no-underline">Home</Link>
          <Link to="/dashboard" className="block text-gray-800 hover:text-gray-500 no-underline">Inventory</Link>
          <Link to="/services" className="block text-gray-800 hover:text-gray-500 no-underline">Services</Link>
          <Link to="/about" className="block text-gray-800 hover:text-gray-500 no-underline">About Us</Link>
          <Link to="/contact" className="block text-gray-800 hover:text-gray-500 no-underline">Contact</Link>
        </div>
      )}
    </nav>
  );
}
