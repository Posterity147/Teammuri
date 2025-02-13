import React, { useState } from "react";
import { Heart, HeartOff, ShoppingCart } from "lucide-react";

const Bmw = () => {
  // State for favorites and cart
  const [favorites, setFavorites] = useState({});
  const [cart, setCart] = useState([]);

  // BMW car models list
  const cars = [
    { id: "4Series", name: "BMW 4 Series", img: "src/assets/bmw4series.jpg" },
    { id: "3Series", name: "BMW 3 Series", img: "src/assets/2025bmw3series.jpg" },
    { id: "5Series", name: "BMW 5 Series", img: "src/assets/5series.jpg" },
    { id: "X5", name: "BMW X5 Series", img: "src/assets/X5 Series.jpg" },
    { id: "M5", name: "BMW M5 Series", img: "src/assets/M5.jpg" },
    { id: "M3", name: "BMW M3 Series", img: "src/assets/M3.jpg" },
  ];

  // Toggle favorite state for a car
  const toggleFavorite = (carId) => {
    setFavorites((prev) => ({ ...prev, [carId]: !prev[carId] }));
  };

  // Add to cart function
  const addToCart = (car) => {
    setCart((prev) => [...prev, car]);
    alert(`${car.name} has been added to the cart!`);
  };

  return (
    <div className="bg-gray-50 py-10">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">BMW</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          BMW (Bayerische Motoren Werke): A German multinational company that produces luxury vehicles and motorcycles, known for performance and innovation.
          <br />
          <br />
          <strong>Key Details:</strong>
          <ul className="list-disc list-inside">
            <li>Founded: 1916</li>
            <li>HQ: Munich, Germany</li>
            <li>Known for: Luxury vehicles, performance, innovation</li>
            <li>Iconic models: 3 Series, 5 Series, X5, M3, M5</li>
          </ul>
        </p>
      </div>

      {/* BMW Cars Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex justify-between">
              {/* Favorite Toggle */}
              {favorites[car.id] ? (
                <Heart size={30} color="red" onClick={() => toggleFavorite(car.id)} className="cursor-pointer" />
              ) : (
                <HeartOff size={30} color="gray" onClick={() => toggleFavorite(car.id)} className="cursor-pointer" />
              )}
            </div>

            <h3 className="text-center text-xl font-semibold text-blue-800 group-hover:text-blue-600 transition-colors duration-300">
              {car.name}
            </h3>

            <img src={car.img} alt={car.name} className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />

            {/* Add to Cart Button */}
            <button
              className="mt-4 w-full flex items-center justify-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
              onClick={() => addToCart(car)}
            >
              <ShoppingCart className="mr-2" size={20} />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bmw;
