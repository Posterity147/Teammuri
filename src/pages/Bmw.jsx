import React, { useState } from "react";
import { Heart, HeartOff } from "lucide-react";

const Bmw = () => {
  const [favorites, setFavorites] = useState({});

  const cars = [
    { id: "4Series", name: "BMW 4 Series", price: "₦50,000,000", img: "src/assets/bmw4series.jpg" },
    { id: "3Series", name: "BMW 3 Series", price: "₦42,000,000", img: "src/assets/2025bmw3series.jpg" },
    { id: "X5", name: "BMW X5", price: "₦65,000,000", img: "src/assets/X5.jpg" },
    { id: "X7", name: "BMW X7", price: "₦90,000,000", img: "src/assets/X7.webp" },
    { id: "M3", name: "BMW M3", price: "₦72,000,000", img: "src/assets/M3.jpeg" },
    { id: "M5", name: "BMW M5", price: "₦100,000,000", img: "src/assets/M5.webp" },
    { id: "iX", name: "BMW iX", price: "₦300,000,000", img: "src/assets/ix.jpg" },
    { id: "i4", name: "BMW i4", price: "₦55,000,000", img: "src/assets/i4.jpg" },
  ];

  const toggleFavorite = (carId) => {
    setFavorites((prev) => ({ ...prev, [carId]: !prev[carId] }));
  };

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
      {cars.map((car) => (
        <div key={car.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">{car.name}</h3>
            {favorites[car.id] ? (
              <Heart size={24} color="red" className="cursor-pointer" onClick={() => toggleFavorite(car.id)} />
            ) : (
              <HeartOff size={24} color="gray" className="cursor-pointer" onClick={() => toggleFavorite(car.id)} />
            )}
          </div>
          <img src={car.img} alt={car.name} className="w-full h-48 object-cover rounded-lg mt-3" />
          <p className="text-lg font-bold mt-2">{car.price}</p>

          <button
            className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => alert(`You are buying the ${car.name}`)}
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Bmw;
