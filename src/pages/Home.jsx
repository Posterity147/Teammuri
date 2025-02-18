import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import slide1 from '../assets/1ab.webp';
import slide2 from '../assets/2ab.jpg';
import slide3 from '../assets/3ab.webp';
import camry from '../assets/2025Tcamry.jpg';
import corolla from '../assets/2025corolla.jpg';
import civic from '../assets/3b94b5b95364af1482c9397e6b8c3b7b.png';
import driver from '../assets/driver.jpg';

const Home = () => {
  const images = [slide1, slide2, slide3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans">
      
      {/* Hero Section with Image and Video Overlay */}
      <div className="relative w-full h-[800px] overflow-hidden">
        <video autoPlay muted loop className="absolute w-full h-full object-cover z-0">
          <source src="your-video.mp4" type="video/mp4" />
        </video>

        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Car Dealership"
            className="absolute w-full h-full object-cover"
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>

        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 bg-black bg-opacity-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Drive Home Your Dream Car
          </motion.h1>
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Find your perfect car today
          </motion.h2>
        </motion.div>
      </div>

      {/* Cars List Section */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 mb-10">
        {[{ img: camry, name: 'Toyota Camry 2025 Model', price: '$28,400', discount: '30% off' },
          { img: corolla, name: 'Toyota Corolla 2025 Model', price: '$23,500', discount: '20% off' },
          { img: civic, name: 'Honda Civic 2025 Model', price: '$23,500', discount: '20% off' }
        ].map((car, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img src={car.img} alt={car.name} className="w-48 mx-auto mb-3 rounded-md" loading="lazy" />
            <h4 className="font-semibold">{car.name}</h4>
            <p className="text-gray-600">{car.price} <br /> <span className="text-red-500"><strike>{car.discount}</strike></span></p>
            <Link to="/payment">
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Buy Now
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Home;
