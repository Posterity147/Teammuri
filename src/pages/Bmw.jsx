import React, { useState } from 'react';
import { Heart, HeartOff } from 'lucide-react';

const Bmw = () => {
  // State to manage favorites for each car model
  const [is4SeriesFavorite, setIs4SeriesFavorite] = useState(false);
  const [is3SeriesFavorite, setIs3SeriesFavorite] = useState(false);
  const [is5SeriesFavorite, setIs5SeriesFavorite] = useState(false);
  const [isX5Favorite, setIsX5Favorite] = useState(false);
  const [isM5Favorite, setIsM5Favorite] = useState(false);
  const [isM3Favorite, setIsM3Favorite] = useState(false);

  // Function to toggle the favorite state of a car
  const toggleFavorite = (car) => {
    if (car === "4Series") setIs4SeriesFavorite(!is4SeriesFavorite);
    if (car === "3Series") setIs3SeriesFavorite(!is3SeriesFavorite);
    if (car === "5Series") setIs5SeriesFavorite(!is5SeriesFavorite);
    if (car === "X5") setIsX5Favorite(!isX5Favorite);
    if (car === "M5") setIsM5Favorite(!isM5Favorite);
    if (car === "M3") setIsM3Favorite(!isM3Favorite);
  };

  return (
    <div className="bg-gray-50 py-10">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h3 className="text-4xl font-bold text-blue-800 mb-4"><b><strong>BMW</strong></b></h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          BMW (Bayerische Motoren Werke): A German multinational company that produces luxury vehicles and motorcycles, known for performance and innovation.
          <br />
          <br />
          <strong>Key Details:</strong>
          <ul className="list-disc list-inside">
            <li>Founded: 1916</li>
            <li>HQ: Munich, Germany</li>
            <li>Known for: Luxury vehicles, performance, innovation</li>
            <li>Iconic models: 3 Series, 5 Series, X5, M3, M5</li>
          </ul>
        </p>
      </div>

      {/* Cars Grid Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {/* BMW 4 Series */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {is4SeriesFavorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("4Series")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("4Series")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/bmw4series.jpg" alt="BMW 4 Series" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>BMW 4 Series</b></p>
        </div>

        {/* BMW 3 Series */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {is3SeriesFavorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("3Series")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("3Series")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/2025bmw3series.jpg" alt="BMW 3 Series" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>BMW 3 Series</b></p>
        </div>

        {/* BMW 5 Series */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {is5SeriesFavorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("5Series")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("5Series")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/5series.jpg" alt="BMW 5 Series" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>BMW 5 Series</b></p>
        </div>

        {/* BMW X5 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isX5Favorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("X5")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("X5")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/X5 Series.jpg" alt="BMW X5 Series" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>BMW X5 Series</b></p>
        </div>

        {/* BMW M5 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isM5Favorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("M5")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("M5")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/M5.jpg" alt="BMW M5 Series" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>BMW M5 Series</b></p>
        </div>

        {/* BMW M3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex justify-end">
            {isM3Favorite ? (
              <Heart size={30} color="red" onClick={() => toggleFavorite("M3")} className="cursor-pointer" />
            ) : (
              <HeartOff size={30} color="gray" onClick={() => toggleFavorite("M3")} className="cursor-pointer" />
            )}
          </div>
          <img src="src/assets/M3.jpg" alt="BMW M3 Series" className="w-full h-48 object-cover rounded-lg mt-3 group-hover:scale-105 transition-transform duration-300" />
          <p className="text-center mt-2"><b>BMW M3 Series</b></p>
        </div>
      </div>
    </div>
  );
};

export default Bmw;
