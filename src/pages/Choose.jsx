import React from 'react';
import { Link } from 'react-router-dom';

const ChooseCarForFamily = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">How to Choose the Right Car for Your Family</h1>
        <p className="text-lg text-gray-600">A step-by-step guide to help you pick the perfect family vehicle</p>
      </div>

      {/* Section 1: Consider Your Family's Needs */}
      <div className="my-12">
        <h2 className="text-3xl font-semibold mb-4">1. Consider Your Family's Needs</h2>
        <p className="text-lg text-gray-700 mb-4">
          When selecting a family car, it's important to assess what your family truly needs. Ask yourself:
        </p>
        <ul className="list-disc pl-6 mb-6 text-lg text-gray-700">
          <li>How many passengers do you need to fit regularly?</li>
          <li>Do you need additional cargo space for groceries, strollers, etc.?</li>
          <li>Will you be driving long distances or taking road trips frequently?</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">
          Your answers will help you decide if you need a sedan, SUV, minivan, or a larger vehicle.
        </p>
      </div>

      {/* Section 2: Safety Features */}
      <div className="my-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">2. Prioritize Safety Features</h2>
        <p className="text-lg text-gray-700 mb-4">
          The safety of your family is paramount. Here are some essential safety features to consider:
        </p>
        <ul className="list-disc pl-6 mb-6 text-lg text-gray-700">
          <li>Automatic Emergency Braking</li>
          <li>Blind-Spot Monitoring</li>
          <li>Lane Departure Warning</li>
          <li>Rearview Camera and Parking Sensors</li>
          <li>Child Safety Lock and Anchor Points</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">
          Ensure that your chosen car comes equipped with these features for the safety of your loved ones.
        </p>
      </div>

      {/* Section 3: Fuel Efficiency */}
      <div className="my-12">
        <h2 className="text-3xl font-semibold mb-4">3. Fuel Efficiency</h2>
        <p className="text-lg text-gray-700 mb-4">
          With rising fuel prices, fuel efficiency is a crucial factor for family cars. When making your choice:
        </p>
        <ul className="list-disc pl-6 mb-6 text-lg text-gray-700">
          <li>Consider the car's miles per gallon (MPG) rating.</li>
          <li>If you often drive long distances, opting for a hybrid or electric vehicle can save you money.</li>
          <li>Look for models with energy-efficient engines and technologies.</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">
          Choosing a fuel-efficient car can help reduce long-term costs and environmental impact.
        </p>
      </div>

      {/* Section 4: Comfort and Interior Space */}
      <div className="my-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">4. Comfort and Interior Space</h2>
        <p className="text-lg text-gray-700 mb-4">
          Family road trips and daily commutes should be comfortable for everyone. Consider:
        </p>
        <ul className="list-disc pl-6 mb-6 text-lg text-gray-700">
          <li>Ample legroom for both front and rear passengers.</li>
          <li>Spacious cargo area for luggage, sports equipment, or strollers.</li>
          <li>Adjustable seating options and easy-to-clean materials.</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">
          Pay attention to seat configurations, especially if you need to install child car seats.
        </p>
      </div>

      {/* Section 5: Budget */}
      <div className="my-12">
        <h2 className="text-3xl font-semibold mb-4">5. Set Your Budget</h2>
        <p className="text-lg text-gray-700 mb-4">
          The price of a family car can vary greatly depending on the type and features. Consider:
        </p>
        <ul className="list-disc pl-6 mb-6 text-lg text-gray-700">
          <li>Your maximum budget for upfront costs and monthly payments.</li>
          <li>Maintenance costs and long-term durability.</li>
          <li>Available financing options and deals from car dealerships.</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">
          Setting a clear budget will help you narrow down your options and avoid overspending.
        </p>
      </div>

      {/* Section 6: Test Drive */}
      <div className="my-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">6. Don't Forget the Test Drive!</h2>
        <p className="text-lg text-gray-700 mb-4">
          A test drive is a critical step in choosing the right car. During the test drive:
        </p>
        <ul className="list-disc pl-6 mb-6 text-lg text-gray-700">
          <li>Ensure the car feels comfortable to drive and ride in.</li>
          <li>Check for visibility and ease of parking.</li>
          <li>Pay attention to the vehicle’s handling and noise levels.</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">
          This will give you a real-world feel of the car before making your final decision.
        </p>
      </div>

      {/* Conclusion Section */}
      <div className="my-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
        <p className="text-lg text-gray-700 mb-4">
          Choosing the right family car involves considering factors like your family’s needs, safety features, fuel efficiency, comfort, budget, and more. Take your time to evaluate your options, and you’ll be driving home in the perfect car for your family in no time.
        </p>
        <Link to="/dashboard" className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 no underline">
          Browse Our Cars
        </Link>
      </div>
    </div>
  );
};

export default ChooseCarForFamily;
