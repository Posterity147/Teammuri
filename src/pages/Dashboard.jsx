import React from 'react';
import { Link } from 'react-router-dom'; // Changed to 'react-router-dom' as 'react-router' is deprecated

const Dashboard = () => {
  return (
    <div className="bg-gray-100 py-10">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Brands</h1>
        <p className="text-lg text-gray-700">Some of the most popular brands</p>
      </div>

      {/* Brands Section */}
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6">
        {/* Toyota */}
        <Link to="/toyota" className="no-underline text-black group">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="src/assets/toyota.jpg"
              alt="Toyota"
              className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-4 text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">Toyota</p>
          </div>
        </Link>

        {/* Mercedes */}
        <Link to="/mercedes" className="no-underline text-black group">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="src/assets/mercedes.jpg"
              alt="Mercedes Benz"
              className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-4 text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">Mercedes Benz</p>
          </div>
        </Link>

        {/* Tesla */}
        <Link to="/tesla" className="no-underline text-black group">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="src/assets/tesla.png"
              alt="Tesla"
              className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-4 text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">Tesla</p>
          </div>
        </Link>

        {/* BMW */}
        <Link to="/bmw" className="no-underline text-black group">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="src/assets/bmwlogo.jpg"
              alt="BMW"
              className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-4 text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">BMW</p>
          </div>
        </Link>

        {/* Audi */}
        <Link to="/audi" className="no-underline text-black group">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="src/assets/audi.jpg"
              alt="Audi"
              className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-4 text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">Audi</p>
          </div>
        </Link>

        {/* Acura */}
        <Link to="/acura" className="no-underline text-black group">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="src/assets/acura.png"
              alt="Acura"
              className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-4 text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">Acura</p>
          </div>
        </Link>

        {/* Aston Martin */}
        <Link to="/auston" className="no-underline text-black group">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="src/assets/auston.jpg"
              alt="Aston Martin"
              className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-4 text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">Aston Martin</p>
          </div>
        </Link>

        {/* Koenigsegg */}
        <Link to="/koenigsegg" className="no-underline text-black group">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="src/assets/koenigsegg.png"
              alt="Koenigsegg"
              className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-4 text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">Koenigsegg</p>
          </div>
        </Link>

        {/* Hyundai */}
        <Link to="/hyundai" className="no-underline text-black group">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="src/assets/hyundai.jpg"
              alt="Hyundai"
              className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-4 text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">Hyundai</p>
          </div>
        </Link>

        {/* Rolls Royce */}
        <Link to="/rollsroyce" className="no-underline text-black group">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="src/assets/rollsroyce.jpg"
              alt="Rolls Royce"
              className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-4 text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">Rolls Royce</p>
          </div>
        </Link>

        {/* Lamborghini */}
        <Link to="/lamborghini" className="no-underline text-black group">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="src/assets/lamborghini.png"
              alt="Lamborghini"
              className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-4 text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">Lamborghini</p>
          </div>
        </Link>

        {/* Pagani */}
        <Link to="/pagani" className="no-underline text-black group">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="src/assets/pagani.jpg"
              alt="Pagani"
              className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-4 text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">Pagani</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
