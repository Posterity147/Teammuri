import React, { useState } from 'react';
import { Heart, HeartOff } from 'lucide-react';

const Acura = () => {
  const [isNSXFavorite, setIsNSXFavorite] = useState(false);
  const [isTLXFavorite, setIsTLXFavorite] = useState(false);
  const [isMDXFavorite, setIsMDXFavorite] = useState(false);
  const [isRDXFavorite, setIsRDXFavorite] = useState(false);
  const [isILXFavorite, setIsILXFavorite] = useState(false);
  const [isCLFavorite, setIsCLFavorite] = useState(false);

  const toggleFavorite = (car) => {
    if (car === "NSX") setIsNSXFavorite(!isNSXFavorite);
    if (car === "TLX") setIsTLXFavorite(!isTLXFavorite);
    if (car === "MDX") setIsMDXFavorite(!isMDXFavorite);
    if (car === "RDX") setIsRDXFavorite(!isRDXFavorite);
    if (car === "ILX") setIsILXFavorite(!isILXFavorite);
    if (car === "CL") setIsCLFavorite(!isCLFavorite);
  };

  return (
    <div className="bg-gray-50 py-10">
      
    

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isNSXFavorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("NSX")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("NSX")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/2025NSX.jpg" alt="Acura NSX" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>Acura NSX</b></p>
          <button
            className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => alert('You are buying the Acura NSX')}
          >
            Buy Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isTLXFavorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("TLX")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("TLX")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/2025TLX.jpg" alt="Acura TLX" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>Acura TLX</b></p>
          <button
            className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => alert('You are buying the Acura TLX')}
          >
            Buy Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isMDXFavorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("MDX")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("MDX")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/2025MDX.jpg" alt="Acura MDX" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>Acura MDX</b></p>
          <button
            className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => alert('You are buying the Acura MDX')}
          >
            Buy Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isRDXFavorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("RDX")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("RDX")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/2025RDX.jpg" alt="Acura RDX" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>Acura RDX</b></p>
          <button
            className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => alert('You are buying the Acura RDX')}
          >
            Buy Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isILXFavorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("ILX")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("ILX")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/2025ILX.jpg" alt="Acura ILX" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>Acura ILX</b></p>
          <button
            className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => alert('You are buying the Acura ILX')}
          >
            Buy Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isCLFavorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("CL")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("CL")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/2025CL.jpg" alt="Acura CL" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>Acura CL</b></p>
          <button
            className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => alert('You are buying the Acura CL')}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Acura;
