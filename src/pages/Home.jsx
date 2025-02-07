import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      
      <div className="relative">
        <img src="src/assets/car-1880381_1280.jpg" alt="Car Dealership" className='w-full' />
        <div className="absolute top-11 transform-translate-x-1/2 translate-y-1/2 text-9xl font-thin m-3">
          <h1 id='aardvark' className='mb-8 ml-20'>
            <strong><b>Aadvark: Your Premier Destination for Buying and Selling Cars</b></strong>
          </h1>
          <div className='text-center' id='slide-in'>
            <h2 id='bonce' className=''>
              <b>Drive Home Your Dream Car</b>
            </h2>
          </div>
          <p className='text-white' id='pulse'>Find your perfect car today</p>
        </div>
      </div>

      
      <div id='featured-cars' className="flex flex-wrap justify-center gap-5 mt-10 mb-5">
        
        <div className="car-card">
          <img src="src/assets/2025Tcamry.jpg" alt="Toyota Camry" className='w-48' id='slide-in'/>
          <h4>Toyota Camry 2025 Model</h4>
          <p>$28,400 <br /> Discount: <strike>30% off</strike></p>
          <Link to="/payment"><button id='cart'>Buy Now</button></Link>
        </div>
        <div className="car-card">
          <img src="src/assets/toyota-corolla-color-179822.avif" alt="Toyota Corolla" className='w-48' id='slide-in'/>
          <h4>Toyota Corolla 2025 Model</h4>
          <p>$23,500 <br /> Discount: <strike>20% off</strike></p>
          <Link to="/payment"><button id='cart'>Buy Now</button></Link>
        </div>
        <div className="car-card">
          <img src="src/assets/3b94b5b95364af1482c9397e6b8c3b7b.png" alt="Honda Civic" className='w-48' id='slide-in'/>
          <h4>Honda Civic 2025 Model</h4>
          <p>$23,500 <br /> Discount: <strike>20% off</strike></p>
          <Link to="/payment"><button id='cart' className='mb-5'>Buy Now</button></Link>
        </div>
      </div>

    
      <div className="testimonials-section bg-gray-100 py-10">
        <h2 className="text-4xl text-center mb-5">What Our Customers Say</h2>
        <div className="flex justify-center gap-10">
          <div className="testimonial">
            <p className="text-lg">"Aardvark made buying my first car so easy and stress-free. Great customer service!"</p>
            <p>- Abdulmalik Badmus</p>
          </div>
          <div className="testimonial">
            <p className="text-lg">"I love my new Toyota Camry! They helped me get the best deal on financing."</p>
            <p>- Aisha</p>
          </div>
        </div>
      </div>

      
      <div className="financing-section bg-blue-900 text-white py-10 text-center">
        <h2 className="text-4xl mb-5">Get Pre-Approved for Financing</h2>
        <p className="text-2xl mb-5">With our easy online application, you can get pre-approved in minutes!</p>
        <Link to="/financing" className="text-xl text-yellow-300 no-underline">Apply for Financing</Link>
      </div>

    
      <div className="blog-section py-20 text-center">
        <h2 className="text-4xl mb-5">Read Our Latest Articles</h2>
        <div className="flex justify-center gap-10">
          <div className="blog-post">
            <h3 className="text-2xl mb-3">How to Choose the Right Car for Your Family</h3>
            <p className="mb-3">Choosing the perfect car for your family can be overwhelming. Here’s a guide to help...</p>
            <Link to="/choose" className="text-blue-600 no-underline">Read More</Link>
          </div>
          <div className="blog-post">
            <h3 className="text-2xl mb-3">Top 5 Cars for Road Trips in 2025</h3>
            <p className="mb-3">Planning a road trip? Here are the top 5 cars that are perfect for long drives...</p>
            <Link to="/roads" className="text-blue-600 no-underline">Read More</Link>
          </div>
        </div>
      </div>

      
      <div className="relative w-full">
        <img 
          src="src/assets/driver.jpg" 
          alt="Car Test Drive"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin mb-10">
            At Aardvark, we make car buying simple, affordable, and exciting with easy financing options
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold opacity-0 animate-slideIn">
            Drive your Dream Car Hassle-free
          </p>
        </div>
      </div>

    
    </div>
  )
}

export default Home
