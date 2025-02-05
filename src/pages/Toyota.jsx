import React from 'react'
import { Heart } from 'lucide-react'
const Toyota = () => {
  return (
    <div><h1 id='color'><b><strong> <img src="src/assets/toyota.jpg" alt="" className='w-20 inline'/>Toyota</strong></b></h1>
     <p className='text-center'>- Founded: 1937 <br />
    - HQ: Toyota City, Japan<br />
    - Known for: Corolla, Camry, RAV4, Prius, Land Cruiser<br />
    - Innovations: Hybrid technology, autonomous driving, sustainable manufacturing<br />
    - Awards: World's largest automaker, most valuable automotive brand, greenest automaker</p><br />
    <div id='grid' >
        <div id='lambo'>
        <Heart size={30} color='red' className=''/>
        <h3 className='text-center'>Toyota corolla 2025 model</h3>
        <img src="src/assets/2025corolla.jpg" alt="" />
    </div>
    <div id='lambo'> 
    <Heart size={30} color='red' className=''/>
        <h3 className='text-center'>Toyota Camry 2025 model</h3>
        <img src="src/assets/2025camry.jpg" alt="" />
        </div>
                 <div id='lambo'>
                 <Heart size={30} color='red' className=''/>
                    <h3 className='text-center'>Toyota Rav4</h3>
                    <img src="src/assets/2025rav'.jpg" alt="" />
                 </div>
                 <div id='lambo'> 
                 <Heart size={30} color='red' className=''/>
                    <h3 className='text-center'>Toyota Prius</h3>
                    <img src="src/assets/2025prius.jpg" alt="" className='w-96' />
                 </div>
                 <div id='lambo'>
                 <Heart size={30} color='red' className=''/>
                    <h3 className='text-center'>Toyota Land Cruiser</h3>
                    <img src="src/assets/2025landcruiser.jpg" alt="" />
                 </div>
                 <div id='lambo'>
                 <Heart size={30} color='red' className=''/>
                  <h3 className='text-center'>Toyota Urban Cruiser </h3>
                  <img src="src/assets/urban2025.jpg" alt="" className='w-50' />
                 </div>
        
    </div>
    </div>
   
  )
}

export default Toyota