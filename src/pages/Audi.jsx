import React, { useState } from 'react';
import { Heart, HeartOff } from 'lucide-react';

const Audi = () => {
  
  const [isA4Favorite, setIsA4Favorite] = useState(false);
  const [isA6Favorite, setIsA6Favorite] = useState(false);
  const [isA8Favorite, setIsA8Favorite] = useState(false);
  const [isRS7Favorite, setIsRS7Favorite] = useState(false);
  const [isQ5Favorite, setIsQ5Favorite] = useState(false);
  const [isR8Favorite, setIsR8Favorite] = useState(false);

  
  const toggleFavorite = (car) => {
    if (car === "A4") setIsA4Favorite(!isA4Favorite);
    if (car === "A6") setIsA6Favorite(!isA6Favorite);
    if (car === "A8") setIsA8Favorite(!isA8Favorite);
    if (car === "RS7") setIsRS7Favorite(!isRS7Favorite);
    if (car === "Q5") setIsQ5Favorite(!isQ5Favorite);
    if (car === "R8") setIsR8Favorite(!isR8Favorite);
  };

  return (
    <div className="bg-gray-50 py-10">
      
      <div className="text-center mb-8">
        <h3 className="text-4xl font-bold text-blue-900 mb-4"><b><strong>Audi</strong></b></h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Audi AG: A renowned German luxury automaker, known for advanced technology and high performance.
          <br />
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

      
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isA4Favorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("A4")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("A4")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/A4.jpg" alt="Audi A4" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>Audi A4</b></p>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isA6Favorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("A6")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("A6")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/2025A6.jpg" alt="Audi A6" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>Audi A6</b></p>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isA8Favorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("A8")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("A8")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/2025A8.jpg" alt="Audi A8" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>Audi A8</b></p>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isRS7Favorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("RS7")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("RS7")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/2025RS7.jpg" alt="Audi RS7" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>Audi RS7</b></p>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isQ5Favorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("Q5")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("Q5")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/2025Q5.jpg" alt="Audi Q5" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>Audi Q5</b></p>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isR8Favorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("R8")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("R8")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/2025R8.jpg" alt="Audi R8" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>Audi R8</b></p>
        </div>
      </div>
    </div>
  );
};

export default Audi;
