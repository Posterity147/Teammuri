import React from 'react'
import { Heart } from 'lucide-react'
const Bmw = () => {
  return (
    <div>
        <div className='text-center'><h3><b><strong>BMW</strong></b></h3>
        <p>

BMW (Bayerische Motoren Werke) <br />

- Founded: 1916 <br />
- HQ: Munich, Germany <br />
- Known for: Luxury vehicles, performance, innovation <br />
- Iconic models: 3 Series, 5 Series, X5, M3, M5</p>
        </div>
        <div id='grid'>
        <div id='lambo'>
        <Heart size={30} color='red' className=''/>
                <img src="src/assets/bmw4series.jpg" alt="" />
                <p><b>BMW 4 Series</b></p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/2025bmw3series.jpg" alt="" />
                <p><b>BMW 3 Series</b></p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/5series.jpg" alt="" />
                <p><b>BMW 5 Series</b></p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/X5 Series.jpg" alt="" />
                <p><b>BMW X5 Series</b></p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/M5.jpg" alt="" />
                <p><b>BMW M5 Series</b></p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/M3.jpg" alt="" />
                <p>BMW M3 Series</p>
            </div>
            
            
        </div>
    </div>
  )
}

export default Bmw