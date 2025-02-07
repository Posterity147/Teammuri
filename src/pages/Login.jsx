import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChromeIcon, Facebook } from 'lucide-react';


function FormFloatingBasicExample() {
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, like validating the fields
    alert('Form submitted!');
    
    // Refresh the page after submission
    window.location.reload(); // This will reload the page
  };

  // Handle Google Sign-in
  const handleGoogleSignIn = () => {
    // Add Google authentication logic here
    alert('Google Sign-in clicked!');
  };

  // Handle Facebook Sign-in
  const handleFacebookSignIn = () => {
    // Add Facebook authentication logic here
    alert('Facebook Sign-in clicked!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-4/5 md:w-2/5 lg:w-1/3">
        <h3 className="text-2xl font-bold text-center mb-4">Sign Up</h3>
        <p className="text-center mb-6 text-gray-600">
          Continue with your email or Facebook or Google account
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email Address*"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          
          {/* Password Input with Eye Icon */}
          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'} // Toggle password visibility
              id="password"
              placeholder="Password*"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            {/* Eye Icon to toggle password visibility */}
            <i
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${passwordVisible ? 'text-indigo-600' : 'text-gray-400'}`}
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <i className="fas fa-eye-slash"></i> // Eye-slash icon when password is visible
              ) : (
                <i className="fas fa-eye"></i> // Eye icon when password is hidden
              )}
            </i>
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Continue
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">or</p>

        {/* Google and Facebook Buttons */}
        <div className="space-y-4 mt-6">
          {/* Google Button */}
          <button
            id="button1"
            className="w-full py-2 px-4 bg-white border border-gray-300 rounded-full flex items-center justify-center space-x-4 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={handleGoogleSignIn}
          >
            <i className="fab fa-google text-red-500"></i>
            <span className="text-red-500 font-semibold"><ChromeIcon className="text-green-700 inline mr-3" />
            Continue with Google</span>
          </button>

          {/* Facebook Button */}
          <button
            id="button2"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-full flex items-center justify-center space-x-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleFacebookSignIn}
          >
            <i className="fab fa-facebook-f"></i>
            <span><Facebook className="text-white inline mr-3" />
            Continue with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormFloatingBasicExample;
