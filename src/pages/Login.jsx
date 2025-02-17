import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setSubmitted(true);
    gsap.to(".success-message", { opacity: 1, y: 0, duration: 0.5 });

    // Simulate login success
    setTimeout(() => {
      alert("Login successful! Redirecting to dashboard...");
      navigate("/customer"); // Redirect to dashboard or homepage
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <input 
            type="email" 
            {...register("email", { 
              required: "Email is required", 
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" }
            })} 
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" 
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Password</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              {...register("password", { required: "Password is required", minLength: 6 })} 
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" 
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute top-3 right-3 text-gray-500"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Forgot Password Link */}
        <div className="text-right mb-4">
          <a href="/forgot-password" className="text-blue-600 text-sm hover:underline">Forgot password?</a>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-500 transition font-semibold"
        >
          Login
        </button>

        {/* Success Message */}
        {submitted && (
          <p className="success-message text-green-600 text-center mt-4 opacity-0">
            ✅ Login Successful!
          </p>
        )}

        {/* Create Account Link */}
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 font-medium hover:underline">Create one</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
