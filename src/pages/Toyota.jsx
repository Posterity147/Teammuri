import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import toyotaLogo from "../assets/toyota.jpg";
import corolla from "../assets/corollanew.jpg";
import camry from "../assets/camrynew.webp";
import prius from "../assets/priusnew.jpg";
import landCruiser from "../assets/landcruisernew.webp";
import urbanCruiser from "../assets/urbancruisernew.jpg";

const Toyota = () => {
  const [likedCars, setLikedCars] = useState({});
  const navigate = useNavigate();

  const cars = [
    { name: "corolla", model: "Toyota Corolla 2025", price: 35000000, img: corolla },
    { name: "camry", model: "Toyota Camry 2025", price: 35000000, img: camry },
    { name: "prius", model: "Toyota Prius 2025", price: 25000000, img: prius },
    { name: "landCruiser", model: "Toyota Land Cruiser 2025", price: 45000000, img: landCruiser },
    { name: "urbanCruiser", model: "Toyota Urban Cruiser 2025", price: 30000000, img: urbanCruiser },
  ];

  const toggleLike = (carName) => {
    setLikedCars((prevState) => ({
      ...prevState,
      [carName]: !prevState[carName],
    }));
  };

  const handleViewDetails = (car) => {
    navigate("/car-details", { state: { car } });
  };

  return (
    <div className="p-6 text-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold flex justify-center items-center gap-3">
          <img src={toyotaLogo} alt="Toyota" className="w-16 h-16" />
          Toyota
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {cars.map((car) => (
          <div key={car.name} className="car-card bg-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl transition">
            <div className="flex justify-between">
              <h3 className="font-semibold">{car.model}</h3>
              <Heart size={24} color={likedCars[car.name] ? "red" : "gray"} className="cursor-pointer transition" onClick={() => toggleLike(car.name)} />
            </div>
            <img src={car.img} alt={car.model} className="w-full h-48 object-cover rounded-md my-3" loading="lazy" />
            <p className="text-lg font-bold">₦{car.price.toLocaleString()}</p>
            <Link to="/toyotadetails"><button onClick={() => handleViewDetails(car)} className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toyota;
