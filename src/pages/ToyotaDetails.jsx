import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";
// Data for Toyota Cars
const cars = [
  {
    id: "Corolla",
    name: "Toyota Corolla",
    price: "₦3,000,000",
    img: "src/assets/corolla.jpg",
    specs: "Engine: 1.8L I4, 0-100 km/h: 9.5s, Top speed: 180 km/h",
    features: ["Fuel-efficient", "Advanced safety features", "Toyota Safety Sense"],
  },
  {
    id: "Camry",
    name: "Toyota Camry",
    price: "₦6,500,000",
    img: "src/assets/camry.jpg",
    specs: "Engine: 2.5L I4, 0-100 km/h: 8.2s, Top speed: 210 km/h",
    features: ["Comfortable ride", "Spacious interior", "Infotainment system"],
  },
  {
    id: "Hilux",
    name: "Toyota Hilux",
    price: "₦9,000,000",
    img: "src/assets/hilux.jpg",
    specs: "Engine: 2.8L I4, 0-100 km/h: 10.5s, Top speed: 180 km/h",
    features: ["Off-road capability", "Durable design", "High payload capacity"],
  },
  {
    id: "LandCruiser",
    name: "Toyota Land Cruiser",
    price: "₦15,000,000",
    img: "src/assets/landcruisernew.webp",
    specs: "Engine: 5.7L V8, 0-100 km/h: 8.0s, Top speed: 220 km/h",
    features: ["Luxury interior", "Off-road beast", "Advanced navigation system"],
  },
  {
    id: "RAV4",
    name: "Toyota RAV4",
    price: "₦7,000,000",
    img: "src/assets/rav4.jpg",
    specs: "Engine: 2.5L I4, 0-100 km/h: 8.5s, Top speed: 200 km/h",
    features: ["Compact SUV", "Hybrid option", "All-wheel drive"],
  },
  {
    id: "Supra",
    name: "Toyota Supra",
    price: "₦12,000,000",
    img: "src/assets/supra.webp",
    specs: "Engine: 3.0L I6, 0-100 km/h: 4.1s, Top speed: 250 km/h",
    features: ["Sporty design", "Advanced performance", "Turbocharged engine"],
  },
  {
    id: "Highlander",
    name: "Toyota Highlander",
    price: "₦8,500,000",
    img: "src/assets/highlander.png",
    specs: "Engine: 3.5L V6, 0-100 km/h: 7.7s, Top speed: 210 km/h",
    features: ["Family-friendly", "Spacious 3-row seating", "Hybrid version available"],
  },
  {
    id: "Prius",
    name: "Toyota Prius",
    price: "₦5,000,000",
    img: "src/assets/priusnew.jpg",
    specs: "Engine: 1.8L I4, 0-100 km/h: 10.0s, Top speed: 180 km/h",
    features: ["Fuel-efficient", "Hybrid powertrain", "Environmentally friendly"],
  },
];

const ToyotaDetails = () => {
  const navigate = useNavigate();

  const handleBuyNow = (car) => {
    navigate("/payment", { state: { car } });
  };

  return (
    <div className="container mx-auto py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Toyota Models</h2>

      <div>
        {cars.map((car) => (
          <div key={car.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition mb-8">
            <div className="flex flex-col items-center sm:flex-row sm:items-start">
              {/* Car Image */}
              <img
                src={car.img}
                alt={car.name}
                className="w-full sm:w-1/2 lg:w-1/3 h-48 sm:h-auto object-cover rounded-lg mb-4 sm:mb-0"
              />
              {/* Car Details */}
              <div className="sm:ml-6">
                <h3 className="text-2xl font-semibold text-center sm:text-left">{car.name}</h3>
                <p className="text-lg font-bold text-gray-800 mt-2">{car.price}</p>
                <p className="text-sm text-gray-600 mt-2">{car.specs}</p>
                <h4 className="font-semibold mt-4">Features:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {car.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Link to="/payment">
                {/* Buy Now Button */}
                <button
                  onClick={() => handleBuyNow(car)}
                  className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Buy Now
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToyotaDetails;
