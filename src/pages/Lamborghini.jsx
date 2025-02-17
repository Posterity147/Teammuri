import React, { useState } from "react";
import { Heart, HeartOff } from "lucide-react";

const Lamborghini = () => {
  const [favorites, setFavorites] = useState({});

  const cars = [
    { id: "Aventador", name: "Lamborghini Aventador", price: "₦850,000,000", img: "src/assets/aventador.jpg" },
    { id: "Huracan", name: "Lamborghini Huracán", price: "₦700,000,000", img: "src/assets/huracan.jpg" },
    { id: "Urus", name: "Lamborghini Urus", price: "₦600,000,000", img: "src/assets/urus.jpeg" },
    { id: "Revuelto", name: "Lamborghini Revuelto", price: "₦1,200,000,000", img: "src/assets/revuelto.jpg" },
    { id: "Sián", name: "Lamborghini Sián", price: "₦1,500,000,000", img: "src/assets/sian.jpg" },
    { id: "Countach", name: "Lamborghini Countach LPI 800-4", price: "₦1,800,000,000", img: "src/assets/countach.avif" },
    { id: "Gallardo", name: "Lamborghini Gallardo", price: "₦450,000,000", img: "src/assets/gallardo.jpg" },
    { id: "Veneno", name: "Lamborghini Veneno", price: "₦2,000,000,000", img: "src/assets/veneno.jpg" },
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

export default Lamborghini;
