import React, { useState } from "react";
import { Heart, HeartOff } from "lucide-react";

const Koenigsegg = () => {
  const [favorites, setFavorites] = useState({});

  const cars = [
    { id: "AgeraRS", name: "Koenigsegg Agera RS", price: "₦800,000,000", img: "src/assets/KRS.jpg" },
    { id: "Jesko", name: "Koenigsegg Jesko", price: "₦1,200,000,000", img: "src/assets/jesko.jpg" },
    { id: "Regera", name: "Koenigsegg Regera", price: "₦700,000,000", img: "src/assets/regera.jpg" },
    { id: "Gemera", name: "Koenigsegg Gemera", price: "₦850,000,000", img: "src/assets/gemera.jpg" },
    { id: "One1", name: "Koenigsegg One:1", price: "₦600,000,000", img: "src/assets/1 ONE.jpg" },
    { id: "CCX", name: "Koenigsegg CCX", price: "₦500,000,000", img: "src/assets/CCX.png" },
    { id: "CC850", name: "Koenigsegg CC850", price: "₦900,000,000", img: "src/assets/cc850.jpeg" },
    { id: "RegeraHybrid", name: "Koenigsegg Regera Hybrid", price: "₦1,100,000,000", img: "src/assets/hybrid.webp" },
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
        </div>
      ))}
    </div>
  );
};

export default Koenigsegg;
