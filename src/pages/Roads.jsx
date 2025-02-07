import React from 'react';
import { Link } from 'react-router-dom';

const TopCarsForRoadTrips = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Top 5 Cars for Road Trips in 2025</h1>
        <p className="text-lg text-gray-600">Discover the best vehicles for long drives, comfort, and adventure.</p>
      </div>

      
      <div className="my-12">
        <h2 className="text-3xl font-semibold mb-4">Why Choose the Right Car for Your Road Trip?</h2>
        <p className="text-lg text-gray-700 mb-4">
          The right car can make or break your road trip experience. Whether you're heading to the mountains, the beach, or across the country, having a comfortable, spacious, and reliable car is essential.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          The perfect road trip car should offer ample cargo space, excellent fuel efficiency, a smooth ride, and modern tech features to keep you entertained and connected on the road.
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
       
        <div className="car-card border rounded-lg p-6 shadow-md">
          <img src="src/assets/CRV.jpg" alt="Honda CR-V" className="w-full h-64 object-cover mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Honda CR-V</h3>
          <p className="text-lg text-gray-700 mb-4">
            The Honda CR-V is known for its excellent fuel economy, spacious interior, and smooth handling. Perfect for families or anyone looking to pack a lot without compromising on comfort.
          </p>
          <ul className="list-disc pl-6 mb-4 text-lg text-gray-700">
            <li>Fuel Efficiency: 28/34 mpg (city/highway)</li>
            <li>Seating: 5 passengers</li>
            <li>Cargo Space: 39.2 cu ft</li>
            <li>Safety Features: Lane Assist, Adaptive Cruise Control</li>
          </ul>
          
        </div>

        
        <div className="car-card border rounded-lg p-6 shadow-md">
          <img src="src/assets/HIGHLANDER.jpg" alt="Toyota Highlander" className="w-full h-64 object-cover mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Toyota Highlander</h3>
          <p className="text-lg text-gray-700 mb-4">
            With its three-row seating, the Toyota Highlander offers plenty of room for larger families and all their luggage. It also features a hybrid option for better fuel efficiency on long drives.
          </p>
          <ul className="list-disc pl-6 mb-4 text-lg text-gray-700">
            <li>Fuel Efficiency: 20/27 mpg (city/highway)</li>
            <li>Seating: 7-8 passengers</li>
            <li>Cargo Space: 16 cu ft (with 3rd row down)</li>
            <li>Safety Features: Blind Spot Monitoring, Pedestrian Detection</li>
          </ul>
          
        </div>

       
        <div className="car-card border rounded-lg p-6 shadow-md">
          <img src="src/assets/Model y.jpg" alt="Tesla Model Y" className="w-full h-64 object-cover mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Tesla Model Y</h3>
          <p className="text-lg text-gray-700 mb-4">
            For those looking for an electric vehicle, the Tesla Model Y is a top choice for road trips. It offers impressive range, high-tech features, and a spacious cabin perfect for long journeys.
          </p>
          <ul className="list-disc pl-6 mb-4 text-lg text-gray-700">
            <li>Range: Up to 330 miles on a single charge</li>
            <li>Seating: 5-7 passengers</li>
            <li>Cargo Space: 68 cu ft</li>
            <li>Safety Features: Autopilot, Collision Avoidance</li>
          </ul>
    
        </div>

        
        <div className="car-card border rounded-lg p-6 shadow-md">
          <img src="src/assets/SDI_UAT_360e_032.png" alt="Subaru Outback" className="w-full h-64 object-cover mb-4" />
          <h3 className="">Subaru Outback</h3>
          <p className="text-lg text-gray-700 mb-4">
            The Subaru Outback is the ultimate adventure car. It’s rugged, reliable, and has all-wheel drive to handle rough terrain and changing weather conditions while ensuring comfort and efficiency.
          </p>
          <ul className="list-disc pl-6 mb-4 text-lg text-gray-700">
            <li>Fuel Efficiency: 26/33 mpg (city/highway)</li>
            <li>Seating: 5 passengers</li>
            <li>Cargo Space: 32.5 cu ft</li>
            <li>Safety Features: All-Wheel Drive, EyeSight Driver Assist Technology</li>
          </ul>
          
        </div>

        
        <div className="car-card border rounded-lg p-6 shadow-md">
          <img src="src/assets/mustangred.jpg" alt="Ford Mustang Mach-E" className="w-full h-64 object-cover mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Ford Mustang Mach-E</h3>
          <p className="text-lg text-gray-700 mb-4">
            The Ford Mustang Mach-E is a perfect blend of performance, style, and sustainability. It’s an electric SUV with a long range, fun to drive, and offers ample space for your road trip essentials.
          </p>
          <ul className="list-disc pl-6 mb-4 text-lg text-gray-700">
            <li>Range: Up to 300 miles on a single charge</li>
            <li>Seating: 5 passengers</li>
            <li>Cargo Space: 29.7 cu ft</li>
            <li>Safety Features: 360-degree cameras, Adaptive Cruise Control</li>
          </ul>
        
        </div>
      </div>

     
      <div className="text-center my-12">
        <h2 className="text-3xl font-semibold mb-4">Ready to Hit the Road?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Whether you’re planning a cross-country road trip or a weekend getaway, the cars listed above offer the perfect combination of comfort, space, and technology for a smooth ride. Choose the one that suits your travel style and get ready for your next adventure.
        </p>
       
      </div>
    </div>
  );
};

export default TopCarsForRoadTrips;
