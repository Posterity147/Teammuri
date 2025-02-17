import React, { useState } from "react";
import { Heart, HeartOff } from "lucide-react";

const Pagani = () => {
  const [favorites, setFavorites] = useState({});

  const cars = [
    { id: "Huayra", name: "Pagani Huayra", price: "₦1,000,000,000", img: "src/assets/huarya.webp" },
    { id: "HuayraBC", name: "Pagani Huayra BC", price: "₦1,500,000,000", img: "src/assets/huaryabc.jpg" },
    { id: "HuayraRoadster", name: "Pagani Huayra Roadster", price: "₦1,700,000,000", img: "src/assets/huaryaroadster.jpeg" },
    { id: "ZondaF", name: "Pagani Zonda F", price: "₦1,800,000,000", img: "src/assets/zondaf.jpg" },
    { id: "ZondaCinque", name: "Pagani Zonda Cinque", price: "₦2,200,000,000", img: "src/assets/zondacinque.webp" },
    { id: "ZondaRevolucion", name: "Pagani Zonda Revolución", price: "₦2,500,000,000", img: "src/assets/zondarevolucion.webp" },
    { id: "Utopia", name: "Pagani Utopia", price: "₦1,900,000,000", img: "src/assets/utopia.jpg" },
    { id: "Imola", name: "Pagani Imola", price: "₦3,000,000,000", img: "src/assets/imola.jpg" },
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

export default Pagani;
