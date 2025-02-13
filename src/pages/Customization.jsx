import React, { useState } from "react";


const Customization = () => {
  // State hooks for customization options
  const [color, setColor] = useState("red");
  const [wheels, setWheels] = useState("wheels1");
  const [interior, setInterior] = useState("standard");

  // Object to map colors to images
  const carImages = {
  
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-4/5 md:w-3/5 lg:w-2/5">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-900">
          Car Customization
        </h1>

        {/* Car Preview */}
        <div className="flex justify-center mb-6">
          <img
            src={carImages[color]}
            alt="Customized Car"
            className="w-full max-w-md rounded-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>

        {/* Customization Options */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Customize Your Car</h2>

          {/* Color Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Car Color:</label>
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              {Object.keys(carImages).map((col) => (
                <option key={col} value={col}>
                  {col.charAt(0).toUpperCase() + col.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Wheel Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Wheels:</label>
            <select
              value={wheels}
              onChange={(e) => setWheels(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="wheels1">Standard</option>
              <option value="wheels2">Sport</option>
              <option value="wheels3">Luxury</option>
            </select>
          </div>

          {/* Interior Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Interior Style:</label>
            <select
              value={interior}
              onChange={(e) => setInterior(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="standard">Standard</option>
              <option value="leather">Leather</option>
              <option value="premium">Premium</option>
            </select>
          </div>

          {/* Apply Customization Button */}
          <button
            onClick={() => console.log(`Car Color: ${color}, Wheels: ${wheels}, Interior: ${interior}`)}
            className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Apply Customization
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customization;
