import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";
import zxcvbn from "zxcvbn";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

const SignupPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    setSubmitted(true);
    gsap.to(".success-message", { opacity: 1, y: 0, duration: 0.5 });
  };

  const handlePasswordChange = (e) => {
    const strength = zxcvbn(e.target.value).score;
    setPasswordStrength(strength);
  };

  const passwordStrengthLabel = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];
  const strengthColors = ["bg-red-500", "bg-yellow-500", "bg-blue-500", "bg-green-500", "bg-green-700"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Username</label>
          <input 
            type="text" 
            {...register("username", { required: "Username is required" })} 
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" 
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
        </div>

        {/* Email */}
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

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Password</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              {...register("password", { 
                required: "Password is required", 
                minLength: { value: 6, message: "Password must be at least 6 characters" },
                pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, message: "Must contain letters & numbers" }
              })} 
              onChange={handlePasswordChange} 
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" 
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-3 right-3">
              {showPassword ? <EyeOffIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
            </button>
          </div>

          {/* Password Strength Indicator */}
          <div className="h-2 w-full bg-gray-300 rounded mt-2">
            <div 
              className={`h-2 rounded transition-all ${strengthColors[passwordStrength]}`} 
              style={{ width: `${(passwordStrength + 1) * 25}%` }}
            ></div>
          </div>
          <p className="text-sm mt-1 text-center w-full truncate">Strength: {passwordStrengthLabel[passwordStrength]}</p>
          
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Confirm Password</label>
          <div className="relative">
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              {...register("confirmPassword", { 
                validate: value => value === watch("password") || "Passwords do not match" 
              })} 
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" 
            />
            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute top-3 right-3">
              {showConfirmPassword ? <EyeOffIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
            </button>
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-500 transition font-semibold"
        >
          Sign Up
        </button>

        {/* Success Message */}
        {submitted && (
          <p className="success-message text-green-600 text-center mt-4 opacity-0">
            🎉 Account Created Successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default SignupPage;
