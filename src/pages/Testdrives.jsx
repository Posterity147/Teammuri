import React, { useState } from "react";
import { motion } from "framer-motion";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749, // Example: San Francisco
  lng: -122.4194,
};

const TestDrive = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-black flex justify-center items-center text-white text-center">
        <motion.img
          src="https://source.unsplash.com/1600x900/?car,race"
          alt="Test Drive"
          className="absolute w-full h-full object-cover opacity-50"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="relative z-10 px-6">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Experience the Thrill of Driving
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Book a test drive and feel the power of your dream car.
          </motion.p>
        </div>
      </div>

      {/* Booking Form Section */}
      <motion.div
        className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-6">Schedule Your Test Drive</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-medium">Full Name</label>
            <input type="text" placeholder="John Doe" className="w-full p-3 border rounded-lg" required />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input type="email" placeholder="john@example.com" className="w-full p-3 border rounded-lg" required />
          </div>
          <div>
            <label className="block font-medium">Phone Number</label>
            <input type="tel" placeholder="+1234567890" className="w-full p-3 border rounded-lg" required />
          </div>
          <div>
            <label className="block font-medium">Select Car Model</label>
            <select className="w-full p-3 border rounded-lg">
              <option>Toyota Camry</option>
              <option>Honda Civic</option>
              <option>Ford Mustang</option>
              <option>BMW M3</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block font-medium">Preferred Date</label>
              <input
                type="date"
                className="w-full p-3 border rounded-lg"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block font-medium">Preferred Time</label>
              <input
                type="time"
                className="w-full p-3 border rounded-lg"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>
          <motion.button
            className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition"
            whileTap={{ scale: 0.95 }}
          >
            Book Test Drive
          </motion.button>
        </form>
      </motion.div>

      {/* Google Maps Section */}
      <motion.div
        className="mt-16 py-10 bg-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold mb-6">Find a Test Drive Location Near You</h2>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="mt-16 py-10 bg-gray-100 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold mb-6">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { quote: "The test drive was fantastic! I fell in love with the car instantly.", name: "Sophia Lee" },
            { quote: "Smooth booking process and friendly staff. Highly recommend!", name: "James Wilson" },
            { quote: "I was unsure about my choice, but the test drive made all the difference!", name: "Emma Johnson" },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md max-w-sm"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg">"{testimonial.quote}"</p>
              <p className="mt-3 text-gray-700 font-semibold">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TestDrive;
