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
    { id: "ModelS", name: "2025 Model S", img: modelS },
    { id: "Cybertruck", name: "Cybertruck", img: cybertruck },
    { id: "Model3", name: "Model 3", img: model3 },
    { id: "ModelX", name: "Model X", img: modelX },
    { id: "ModelY", name: "Model Y", img: modelY },
    { id: "Roadster", name: "Roadster", img: roadster },
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tesla;
