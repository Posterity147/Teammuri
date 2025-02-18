import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";
const CustomerDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Simulate logout and redirect to login page
    alert("You have been logged out.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">Car Dealership</h1>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </nav>

      {/* Dashboard Content */}
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome, Abu sumayyah!</h2>
        
        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Recent Purchases */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Recent Purchases</h3>
            <p className="text-gray-600">You have no recent purchases.</p>
          </div>

          {/* Saved Cars */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Favorite Cars</h3>
            <p className="text-gray-600">You haven't liked any cars yet.</p>
          </div>

          {/* Test Drive Bookings */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Test Drive Bookings</h3>
            <p className="text-gray-600">No upcoming test drives.</p>
          </div>

          {/* Profile Settings */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Profile Settings</h3>
            <p className="text-gray-600">Update your personal information and preferences.</p>
            <Link to="/editprofile">
            <button className="mt-2 text-blue-600 hover:underline">Edit Profile</button>
            </Link>
          </div>

          {/* Payment History */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Payment History</h3>
            <p className="text-gray-600">No transactions found.</p>
          </div>

          {/* Customer Support */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Customer Support</h3>
            <p className="text-gray-600">Need help? Contact our support team.</p>
              <Link to="/contact"><button className="mt-2 text-blue-600 hover:underline">Contact Support</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
