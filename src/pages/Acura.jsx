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
      
      <div className="text-center mb-8">
        <h3 className="text-4xl font-bold text-blue-900 mb-4"><b><strong>Acura</strong></b></h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Acura: A luxury division of Honda known for performance and reliability.
          <br />
          <br />
          <strong>Key Details:</strong>
          <ul className="list-disc list-inside">
            <li>Founded: 1986</li>
            <li>HQ: Tokyo, Japan</li>
            <li>Parent company: Honda</li>
            <li>Known for: Luxury vehicles, performance, reliability</li>
            <li>Iconic models: NSX, TLX, MDX, RDX</li>
          </ul>
        </p>
      </div>

      
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
        </div>
      </div>
    </div>
  );
};

export default Acura;
