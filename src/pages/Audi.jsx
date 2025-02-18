import React, { useState } from "react";
import { Heart, HeartOff } from "lucide-react";

const Audi = () => {
  // State to manage favorites dynamically
  const [favorites, setFavorites] = useState({});

  // List of Audi Cars
  const cars = [
    { id: "A4", name: "Audi A4", price: "₦40,000,000", img: "src/assets/A4.jpg" },
    { id: "A6", name: "Audi A6", price: "₦55,000,000", img: "src/assets/2025A6.jpg" },
    { id: "A8", name: "Audi A8", price: "₦75,000,000", img: "src/assets/2025A8.jpg" },
    { id: "RS7", name: "Audi RS7", price: "₦85,000,000", img: "src/assets/2025RS7.jpg" },
    { id: "Q5", name: "Audi Q5", price: "₦60,000,000", img: "src/assets/2025Q5.jpg" },
    { id: "R8", name: "Audi R8", price: "₦120,000,000", img: "src/assets/2025R8.jpg" },
  ];

  // Toggle favorite function
  const toggleFavorite = (carId) => {
    setFavorites((prev) => ({ ...prev, [carId]: !prev[carId] }));
  };

  return (
    <div className="bg-gray-50 py-10">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h3 className="text-4xl font-bold text-blue-900 mb-4">Audi</h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Audi AG: A renowned German luxury automaker, known for advanced technology and high performance.
          <br />
          <strong>Key Details:</strong>
          <ul className="list-disc list-inside">
            <li>Founded: 1909</li>
            <li>HQ: Ingolstadt, Germany</li>
            <li>Known for: Luxury vehicles, Quattro all-wheel drive, innovative design</li>
            <li>Iconic models: A4, A6, A8, Q5, R8</li>
          </ul>
        </p>
      </div>

      {/* Audi Cars Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex justify-end">
              {favorites[car.id] ? (
                <Heart size={30} color="red" onClick={() => toggleFavorite(car.id)} className="cursor-pointer" />
              ) : (
                <HeartOff size={30} color="gray" onClick={() => toggleFavorite(car.id)} className="cursor-pointer" />
              )}
            </div>
            <img
              src={car.img}
              alt={car.name}
              className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-2 font-semibold">{car.name}</p>
            <p className="text-center text-lg font-bold text-red-600 mt-2">{car.price}</p>

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

export default Audi;
