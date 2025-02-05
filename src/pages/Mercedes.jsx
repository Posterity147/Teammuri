import React from 'react'
import { Heart } from 'lucide-react'
const Mercedes = () => {
  return (
    <div>
        <h1 className='text-center'><b><strong>Mercedes-Benz</strong></b></h1>
        <p className='text-center'> Mercedes-Benz: German luxury car brand founded in 1926, known for innovative technology, performance, and prestige. <br />
    


- Founded: 1926
- HQ: Stuttgart, Germany
- Known for: Luxury vehicles, innovative tech, performance
- Iconic models: S-Class, E-Class, C-Class, AMG GT</p>
<div id='grid'>
<div id='lambo'>
<Heart size={30} color='red' className=''/>
    <h3 className='text-center'>Mercedes-Brabus</h3>
    <img src="src/assets/brabus.jpg" alt=""  />
</div>
<div id='lambo'>
<Heart size={30} color='red' className=''/>
    <h3 className='text-center'>Mercedes Maybach</h3>
    <img src="src/assets/2025maybach.jpg" alt="" className='pt-5'/>
</div>
<div id='lambo'>
<Heart size={30} color='red' className=''/>
    <h3 className='text-center'>Mercedes-Benz GLK</h3>
    <img src="src/assets/2025glk.jpg" alt="" />
</div>
<div id='lambo'>
<Heart size={30} color='red' className=''/>
  <h3 className='text-center'>Mercedes Benz 2025 Model</h3>
  <img src="src/assets/2025benzz.jpg" alt="" className='w-60' />
</div>
<div id='lambo'>
<Heart size={30} color='red' className=''/>
  <h3 className='text-center'>Mercedes Benz E-Class</h3>
  <img src="src/assets/e class.jpg" alt="" />
</div>
<div id='lambo'>
<Heart size={30} color='red' className=''/>
  <h3 className='text-center'>Mercedes G-Wagon</h3>
  <img src="src/assets/gwagon.jpg" alt="" />
</div>
    </div>
    </div>
  )
}

export default Mercedes