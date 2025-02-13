import { useState, useEffect, useRef } from "react";
import { Menu, User, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import logo from "../assets/logooo.webp";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // GSAP Animation for Mobile Menu
  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    } else {
      gsap.to(menuRef.current, { opacity: 0, y: -20, duration: 0.3, ease: "power2.in" });
    }
  }, [isMenuOpen]);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Car logo" className="h-16 w-auto object-contain" />
            </Link>
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "Inventory", path: "/dashboard" },
              { name: "Services", path: "/services" },
              { name: "About Us", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <Link 
                key={index} 
                to={item.path} 
                className="text-gray-800 hover:text-gray-500 px-3 py-2 text-md font-medium no-underline transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-6">
            <Link to="/cart">
              <ShoppingCart size={30} className="text-gray-800 hover:text-gray-500 transition" />
            </Link>
            <Link to="/login" className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center">
              <User className="h-5 w-5" />
            </Link>
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden bg-gray-800 text-white p-2 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with GSAP Animation */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden bg-white shadow-md">
          <div className="px-4 py-3 space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "Inventory", path: "/dashboard" },
              { name: "Services", path: "/services" },
              { name: "About Us", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <Link 
                key={index} 
                to={item.path} 
                className="block text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md text-base font-medium no-underline transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}