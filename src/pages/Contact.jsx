import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    
    if (!formData.name || !formData.email || !formData.message) {
      setLoading(false);
      setSuccess("Please fill in all required fields.");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setLoading(false);
      setSuccess("Please enter a valid email address.");
      return;
    }
    
    setTimeout(() => {
      setLoading(false);
      setSuccess("Your message has been sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between px-6 md:px-16 mt-10">
      <motion.div 
        id="contact-us" 
        className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-center text-lg mb-6">We'd love to hear from you! Fill out the form below, and we'll get back to you swiftly.</p>
        {success && <p className={`text-center p-2 mb-4 ${success.includes("success") ? "text-green-600" : "text-red-600"}`} aria-live="polite">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>
          <button type="submit" className="w-full py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-all transform hover:scale-105 flex justify-center">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0 ml-5">
        <iframe
          src="https://www.google.com/maps/embed?..."
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Contact;