import React, { useState } from 'react';


function Customization() {
  // State hooks for customization options
  const [color, setColor] = useState('red');
  const [wheels, setWheels] = useState('wheels1');
  const [interior, setInterior] = useState('standard');

  // Function to handle customization
  const handleCustomization = () => {
    console.log(`Car Color: ${color}, Wheels: ${wheels}, Interior: ${interior}`);
  };

  // Function to get the car image based on color
  const getCarImage = () => {
    switch (color) {
      case 'red':
        return 'car_red.jpg';
      case 'blue':
        return 'car_blue.jpg';
      case 'green':
        return 'car_green.jpg';
      case 'black':
        return 'car_black.jpg';
      case 'white':
        return 'car_white.jpg';
      default:
        return 'car_default.jpg';
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-4/5 md:w-3/5 lg:w-2/5">
        <h1 className="text-2xl font-bold text-center mb-6">Car Customization</h1>

        <div className="car mb-6">
          <img id="carImage" src="src/assets/SDI_UAT_360e_032.png" alt="Car" className="w-full max-w-md mx-auto rounded-lg" />
        </div>

        <div className="customization-options space-y-4">
          <h2 className="text-xl font-semibold">Customize your car</h2>

          {/* Color Selection */}
          <div>
            <label htmlFor="colorSelect" className="block text-sm font-medium text-gray-700">Choose a color:</label>
            <select
              id="colorSelect"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="black">Black</option>
              <option value="white">White</option>
            </select>
          </div>

          {/* Wheel Selection */}
          <div>
            <label htmlFor="wheelsSelect" className="block text-sm font-medium text-gray-700">Choose wheels:</label>
            <select
              id="wheelsSelect"
              value={wheels}
              onChange={(e) => setWheels(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="wheels1">Standard</option>
              <option value="wheels2">Sport</option>
              <option value="wheels3">Luxury</option>
            </select>
          </div>

          {/* Interior Style */}
          <div>
            <label htmlFor="interiorSelect" className="block text-sm font-medium text-gray-700">Choose Interior Style:</label>
            <select
              id="interiorSelect"
              value={interior}
              onChange={(e) => setInterior(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="standard">Standard</option>
              <option value="leather">Leather</option>
              <option value="premium">Premium</option>
            </select>
          </div>

          <button
            onClick={handleCustomization}
            className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Apply Customization
          </button>
        </div>
      </div>
    </div>
  );
}

export default Customization;
