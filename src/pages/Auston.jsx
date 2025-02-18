import React, { useState } from 'react';
import { Heart, HeartOff } from 'lucide-react';

const Aston = () => {
  
  const [isDB5Favorite, setIsDB5Favorite] = useState(false);
  const [isDB9Favorite, setIsDB9Favorite] = useState(false);
  const [isVantageFavorite, setIsVantageFavorite] = useState(false);
  const [isVanquishFavorite, setIsVanquishFavorite] = useState(false);
  const [isValkyrieFavorite, setIsValkyrieFavorite] = useState(false);
  const [isCC100Favorite, setIsCC100Favorite] = useState(false);

  const toggleFavorite = (car) => {
    if (car === "DB5") setIsDB5Favorite(!isDB5Favorite);
    if (car === "DB9") setIsDB9Favorite(!isDB9Favorite);
    if (car === "Vantage") setIsVantageFavorite(!isVantageFavorite);
    if (car === "Vanquish") setIsVanquishFavorite(!isVanquishFavorite);
    if (car === "Valkyrie") setIsValkyrieFavorite(!isValkyrieFavorite);
    if (car === "CC100") setIsCC100Favorite(!isCC100Favorite);
  };

  return (
    <div className="bg-gray-50 py-10">
     
      <div className="text-center mb-8">
        <h3 className="text-4xl font-bold text-green-800 mb-4"><b><strong>Aston Martin</strong></b></h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Aston Martin Lagonda: A British luxury sports car manufacturer known for sleek, stylish vehicles and its association with the James Bond franchise.
          <br />
          <br />
          <strong>Key Details:</strong>
          <ul className="list-disc list-inside">
            <li>Founded: 1913</li>
            <li>HQ: Gaydon, England</li>
            <li>Known for: Luxury sports cars, sleek design, James Bond association</li>
            <li>Iconic models: DB5, DB9, Vantage, Vanquish, Valkyrie</li>
          </ul>
        </p>
      </div>

      
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
       
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isDB5Favorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("DB5")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("DB5")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/2025DB5.jpg" alt="Aston Martin DB5" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>DB5</b></p>
          <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Buy Now</button>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isDB9Favorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("DB9")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("DB9")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/2025DB9.jpg" alt="Aston Martin DB9" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>DB9</b></p>
          <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Buy Now</button>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isVantageFavorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("Vantage")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("Vantage")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/2025Vantage.jpg" alt="Aston Martin Vantage" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>Vantage</b></p>
          <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Buy Now</button>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isVanquishFavorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("Vanquish")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("Vanquish")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/2025Vanquish.jpg" alt="Aston Martin Vanquish" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>Vanquish</b></p>
          <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Buy Now</button>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isValkyrieFavorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("Valkyrie")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("Valkyrie")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/2025Valkyrie.jpg" alt="Aston Martin Valkyrie" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>Valkyrie</b></p>
          <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Buy Now</button>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isCC100Favorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("CC100")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("CC100")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/2025CC100.jpg" alt="Aston Martin CC100" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>CC100</b></p>
          <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Aston;
