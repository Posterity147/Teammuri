import React, { useState } from "react";
import { Heart, HeartOff, ShoppingCart } from "lucide-react";

const Tesla = () => {
  // State for favorites and cart
  const [favorites, setFavorites] = useState({});
  const [cart, setCart] = useState([]);

  // List of Tesla Cars
  const cars = [
    { id: "ModelS", name: "2025 Model S", img: "src/assets/2025models.jpg" },
    { id: "Cybertruck", name: "Cybertruck", img: "src/assets/cybertruck.jpg" },
    { id: "Model3", name: "Model 3", img: "src/assets/2025models.jpg" },
    { id: "ModelX", name: "Model X", img: "src/assets/2025modelX.jpg" },
    { id: "ModelY", name: "Model Y", img: "src/assets/2025modelY.jpg" },
    { id: "Roadster", name: "Roadster", img: "src/assets/2025roadster.jpg" },
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
        <h1 className="text-4xl font-bold text-red-600 mb-4">Tesla</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Tesla, Inc. <br />
          - Founded: 2003 <br />
          - HQ: Austin, Texas, USA <br />
          - Founder: Elon Musk <br />
          - Known for: Electric vehicles (EVs), clean energy solutions, autonomous driving <br />
          - Iconic models: Model S, Model 3, Model X, Model Y, Cybertruck, Roadster
        </p>
      </div>

      {/* Tesla Cars Grid */}
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

            <h3 className="text-center text-xl font-semibold text-red-600 group-hover:text-red-400 transition-colors duration-300">
              {car.name}
            </h3>

            <img src={car.img} alt={car.name} className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />

            {/* Add to Cart Button */}
            <button
              className="mt-4 w-full flex items-center justify-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
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

export default Tesla;
