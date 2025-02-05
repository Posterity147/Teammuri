import React from 'react'
import { Heart } from 'lucide-react'
const Audi = () => {
  return (
    <div>
    <div className='text-center'><h3><b><strong>Audi</strong></b></h3>
    <p>

Audi AG <br />

- Founded: 1909 <br />
- HQ: Ingolstadt, Germany <br />
- Known for: Luxury vehicles, Quattro all-wheel drive, innovative design <br />
- Iconic models: A4, A6, A8, Q5, R8</p>  
    </div>
         <div id='grid'>
         <div id='lambo'>
         <Heart size={30} color='red' className=''/>
                <img src="src/assets/A4.jpg" alt="" />
                <p><b>Audi A4</b></p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/2025A6.jpg" alt="" />
                <p><b>Audi A6</b></p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/2025A8.jpg" alt="" />
                <p><b>Audi A8</b></p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/2025RS7.jpg" alt="" />
                <p><b>Audi RS7</b></p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/2025Q5.jpg" alt="" />
                <p><b>Audi Q5</b></p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/2025R8.jpg" alt="" />
                <p><b>Audi R8</b></p>
            </div>


         </div>








</div>
  )
}

export default Audi