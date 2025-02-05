import React from 'react'
import { Heart } from 'lucide-react'
const Tesla = () => {
  return (
    <div>
        <div>
            <div className='text-center'><h3><b><strong>Tesla</strong></b></h3><p>

Tesla, Inc. <br />

- Founded: 2003 <br />
- HQ: Austin, Texas, USA <br />
- Founder: Elon Musk <br />
- Known for: Electric vehicles (EVs), clean energy solutions, autonomous driving <br />
- Iconic models: Model S, Model 3, Model X, Model Y, Cybertruck</p></div>
        </div>
        <div id='grid'>
            <div id='lambo'>
                <Heart size={30} color='red' className=''/>
                <img src="src/assets/2025models.jpg" alt="" />
                <p>2025 Model S</p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/cybertruck.jpg" alt="" />
                <p>Cybertruck</p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/2025models.jpg" alt="" />
                <p><b>Model 3</b></p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/2025modelX.jpg" alt="" />
                <p><b>Model X</b></p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/2025modelY.jpg" alt="" />
                <p><b>Model Y</b></p>
            </div>
            <div id='lambo'>
            <Heart size={30} color='red' className=''/>
                <img src="src/assets/2025roadster.jpg" alt="" />
                <p><b>Roadster</b></p>
            </div>
        </div>
    </div>
  )
}

export default Tesla