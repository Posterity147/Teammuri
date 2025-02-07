import React, { useState } from 'react';
import { Heart, HeartOff } from 'lucide-react';

const Mercedes = () => {
  // State to manage favorites for each car model
  const [isBrabusFavorite, setIsBrabusFavorite] = useState(false);
  const [isMaybachFavorite, setIsMaybachFavorite] = useState(false);
  const [isGLKFavorite, setIsGLKFavorite] = useState(false);
  const [is2025ModelFavorite, setIs2025ModelFavorite] = useState(false);
  const [isEClassFavorite, setIsEClassFavorite] = useState(false);
  const [isGWagonFavorite, setIsGWagonFavorite] = useState(false);

  // Function to toggle the favorite state of a car
  const toggleFavorite = (car) => {
    if (car === "Brabus") setIsBrabusFavorite(!isBrabusFavorite);
    if (car === "Maybach") setIsMaybachFavorite(!isMaybachFavorite);
    if (car === "GLK") setIsGLKFavorite(!isGLKFavorite);
    if (car === "2025Model") setIs2025ModelFavorite(!is2025ModelFavorite);
    if (car === "EClass") setIsEClassFavorite(!isEClassFavorite);
    if (car === "GWagon") setIsGWagonFavorite(!isGWagonFavorite);
  };

  return (
    <div className="bg-gray-50 py-10">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Mercedes-Benz</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Mercedes-Benz: German luxury car brand founded in 1926, known for innovative technology, performance, and prestige.
          <br />
          <br />
          <strong>Key Details:</strong>
          <ul className="list-disc list-inside">
            <li>Founded: 1926</li>
            <li>HQ: Stuttgart, Germany</li>
            <li>Known for: Luxury vehicles, innovative tech, performance</li>
            <li>Iconic models: S-Class, E-Class, C-Class, AMG GT</li>
          </ul>
        </p>
      </div>

      {/* Cars Grid Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {/* Brabus Model */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isBrabusFavorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("Brabus")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("Brabus")} className="cursor-pointer" />
            )}
          </div>
          <h3 className="text-center text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">Mercedes-Brabus</h3>
          <img src="src/assets/brabus.jpg" alt="Mercedes-Brabus" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Maybach Model */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isMaybachFavorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("Maybach")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("Maybach")} className="cursor-pointer" />
            )}
          </div>
          <h3 className="text-center text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">Mercedes Maybach</h3>
          <img src="src/assets/2025maybach.jpg" alt="Mercedes Maybach" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
        </div>

        {/* GLK Model */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isGLKFavorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("GLK")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("GLK")} className="cursor-pointer" />
            )}
          </div>
          <h3 className="text-center text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">Mercedes-Benz GLK</h3>
          <img src="src/assets/2025glk.jpg" alt="Mercedes GLK" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
        </div>

        {/* 2025 Model */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {is2025ModelFavorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("2025Model")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("2025Model")} className="cursor-pointer" />
            )}
          </div>
          <h3 className="text-center text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">Mercedes Benz 2025 Model</h3>
          <img src="src/assets/2025benzz.jpg" alt="Mercedes 2025 Model" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
        </div>

        {/* E-Class Model */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isEClassFavorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("EClass")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("EClass")} className="cursor-pointer" />
            )}
          </div>
          <h3 className="text-center text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">Mercedes Benz E-Class</h3>
          <img src="src/assets/e class.jpg" alt="Mercedes E-Class" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
        </div>

        {/* G-Wagon Model */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isGWagonFavorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("GWagon")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("GWagon")} className="cursor-pointer" />
            )}
          </div>
          <h3 className="text-center text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">Mercedes G-Wagon</h3>
          <img src="src/assets/gwagon.jpg" alt="Mercedes G-Wagon" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Mercedes;
