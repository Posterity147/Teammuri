import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Importing brand images for better performance
import toyota from '../assets/toyota.jpg';
import mercedes from '../assets/mercedes.jpg';
import tesla from '../assets/tesla.png';
import bmw from '../assets/bmwlogo.jpg';
import audi from '../assets/audi.jpg';
import acura from '../assets/acura.png';
import aston from '../assets/auston.jpg';
import koenigsegg from '../assets/koenigsegg.png';
import hyundai from '../assets/hyundai.jpg';
import rollsroyce from '../assets/rollsroyce.jpg';
import lamborghini from '../assets/lamborghini.png';
import pagani from '../assets/pagani.jpg';

const brands = [
  { name: 'Toyota', link: '/toyota', img: toyota },
  { name: 'Mercedes Benz', link: '/mercedes', img: mercedes },
  { name: 'Tesla', link: '/tesla', img: tesla },
  { name: 'BMW', link: '/bmw', img: bmw },
  { name: 'Audi', link: '/audi', img: audi },
  { name: 'Acura', link: '/acura', img: acura },
  { name: 'Aston Martin', link: '/auston', img: aston },
  { name: 'Koenigsegg', link: '/koenigsegg', img: koenigsegg },
  { name: 'Hyundai', link: '/hyundai', img: hyundai },
  { name: 'Rolls Royce', link: '/rollsroyce', img: rollsroyce },
  { name: 'Lamborghini', link: '/lamborghini', img: lamborghini },
  { name: 'Pagani', link: '/pagani', img: pagani },
];

const Dashboard = () => {
  return (
    <div className="bg-gray-100 py-10">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Brands</h1>
        <p className="text-lg text-gray-700">Some of the most popular brands</p>
      </div>

      {/* Brands Section */}
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={brand.link} className="no-underline text-black group">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <p className="text-center mt-4 text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
                  {brand.name}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
