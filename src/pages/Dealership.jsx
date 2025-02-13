import { Import } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { Phone } from 'lucide-react'


const Dealership = () => {
  return (
    <div className=' text-center'>
        <b>DO YOU WANT TO BE BECOME A DEALER AND PATNER WITH US?</b>
        <p>This is another services that is render by <Link to="/">
        Aardvark Autos</Link> and it is an avenue for Car Dealership owners to patner with <Link to=" /">Aardvark Autos </Link> to get cars from our store shipped to your Car Dealership store anywhere in the world and sell cars on our behalf with an Handsome commission on any Cars sold.
     <Phone/> contact us now <a href="http://">Whatsapp</a>
      </p>

    </div>
  )
}

export default Dealership