import React from 'react'
import { HouseIcon, User, SearchIcon, Search, BaggageClaimIcon, LucideNotebookPen, SlackIcon, SlashIcon, Slack, Car } from 'lucide-react'
import { Link } from 'react-router'
const Home = () => {
  return (
    <div>
      <img src="src/assets/car-1880381_1280.jpg" alt="" className='w-full'/>
     
 <div class="fill">

      
      <div className='absolute top-11 transform-translate-x-1/2 translate-y-1/2 text-9xl font-thin m-3'><h1 id='aardvark' className='mb-8 ml-20'><strong><b>Aadvark: Your Premier Destination for Buying and Selling Cars</b></strong></h1>
<div className='text-center' id='slide-in'>
  
<h2 id='bonce' className=''> <b>Drive Home your Dream car</b></h2>

</div>
<p className='text-white' id='pulse'>Find your perfect car today</p>
     
      </div>   


    

   
    




     </div>



<div id='featured-cars'>

<div id='corolla' className='ml-5'>
  <img src="src/assets/camry.jpg" alt="" />
  <h4>Toyota Camry 2025 Model</h4>
     $28,400 <br />
     Discount:<strike>30% off</strike>

<br />
<Link to="/payment"><button id='cart'>Buy Now</button></Link>
</div>
<div id='corolla'>
  <img src="src/assets/corolla.jpg" alt="" />
  <h4>Toyota corolla 2025 Model</h4>
  $23,500 <br />
  Discount: <strike>20% off</strike><br />
  <Link to="/payment">
  <button id='cart'>Buy Now</button></Link>

</div>
<div id='corolla'>
  <img src="src/assets/civic.jpg" alt="" />
  <h4>Honda civic 2025 Model</h4>
  $23,500 <br />
  Discount: <strike>20% off</strike><br /><button id='cart'>Buy Now</button>

</div>
<div id='corolla'>
  <img src="src/assets/rxx.jpg" alt="" />
  <h4>Lexus rx 2025 Model</h4>
  $23,500 <br />
  Discount: <strike>20% off</strike><br /><button id='cart'>Buy Now</button>

</div>
<div id='corolla'>
  <img src="src/assets/sonataa.jpg" alt="" />
  <h4>Hyundai Sonata 2025 Model</h4>
  $23,500 <br />
  Discount: <strike>20% off</strike><br /><button id='cart'>Buy Now</button>

</div>
<div id='corolla'>
  <img src="src/assets/sienna.jpg" alt="" />
  <h4>Toyota sienna 2025 Model</h4>
  $23,500 <br />
  Discount: <strike>20% off</strike><br />
  <button id='cart'>Buy Now</button>
</div>


</div>
<div className="relative w-full">
  <img 
    src="src/assets/dashboardd.webp" 
    alt="Sample"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin mb-10">
      At Aardvark, we make car buying simple, affordable, and exciting with easy financing options
    </h1>
    <p 
      id="slide-in" 
      className="text-2xl sm:text-3xl lg:text-4xl font-semibold opacity-0 animate-slideIn">
      Drive your Dream Car Hassle-free
    </p>
  </div>
</div>


    </div>
   
    
     
       
       
    
   
  )
}

export default Home