import React, { useState } from "react";
import { Heart, HeartOff } from "lucide-react";
import modelS from "../assets/2025models.jpg";
import cybertruck from "../assets/cybertruck.jpg";
import model3 from "../assets/2025models.jpg";
import modelX from "../assets/2025modelX.jpg";
import modelY from "../assets/2025modelY.jpg";
import roadster from "../assets/2025roadster.jpg";

const Tesla = () => {
  const [favorites, setFavorites] = useState({});

  const cars = [
    { id: "ModelS", name: "2025 Model S", price: "₦45,000,000", img: modelS },
    { id: "Cybertruck", name: "Cybertruck", price: "₦60,000,000", img: cybertruck },
    { id: "Model3", name: "Model 3", price: "₦35,000,000", img: model3 },
    { id: "ModelX", name: "Model X", price: "₦55,000,000", img: modelX },
    { id: "ModelY", name: "Model Y", price: "₦50,000,000", img: modelY },
    { id: "Roadster", name: "Roadster", price: "₦70,000,000", img: roadster },
  ];

  const toggleFavorite = (carId) => {
    setFavorites((prev) => ({ ...prev, [carId]: !prev[carId] }));
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex justify-between">
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

            <p className="text-center text-lg font-semibold mt-3">{car.price}</p>

            <button
              className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={() => alert(`You are buying the ${car.name}`)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tesla;
