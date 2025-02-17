import React, { useState } from "react";
import { Heart } from "lucide-react";
import mercedesLogo from "../assets/mercedes.jpg";
import brabus from "../assets/brabus.jpg";
import maybach from "../assets/2025maybach.jpg";
import glk from "../assets/2025glk.jpg";
import model2025 from "../assets/2025benzz.jpg";
import eClass from "../assets/eclass.jpg";
import gWagon from "../assets/gwagon.jpg";

const Mercedes = () => {
  const [likedCars, setLikedCars] = useState({});

  const cars = [
    { id: "brabus", name: "Mercedes-Brabus", price: "₦80,000,000", img: brabus },
    { id: "maybach", name: "Mercedes Maybach", price: "₦100,000,000", img: maybach },
    { id: "glk", name: "Mercedes-Benz GLK", price: "₦50,000,000", img: glk },
    { id: "model2025", name: "Mercedes Benz 2025 Model", price: "₦120,000,000", img: model2025 },
    { id: "eClass", name: "Mercedes Benz E-Class", price: "₦70,000,000", img: eClass },
    { id: "gWagon", name: "Mercedes G-Wagon", price: "₦150,000,000", img: gWagon },
  ];

  const toggleLike = (carId) => {
    setLikedCars((prevState) => ({
      ...prevState,
      [carId]: !prevState[carId],
    }));
  };

  return (
    <div className="p-6 text-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold flex justify-center items-center gap-3">
          <img src={mercedesLogo} alt="Mercedes" className="w-16 h-16" />
          Mercedes-Benz
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {cars.map((car) => (
          <div key={car.id} className="car-card bg-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl transition">
            <div className="flex justify-between">
              <h3 className="font-semibold">{car.name}</h3>
              <Heart
                size={24}
                color={likedCars[car.id] ? "red" : "gray"}
                className="cursor-pointer transition"
                onClick={() => toggleLike(car.id)}
              />
            </div>
            <img src={car.img} alt={car.name} className="w-full h-48 object-cover rounded-md my-3" loading="lazy" />
            <p className="text-lg font-bold">{car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mercedes;
