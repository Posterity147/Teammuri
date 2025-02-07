import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FinancingPage = () => {
  const [loanAmount, setLoanAmount] = useState(25000);
  const [downPayment, setDownPayment] = useState(5000);
  const [term, setTerm] = useState(60); // Loan term in months
  const [interestRate, setInterestRate] = useState(4.5);
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  // Calculate monthly payment based on inputs
  const calculateMonthlyPayment = () => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const payment =
      (principal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -term));
    setMonthlyPayment(payment.toFixed(2));
  };

  // Handle form submission for financing application
  const handleFinancingSubmit = (e) => {
    e.preventDefault();
    alert('Your financing application has been submitted!');
    // Here, you can handle submission logic (e.g., sending data to your backend or financing partner).
  };

  return (
    <div className="p-6 bg-gray-50">
      {/* Hero Section */}
      <div className="text-center py-12 bg-blue-900 text-white">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">Get Pre-Approved for Financing</h1>
        <p className="text-xl sm:text-2xl mb-4">Our easy, fast financing options can help you drive your dream car home today!</p>
      </div>

      {/* Financing Options */}
      <div className="py-10">
        <h2 className="text-3xl text-center mb-6">Choose the Financing Option That Works for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Low-Interest Loans</h3>
            <p className="mt-2">Fixed-rate financing with low interest rates for your new or used car purchase.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Flexible Lease Options</h3>
            <p className="mt-2">Lease a car with flexible terms and low monthly payments. Option to purchase at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Cash Offers and Promotions</h3>
            <p className="mt-2">Special cash-back offers and seasonal promotions available now.</p>
          </div>
        </div>
      </div>

      {/* Loan Calculator */}
      <div className="py-10 bg-gray-100">
        <h2 className="text-3xl text-center mb-6">Use Our Car Loan Calculator</h2>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl mb-4">Estimate Your Monthly Payments</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">Loan Amount ($)</label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full p-3 border rounded-md mt-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Down Payment ($)</label>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full p-3 border rounded-md mt-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Loan Term (Months)</label>
              <input
                type="number"
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full p-3 border rounded-md mt-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Interest Rate (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full p-3 border rounded-md mt-2"
              />
            </div>
            <button
              onClick={calculateMonthlyPayment}
              className="w-full py-3 mt-4 bg-blue-900 text-white rounded-md"
            >
              Calculate Monthly Payment
            </button>
            {monthlyPayment && (
              <div className="mt-4 text-center text-xl font-semibold">
                <p>Your Estimated Monthly Payment: ${monthlyPayment}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Financing Application Form */}
      <div className="py-10">
        <h2 className="text-3xl text-center mb-6">Apply for Financing Today</h2>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl mb-4">Quick and Easy Financing Application</h3>
          <form onSubmit={handleFinancingSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md mt-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-md mt-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md mt-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Annual Income ($)</label>
                <input
                  type="number"
                  className="w-full p-3 border rounded-md mt-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Employment Status</label>
                <select className="w-full p-3 border rounded-md mt-2" required>
                  <option value="">Select an option</option>
                  <option value="Employed">Employed</option>
                  <option value="Self-Employed">Self-Employed</option>
                  <option value="Unemployed">Unemployed</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-blue-900 text-white rounded-md"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Promotions Section */}
      <div className="bg-blue-900 text-white py-10 text-center">
        <h2 className="text-3xl mb-4">Special Financing Offers</h2>
        <p className="text-xl">Take advantage of 0% APR for 60 months on select models. Apply now!</p>
        <Link to="/special-offers" className="text-yellow-300 underline mt-4 inline-block">
          View Our Special Offers
        </Link>
      </div>
    </div>
  );
};

export default FinancingPage;
