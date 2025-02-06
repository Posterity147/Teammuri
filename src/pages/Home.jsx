import React from 'react'
import { HouseIcon, User, SearchIcon, Search, BaggageClaimIcon, LucideNotebookPen, SlackIcon, SlashIcon, Slack, Car } from 'lucide-react'
import { Link } from 'react-router'
const Home = () => {
  return (
    <div>
      <img src="src/assets/car-1880381_1280.jpg" alt="" className='w-full'/>
     
 <div class="fill">
 <div id='rotate'>
      <Link to="/dashboard" ><button className='text-black'id='start'>Get Started</button></Link>
    

    </div>
      
      <div className='absolute top-11 transform-translate-x-1/2 translate-y-1/2 text-9xl font-thin m-3'><h1 id='aardvark' className='mb-8 ml-20'><strong><b>Aadvark: Your Premier Destination for Buying and Selling Cars</b></strong></h1>
<div className='text-center' id='slide-in'>
  
<h2 id='bonce' className=''> <b>Drive Home your Dream car</b></h2>

</div>
<p className='text-white' id='pulse'>Find your perfect car today</p>
     
      </div>   


    

   
    




     </div>
    </div>
   
    
     
       
       
    
   
  )
}

export default Home