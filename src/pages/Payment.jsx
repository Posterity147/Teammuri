import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { motion } from "framer-motion";

const vehicles = [
  { id: 1, name: "Toyota Corolla", price: 15000 },
  { id: 2, name: "Toyota Camry", price: 18000 },
  { id: 3, name: "Toyota Land Cruiser", price: 50000 },
  { id: 4, name: "Tesla Model S", price: 80000 },
  { id: 5, name: "Tesla Model X", price: 90000 },
  { id: 6, name: "Mercedes-Benz C-Class", price: 45000 },
  { id: 7, name: "Mercedes-Benz S-Class", price: 80000 },
  { id: 8, name: "BMW 3 Series", price: 35000 },
  { id: 9, name: "BMW M5", price: 100000 },
  { id: 10, name: "Koenigsegg Jesko", price: 3000000 },
  { id: 11, name: "Koenigsegg Regera", price: 2000000 },
  { id: 12, name: "Acura NSX", price: 120000 },
  { id: 13, name: "Aston Martin DB11", price: 200000 },
  { id: 14, name: "Aston Martin Vantage", price: 150000 },
  { id: 15, name: "Lamborghini Aventador", price: 400000 },
  { id: 16, name: "Lamborghini Huracan", price: 250000 },
  { id: 17, name: "Pagani Huayra", price: 3000000 },
  { id: 18, name: "Pagani Zonda", price: 2500000 },
  { id: 19, name: "Hyundai Sonata", price: 23000 },
  { id: 20, name: "Hyundai Elantra", price: 20000 },
  { id: 21, name: "Rolls Royce Phantom", price: 450000 },
  { id: 22, name: "Rolls Royce Cullinan", price: 500000 },
  { id: 23, name: "Audi A8", price: 60000 },
  { id: 24, name: "Audi Q7", price: 70000 },
];

const paymentMethods = ["Online Banking", "Credit/Debit Card", "Financing"];

const PAYSTACK_PUBLIC_KEY = "pk_test_your_public_key_here";

export default function PaymentPage() {
  const [step, setStep] = useState(1);
  const [vehicle, setVehicle] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handlePaymentSuccess = (response) => {
    setLoading(true);
    setTimeout(() => {
      alert("🎉 Payment Successful! Transaction Ref: " + response.reference);
      setStep(1);
      setVehicle(null);
      setPaymentMethod("");
      setEmail("");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white py-4 text-center text-lg font-bold shadow-md">
        Vehicle Payment System
      </nav>

      {/* Payment Process Card */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg"
        >
          <h1 className="text-2xl font-semibold text-center mb-4">Payment Process</h1>

          {loading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mt-6"
            />
          ) : (
            <>
              {step === 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <h2 className="text-lg font-medium mb-2">Select Vehicle</h2>
                  <select
                    className="w-full border p-2 rounded-md cursor-pointer"
                    onChange={(e) => setVehicle(vehicles.find((v) => v.id === Number(e.target.value)))}
                  >
                    <option value="">Select a vehicle</option>
                    {vehicles.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} - ${v.price}
                      </option>
                    ))}
                  </select>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded shadow-md"
                    onClick={nextStep}
                    disabled={!vehicle}
                  >
                    Next
                  </motion.button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <h2 className="text-lg font-medium mb-2">Vehicle Pricing</h2>
                  <p>{vehicle?.name} - ${vehicle?.price}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded shadow-md"
                    onClick={nextStep}
                  >
                    Next
                  </motion.button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <h2 className="text-lg font-medium mb-2">Choose Payment Method</h2>
                  <select
                    className="w-full border p-2 rounded-md cursor-pointer"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="">Select payment method</option>
                    {paymentMethods.map((method, index) => (
                      <option key={index} value={method}>
                        {method}
                      </option>
                    ))}
                  </select>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded shadow-md"
                    onClick={nextStep}
                    disabled={!paymentMethod}
                  >
                    Next
                  </motion.button>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <h2 className="text-lg font-medium mb-2">Enter Email for Receipt</h2>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border p-2 rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded shadow-md"
                    onClick={nextStep}
                    disabled={!email}
                  >
                    Next
                  </motion.button>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <h2 className="text-lg font-medium mb-2">Confirm Payment</h2>
                  <p>Vehicle: {vehicle?.name}</p>
                  <p>Price: ${vehicle?.price}</p>
                  <p>Payment Method: {paymentMethod}</p>
                  <PaystackButton
                    className="mt-4 w-full bg-green-500 text-white py-2 rounded text-center cursor-pointer shadow-md"
                    email={email}
                    amount={vehicle?.price * 100}
                    publicKey={PAYSTACK_PUBLIC_KEY}
                    text="Confirm & Pay"
                    onSuccess={handlePaymentSuccess}
                    onClose={() => alert("Payment window closed.")}
                  />
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-3 text-center">
        &copy; 2025 Vehicle Payment System. All Rights Reserved.
      </footer>
    </div>
  );
}
