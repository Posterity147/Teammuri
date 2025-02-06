import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to our car dealership, where we offer the best selection of new and used vehicles to meet your needs. Our team is passionate about helping you find the perfect car that fits your lifestyle and budget.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              Our mission is simple: to provide high-quality vehicles at competitive prices and offer an exceptional customer experience. We are committed to making the car buying process easy, transparent, and enjoyable.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Our Values</h3>
            <p className="mt-4 text-gray-600">
              Integrity, customer satisfaction, and trust are at the core of everything we do. We believe in building long-lasting relationships with our customers by offering reliable cars and outstanding service.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h3>
            <p className="mt-4 text-gray-600">
              With years of experience in the automotive industry, our knowledgeable team is here to guide you every step of the way. We have a diverse selection of vehicles, from compact cars to family SUVs, and everything in between.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-lg text-gray-600">
            Ready to find your next car? Explore our <Link to="/dashboard" className="text-blue-500 hover:text-blue-700">inventory</Link> or contact us to schedule a test drive today!
          </p>
        </div>
      </div>
    </div>
  );
}
