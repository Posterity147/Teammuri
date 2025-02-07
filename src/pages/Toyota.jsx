import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const Toyota = () => {
  const [likedCars, setLikedCars] = useState({
    corolla: false,
    camry: false,
    rav4: false,
    prius: false,
    landCruiser: false,
    urbanCruiser: false
  });

  // Toggle the like status for each car
  const toggleLike = (car) => {
    setLikedCars(prevState => ({
      ...prevState,
      [car]: !prevState[car]  // Toggle the specific car's liked status
    }));
  };

  return (
    <div>
      <h1 id="color"><b><strong><img src="src/assets/toyota.jpg" alt="" className="w-20 inline" /> Toyota</strong></b></h1>
      <p className="text-center">
        - Founded: 1937 <br />
        - HQ: Toyota City, Japan<br />
        - Known for: Corolla, Camry, RAV4, Prius, Land Cruiser<br />
        - Innovations: Hybrid technology, autonomous driving, sustainable manufacturing<br />
        - Awards: World's largest automaker, most valuable automotive brand, greenest automaker
      </p><br />

      <div id="grid">
        <div id="lambo">
          <Heart
            size={30}
            color={likedCars.corolla ? 'red' : 'gray'}
            className="cursor-pointer"
            onClick={() => toggleLike('corolla')} // Toggle for Toyota Corolla
          />
          <h3 className="text-center">Toyota Corolla 2025 model</h3>
          <img src="src/assets/2025corolla.jpg" alt="" />
        </div>
        <div id="lambo">
          <Heart
            size={30}
            color={likedCars.camry ? 'red' : 'gray'}
            className="cursor-pointer"
            onClick={() => toggleLike('camry')} // Toggle for Toyota Camry
          />
          <h3 className="text-center">Toyota Camry 2025 model</h3>
          <img src="src/assets/2025camry.jpg" alt="" />
        </div>
        <div id="lambo">
          <Heart
            size={30}
            color={likedCars.rav4 ? 'red' : 'gray'}
            className="cursor-pointer"
            onClick={() => toggleLike('rav4')} // Toggle for Toyota Rav4
          />
          <h3 className="text-center">Toyota Rav4</h3>
          <img src="src/assets/2025rav'.jpg" alt="" />
        </div>
        <div id="lambo">
          <Heart
            size={30}
            color={likedCars.prius ? 'red' : 'gray'}
            className="cursor-pointer"
            onClick={() => toggleLike('prius')} // Toggle for Toyota Prius
          />
          <h3 className="text-center">Toyota Prius</h3>
          <img src="src/assets/2025prius.jpg" alt="" className="w-96" />
        </div>
        <div id="lambo">
          <Heart
            size={30}
            color={likedCars.landCruiser ? 'red' : 'gray'}
            className="cursor-pointer"
            onClick={() => toggleLike('landCruiser')} // Toggle for Toyota Land Cruiser
          />
          <h3 className="text-center">Toyota Land Cruiser</h3>
          <img src="src/assets/2025landcruiser.jpg" alt="" />
        </div>
        <div id="lambo">
          <Heart
            size={30}
            color={likedCars.urbanCruiser ? 'red' : 'gray'}
            className="cursor-pointer"
            onClick={() => toggleLike('urbanCruiser')} // Toggle for Toyota Urban Cruiser
          />
          <h3 className="text-center">Toyota Urban Cruiser</h3>
          <img src="src/assets/urban2025.jpg" alt="" className="w-50" />
        </div>
      </div>
    </div>
  );
};

export default Toyota;
