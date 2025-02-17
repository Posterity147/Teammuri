import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BuyNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  if (!car) {
    return <div className="p-6 text-center text-xl">No car selected.</div>;
  }

  const handleProceedToPayment = () => {
    navigate("/payment", { state: { car } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Confirm Your Purchase</h1>
        <img src={car.img} alt={car.model} className="w-full h-48 object-cover rounded-md mb-4" />
        <h2 className="text-2xl font-semibold">{car.model}</h2>
        <p className="text-lg text-gray-600 mt-2">Price: <span className="text-blue-600 font-bold">₦{car.price.toLocaleString()}</span></p>
        <p className="mt-2 text-sm text-gray-500">This car is available for immediate purchase. Secure your order now.</p>
        
        <button 
          onClick={handleProceedToPayment} 
          className="mt-5 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default BuyNow;
