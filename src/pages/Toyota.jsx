import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/Cartcontext';

import toyotaLogo from '../assets/toyota.jpg';
import corolla from '../assets/2025corolla.jpg';
import camry from '../assets/2025camry.jpg';
import prius from '../assets/2025prius.jpg';
import landCruiser from '../assets/2025landcruiser.jpg';
import urbanCruiser from '../assets/urban2025.jpg';

const Toyota = () => {
  
  const cars = [
    { name: 'corolla', model: 'Toyota Corolla 2025', price: '₦35,000,000', img: corolla },
    { name: 'camry', model: 'Toyota Camry 2025', price: '₦35,000,000', img: camry },
    { name: 'prius', model: 'Toyota Prius 2025', price: '₦25,000,000', img: prius },
    { name: 'landCruiser', model: 'Toyota Land Cruiser 2025', price: '₦45,000,000', img: landCruiser },
    { name: 'urbanCruiser', model: 'Toyota Urban Cruiser 2025', price: '₦30,000,000', img: urbanCruiser }
  ];

  // Load liked cars from local storage
  const [likedCars, setLikedCars] = useState(() => {
    return JSON.parse(localStorage.getItem('likedCars')) || {};
  });

  // Load cart from local storage
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  // Update local storage when likedCars state changes
  useEffect(() => {
    localStorage.setItem('likedCars', JSON.stringify(likedCars));
  }, [likedCars]);

  // Update local storage when cart state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Toggle like status for a car
  const toggleLike = (carName) => {
    setLikedCars(prevState => ({
      ...prevState,
      [carName]: !prevState[carName]  
    }));
  };

  // Add car to cart with prevention of duplicates
  const addToCart = (car) => {
    setCart(prevCart => {
      if (!prevCart.some(item => item.name === car.name)) {
        return [...prevCart, car];
      }
      return prevCart;
    });
  };

  return (
    <div className="p-6 text-gray-800">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold flex justify-center items-center gap-3">
          <img src={toyotaLogo} alt="Toyota" className="w-16 h-16" />
          Toyota
        </h1>
        <p className="mt-3">
          - <strong>Founded:</strong> 1937 <br />
          - <strong>HQ:</strong> Toyota City, Japan<br />
          - <strong>Known for:</strong> Corolla, Camry, RAV4, Prius, Land Cruiser<br />
          - <strong>Innovations:</strong> Hybrid technology, autonomous driving, sustainable manufacturing<br />
          - <strong>Awards:</strong> World's largest automaker, most valuable automotive brand
        </p>
      </div>

      {/* Cars Display Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {cars.map(car => (
          <div key={car.name} className="bg-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl transition">
            <div className="flex justify-between">
              <h3 className="font-semibold">{car.model}</h3>
              <Heart
                size={24}
                color={likedCars[car.name] ? 'red' : 'gray'}
                className="cursor-pointer transition"
                onClick={() => toggleLike(car.name)}
              />
            </div>
            <img src={car.img} alt={car.model} className="w-full h-48 object-cover rounded-md my-3" loading="lazy" />
            <p className="text-lg font-bold">{car.price}</p>
          <Link to="/cart">
           
          <button
              className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={() => addToCart(car)}
            >
              Add to Cart
            </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-bold">Cart ({cart.length})</h3>
        {cart.length > 0 ? (
          <Link to="/cart">
            <button className="mt-3 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Go to Cart
            </button>
          </Link>
        ) : (
          <p className="text-gray-500 mt-2">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Toyota;
