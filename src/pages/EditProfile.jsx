import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Profile updated successfully!");
  };

  return (
    <motion.div 
      className="flex justify-center items-center min-h-screen bg-gray-100 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="w-full max-w-lg shadow-lg rounded-2xl p-6 bg-white">
        <h2 className="text-xl font-semibold text-center">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded" />
            <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <input type="text" name="zip" placeholder="ZIP Code" value={formData.zip} onChange={handleChange} className="w-full p-2 border rounded" />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">Save Changes</button>
        </form>
      </div>
    </motion.div>
  );
}
