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
      
      <div className="relative w-full h-[800px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Car Dealership"
            className="absolute w-full h-full object-cover"
            loading="lazy"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
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

      
      <div className="flex flex-wrap justify-center gap-6 mt-10 mb-10">
        {[
          { img: camry, name: 'Toyota Camry 2025 Model', price: '$28,400', discount: '30% off' },
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

      
      <div className="bg-gray-100 py-10 text-center">
        <h2 className="text-4xl mb-6">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { quote: 'Aardvark made buying my first car so easy and stress-free. Great customer service!', name: 'Abdulmalik Badmus' },
            { quote: 'I love my new Toyota Camry! They helped me get the best deal on financing.', name: 'Aisha' }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <p className="text-lg">"{testimonial.quote}"</p>
              <p className="mt-3 text-gray-700 font-semibold">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

    
      <div className="bg-blue-900 text-white py-10 text-center">
        <h2 className="text-4xl mb-5">Get Pre-Approved for Financing</h2>
        <p className="text-2xl mb-5">With our easy online application, you can get pre-approved in minutes!</p>
        <Link to="/financing" className="text-xl text-yellow-300 underline">
          Apply for Financing
        </Link>
      </div>

      
      <div className="py-20 text-center">
        <h2 className="text-4xl mb-5">Read Our Latest Articles</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { title: 'How to Choose the Right Car for Your Family', excerpt: 'Choosing the perfect car for your family can be overwhelming. Here’s a guide to help...', link: '/choose' },
            { title: 'Top 5 Cars for Road Trips in 2025', excerpt: 'Planning a road trip? Here are the top 5 cars that are perfect for long drives...', link: '/roads' }
          ].map((blog, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <h3 className="text-2xl mb-3">{blog.title}</h3>
              <p className="mb-3 text-gray-600">{blog.excerpt}</p>
              <Link to={blog.link} className="text-blue-600 underline">
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
