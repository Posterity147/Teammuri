import React, { useState } from "react";
import { Heart, HeartOff, ShoppingCart } from "lucide-react";

const Mercedes = () => {
  // State to manage favorites for each car model
  const [favorites, setFavorites] = useState({});
  const [cart, setCart] = useState([]);

  // List of cars
  const cars = [
    { id: "Brabus", name: "Mercedes-Brabus", img: "src/assets/brabus.jpg" },
    { id: "Maybach", name: "Mercedes Maybach", img: "src/assets/2025maybach.jpg" },
    { id: "GLK", name: "Mercedes-Benz GLK", img: "src/assets/2025glk.jpg" },
    { id: "2025Model", name: "Mercedes Benz 2025 Model", img: "src/assets/2025benzz.jpg" },
    { id: "EClass", name: "Mercedes Benz E-Class", img: "src/assets/e class.jpg" },
    { id: "GWagon", name: "Mercedes G-Wagon", img: "src/assets/gwagon.jpg" },
  ];

  // Function to toggle favorite state
  const toggleFavorite = (carId) => {
    setFavorites((prev) => ({ ...prev, [carId]: !prev[carId] }));
  };

  // Function to add to cart
  const addToCart = (car) => {
    setCart((prev) => [...prev, car]);
    alert(`${car.name} has been added to the cart!`);
  };

  return (
    <div className="bg-gray-50 py-10">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Mercedes-Benz</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Mercedes-Benz: German luxury car brand founded in 1926, known for innovative technology, performance, and prestige.
          <br />
          <br />
          <strong>Key Details:</strong>
          <ul className="list-disc list-inside">
            <li>Founded: 1926</li>
            <li>HQ: Stuttgart, Germany</li>
            <li>Known for: Luxury vehicles, innovative tech, performance</li>
            <li>Iconic models: S-Class, E-Class, C-Class, AMG GT</li>
          </ul>
        </p>
      </div>

      {/* Cars Grid Section */}
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

            <h3 className="text-center text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
              {car.name}
            </h3>

            <img src={car.img} alt={car.name} className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />

            {/* Add to Cart Button */}
            <button
              className="mt-4 w-full flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
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

export default Mercedes;
