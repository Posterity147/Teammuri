import { Link } from 'react-router-dom'; 
import { Facebook, Twitter, Instagram, LinkedinIcon } from 'lucide-react'; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Aardvark Car Dealership</h2>
            <p className="text-gray-400">
              Leading the way in car sales and services. Find the perfect vehicle for you, with outstanding customer service and great prices.
            </p>
          </div>

      
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="no-underline text-gray-400 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/dashboard" className="no-underline text-gray-400 hover:text-white">Inventory</Link>
              </li>
              <li>
                <Link to="/services" className="no-underline text-gray-400 hover:text-white">Services</Link>
              </li>
              <li>
                <Link to="/contact" className=" no-underline text-gray-400 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Phone: +234 9035667678</li>
              <li className="text-gray-400">Email: contact@aardvarkcars.com</li>
              <li className="text-gray-400">Address: 95 Malhub ilofa road, ilorin, Nigeria</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <LinkedinIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">© 2025 Aardvark Car Dealership. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
