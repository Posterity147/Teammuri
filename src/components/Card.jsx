import React from 'react'
import { Check } from 'lucide-react'


const Card = () => {
  return (


    <div className='flex justify-center p-8 h-100'>

      <div className='border-4 border-solid m-0 p-0 w-100 items-center'>
        <h1><b>For your luxury wears</b></h1>
        <p><Check />Shirts  and Tops</p>
        <p><Check />Jeans and Jackets</p>
        <p><Check />corporate wears</p>
        <p><Check />And many more</p>

      </div>


      <div className='border-4 border-solid m-2 w-50 p-20'>
        <h1><b>Affordable and Top Notch Accessories</b></h1><br />

        <div className=''>
          <Check className='m-0 p-0'/><p>Phones</p>
        </div>
        <p><Check />Head phones </p>
        <p><Check /> Personal and Office computers</p>
        <p><Check className='m-0.5' />And other Gadgets</p>

      </div>



      <div className='border-4 border-solid m-4 w-50 h-100 '>
        <h1><b>The Best Interior Decord for your Homes</b></h1><br />
        <p><Check />complete sitting room sets</p>
        <p><Check />complete dinning sets</p>
        <p><Check />TV console</p>
        <p><Check />Home and office work space set up</p>

      </div>




    </div>



  )


}

export default Card