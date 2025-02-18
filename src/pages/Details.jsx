import React from "react";
import { Link } from "react-router";

// Data for Koenigsegg Cars
const cars = [
  {
    id: "AgeraRS",
    name: "Koenigsegg Agera RS",
    price: "₦800,000,000",
    img: "src/assets/KRS.jpg",
    specs: "Top speed: 447 km/h, 0-100 km/h: 2.9s, 5.0L V8",
    features: ["Carbon fiber body", "Active aerodynamics", "Hybrid powertrain"],
  },
  {
    id: "Jesko",
    name: "Koenigsegg Jesko",
    price: "₦1,200,000,000",
    img: "src/assets/jesko.jpg",
    specs: "Top speed: 480 km/h, 0-100 km/h: 2.5s, 5.0L V8",
    features: ["Hypercar performance", "Twin-turbo V8", "Advanced suspension system"],
  },
  {
    id: "Regera",
    name: "Koenigsegg Regera",
    price: "₦700,000,000",
    img: "src/assets/regera.jpg",
    specs: "Top speed: 410 km/h, 0-100 km/h: 2.8s, Hybrid powertrain",
    features: ["Seamless hybrid powertrain", "Dual-clutch transmission", "Lightweight construction"],
  },
  {
    id: "Gemera",
    name: "Koenigsegg Gemera",
    price: "₦850,000,000",
    img: "src/assets/gemera.jpg",
    specs: "Top speed: 400 km/h, 0-100 km/h: 1.9s, 3-cylinder engine with hybrid powertrain",
    features: ["Four-seat luxury", "Hybrid powertrain", "Advanced infotainment system"],
  },
  {
    id: "One1",
    name: "Koenigsegg One:1",
    price: "₦600,000,000",
    img: "src/assets/1 ONE.jpg",
    specs: "Top speed: 440 km/h, 0-100 km/h: 2.8s, 5.0L V8",
    features: ["Aerodynamic design", "One horsepower per kilogram", "Lightweight construction"],
  },
  {
    id: "CCX",
    name: "Koenigsegg CCX",
    price: "₦500,000,000",
    img: "src/assets/CCX.png",
    specs: "Top speed: 400 km/h, 0-100 km/h: 3.2s, 4.7L V8",
    features: ["Carbon fiber body", "Active suspension system", "Advanced air conditioning"],
  },
  {
    id: "CC850",
    name: "Koenigsegg CC850",
    price: "₦900,000,000",
    img: "src/assets/cc850.jpeg",
    specs: "Top speed: 410 km/h, 0-100 km/h: 2.9s, 5.0L V8",
    features: ["Unique design", "Carbon fiber technology", "Track-ready aerodynamics"],
  },
  {
    id: "RegeraHybrid",
    name: "Koenigsegg Regera Hybrid",
    price: "₦1,100,000,000",
    img: "src/assets/hybrid.webp",
    specs: "Top speed: 400 km/h, 0-100 km/h: 2.8s, Hybrid powertrain",
    features: ["Seamless hybrid powertrain", "Advanced suspension", "Luxury interior"],
  },
];

const Details = () => {
  return (
    <div className="container mx-auto py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Koenigsegg Models</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cars.map((car) => (
          <div key={car.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img
              src={car.img}
              alt={car.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{car.name}</h3>
            <p className="text-lg font-bold text-gray-800 mt-2">{car.price}</p>
            <p className="text-sm text-gray-600 mt-2">{car.specs}</p>
            <h4 className="font-semibold mt-4">Features:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {car.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            {/* Buy Now Button */}
           <Link to="/payment">
           <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Buy Now
            </button>
           </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
