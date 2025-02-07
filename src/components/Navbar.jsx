import { useState } from "react";
import { Menu, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src="src/assets/logooo.webp"
                alt="Car logo"
                className="h-24 w-40 object-contain"
              />
            </Link>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium no-underline"
                >
                  Home
                </Link>
                <Link
                  to="dashboard"
                  className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium no-underline"
                >
                  Inventory
                </Link>
                <Link
                  to="/services"
                  className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium no-underline"
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium no-underline"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium no-underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative ml-4">
                <Link
                  to="/login" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center"
                >
                  <User className="h-5 w-5" />
                  <span className="sr-only">User icon</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium no-underline"
            >
              Home
            </Link>

            <Link
              to="/services"
              className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium no-underline"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium no-underline"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium no-underline"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
