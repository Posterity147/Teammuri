import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="mt-4 text-lg text-gray-600">
          At our dealership, we are committed to offering top-notch services to ensure you have a seamless and enjoyable experience throughout your car ownership journey. Below are some of the services we provide to help you every step of the way.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Car Sales</h3>
            <p className="mt-4 text-gray-600">
              Whether you're in the market for a new or pre-owned car, our dealership offers a wide variety of vehicles to fit every budget and preference. Visit our inventory to find your perfect match!
            </p>
            <Link to="/dashboard" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">View Inventory</Link>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Vehicle Maintenance</h3>
            <p className="mt-4 text-gray-600">
              Our dealership offers a comprehensive maintenance service to ensure your vehicle runs smoothly for years to come. From oil changes to brake inspections, we’ve got you covered.
            </p>
            <Link to="/services#maintenance" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Learn More</Link>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Financing Options</h3>
            <p className="mt-4 text-gray-600">
              We provide flexible financing options tailored to your needs. Our finance team is here to help you find the best deals and ensure you drive away in the car of your dreams.
            </p>
            <Link to="/financing" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Apply for Financing</Link>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Trade-in Services</h3>
            <p className="mt-4 text-gray-600">
              Looking to upgrade? Our trade-in services allow you to exchange your current vehicle for credit towards your next purchase. Let us help you make the most out of your trade-in!
            </p>
            <Link to="/trade-in" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Get a Trade-in Estimate</Link>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Test Drives</h3>
            <p className="mt-4 text-gray-600">
              Our dealership offers easy scheduling for test drives so you can experience your chosen car before making a commitment. Get behind the wheel and see what suits you best.
            </p>
            <Link to="/test-drive" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Schedule a Test Drive</Link>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Car Customization</h3>
            <p className="mt-4 text-gray-600">
              Personalize your vehicle to match your style! We offer a variety of customization options, from wheels to interior finishes, to make your car truly yours.
            </p>
            <Link to="/customization" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Explore Customization</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
