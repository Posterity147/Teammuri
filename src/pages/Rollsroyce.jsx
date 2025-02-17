import React, { useState } from "react";
import { Heart, HeartOff } from "lucide-react";

const RollsRoyce = () => {
  const [favorites, setFavorites] = useState({});

  const cars = [
    { id: "Phantom", name: "Rolls-Royce Phantom", price: "₦700,000,000", img: "src/assets/phantom.webp" },
    { id: "Ghost", name: "Rolls-Royce Ghost", price: "₦600,000,000", img: "src/assets/ghost.webp" },
    { id: "Wraith", name: "Rolls-Royce Wraith", price: "₦550,000,000", img: "src/assets/wraith.jpg" },
    { id: "Dawn", name: "Rolls-Royce Dawn", price: "₦580,000,000", img: "src/assets/dawn.jpg" },
    { id: "Cullinan", name: "Rolls-Royce Cullinan", price: "₦800,000,000", img: "src/assets/cullinan.webp" },
    { id: "Spectre", name: "Rolls-Royce Spectre", price: "₦900,000,000", img: "src/assets/spectre.jpg" },
    { id: "BoatTail", name: "Rolls-Royce Boat Tail", price: "₦3,000,000,000", img: "src/assets/boattail.jpg" },
    { id: "BlackBadgeGhost", name: "Rolls-Royce Black Badge Ghost", price: "₦650,000,000", img: "src/assets/blackbadgeghost.jpg" },
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

export default RollsRoyce;
