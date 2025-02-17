import React, { useState } from "react";
import { Heart, HeartOff } from "lucide-react";

const Hyundai = () => {
  const [favorites, setFavorites] = useState({});

  const cars = [
    { id: "Elantra", name: "Hyundai Elantra", price: "₦30,000,000", img: "src/assets/elantra.jpg" },
    { id: "Sonata", name: "Hyundai Sonata", price: "₦35,000,000", img: "src/assets/sonata.jpg" },
    { id: "Tucson", name: "Hyundai Tucson", price: "₦40,000,000", img: "src/assets/tucson.webp" },
    { id: "SantaFe", name: "Hyundai Santa Fe", price: "₦50,000,000", img: "src/assets/santafe.jpg" },
    { id: "Palisade", name: "Hyundai Palisade", price: "₦60,000,000", img: "src/assets/palisade.png" },
    { id: "Creta", name: "Hyundai Creta", price: "₦25,000,000", img: "src/assets/creta.jpg" },
    { id: "Kona", name: "Hyundai Kona", price: "₦28,000,000", img: "src/assets/kona.jpg" },
    { id: "Ioniq5", name: "Hyundai Ioniq 5", price: "₦55,000,000", img: "src/assets/ioniq5.jpg" },
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

export default Hyundai;
