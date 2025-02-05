import React from 'react'
import { Heart } from 'lucide-react'
const Auston = () => {
  return (
    <div>
         <div className='text-center'><h3><b><strong>Aston Martin</strong></b></h3>
         <p>

Aston Martin Lagonda <br />

- Founded: 1913 <br />  
- HQ: Gaydon, England <br />
- Known for: Luxury sports cars, sleek design, James Bond association <br />
- Iconic models: DB5, DB9, Vantage, Vanquish, Valkyrie</p>
         </div>
         <div id='grid'>
         <div id='lambo'>
         <Heart size={30} color='red' className=''/>
                <img src="src/assets/2025DB5.jpg" alt="" />
                <p><b>DB5</b></p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/2025DB9.jpg" alt="" />
                <p><b>DB9</b></p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/2025Vantage.jpg" alt="" />
                <p><b>Vantage</b></p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/2025Vanquish.jpg" alt="" />
                <p><b>Vanquish</b></p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/2025Valkyrie.jpg" alt="" />
                <p><b>Valkyrie</b></p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/2025CC100.jpg" alt="" />
                <p><b>CC100</b></p>
            </div>

         </div>


    </div>
  )
}

export default Auston