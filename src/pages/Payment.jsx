import React, { useState } from 'react';

export default function PaymentPage() {
  const [carDetails] = useState({
    model: "Toyota Camry 2025",
    price: 28400,
    discount: 30,
  });

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment submitted successfully!");
    
  };

  const discountedPrice = carDetails.price * (1 - carDetails.discount / 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold text-center mb-8">Complete Your Payment</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Car Details</h2>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl">{carDetails.model}</h3>
            <p className="text-gray-500">Price: ${carDetails.price}</p>
            <p className="text-red-600">Discount: {carDetails.discount}% off</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Total: ${discountedPrice}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>

          <div className="grid grid-cols-1 gap-4 mb-6">
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="border border-gray-300 p-2 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="border border-gray-300 p-2 rounded-md"
              required
            />
            <input
              type="text"
              name="address"
              value={userInfo.address}
              onChange={handleChange}
              placeholder="Shipping Address"
              className="border border-gray-300 p-2 rounded-md"
              required
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <input
              type="text"
              name="cardNumber"
              value={userInfo.cardNumber}
              onChange={handleChange}
              placeholder="Credit Card Number"
              className="border border-gray-300 p-2 rounded-md"
              required
            />
            <div className="flex space-x-4">
              <input
                type="text"
                name="expiryDate"
                value={userInfo.expiryDate}
                onChange={handleChange}
                placeholder="Expiry Date (MM/YY)"
                className="border border-gray-300 p-2 rounded-md"
                required
              />
              <input
                type="text"
                name="cvv"
                value={userInfo.cvv}
                onChange={handleChange}
                placeholder="CVV"
                className="border border-gray-300 p-2 rounded-md"
                required
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700"
            >
              Complete Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
