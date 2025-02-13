import { useState } from "react";
import { motion } from "framer-motion";

const VehicleMaintenance = () => {
  const [formData, setFormData] = useState({ name: "", email: "", service: "" });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Service appointment scheduled! We will contact you soon.");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <motion.div
        className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">Vehicle Maintenance</h2>
        <p className="text-gray-600 text-center mt-2">Keep your car in top shape with our expert services.</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full p-3 border rounded-lg" 
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full p-3 border rounded-lg" 
            required
          />
          <select 
            name="service" 
            value={formData.service} 
            onChange={handleChange} 
            className="w-full p-3 border rounded-lg" 
            required
          >
            <option value="">Select a Service</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Brake Inspection">Brake Inspection</option>
            <option value="Tire Rotation">Tire Rotation</option>
          </select>
          
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Service
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default VehicleMaintenance;
