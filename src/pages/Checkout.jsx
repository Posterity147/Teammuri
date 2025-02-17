import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Tesla Model 3", price: 35000 },
    { id: 2, name: "Ford Mustang Mach-E", price: 42000 },
  ]);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    navigate("/payment"); // Navigate to the payment page
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="w-full max-w-lg p-4 shadow-md border rounded-lg">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between py-2">
            <span>{item.name}</span>
            <span>${item.price.toLocaleString()}</span>
          </div>
        ))}
        <hr className="my-4" />
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>${total.toLocaleString()}</span>
        </div>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded" onClick={handleCheckout}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
