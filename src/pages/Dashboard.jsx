import React from 'react'
import { Link } from 'react-router'
import { Heart } from 'lucide-react'

const Dashboard = () => {
  return (
    <div id='parent'>
      <h1 id='dash'><b><strong>Brand</strong></b></h1>
      <p id='dash'><b><strong>Some of the most popular brands</strong></b></p>
      
      <div id='brands'>
      <Link to="/toyota" className='no-underline text-black'>
        <div id='toyota'>
          <img src="src/assets/toyota.jpg" alt="Toyota" />
          <p>Toyota</p>
          </div>
          </Link>
          <Link to="/mercedes" className='no-underline text-black'>
          <div id='toyota'>
            <img src="src/assets/mercedes.jpg" alt="benz" />
            <p>Mercedes Benz</p>
          </div>
          </Link>
          <Link to="/tesla" className='no-underline text-black'>
          <div id='toyota'>
            <img src="src/assets/tesla.png" alt="Tesla" />
            <p>Tesla</p>
          </div>
          </Link>
          <Link to="/bmw" className='no-underline text-black'>
          <div id='toyota'>
            <img src="src/assets/bmwlogo.jpg" alt="BMW" />
            <p>BMW</p>
          </div>
          </Link>
          <Link to="/audi"className='no-underline text-black'>
          <div id='toyota'>
            <img src="src/assets/audi.jpg" alt="Audi" />
            <p>Audi</p>
          </div>
          </Link>
          <Link to="/acura"className='no-underline text-black'>
          <div id='toyota'>
            <img src="src/assets/acura.png" alt="Acura" />
            <p>Acura</p>
          </div> </Link>
         <Link to="/auston"className='no-underline text-black'>
         <div id='toyota'>
            <img src="src/assets/auston.jpg" alt="martin" />
            <p>Auston Martin</p>
          </div>
         </Link>
          <Link to="/koenigsegg"className='no-underline text-black'>
          <div id='toyota'>
            <img src="src/assets/koenigsegg.png" alt="segg" />
            <p>Koenigsegg</p>
          </div>
          </Link>
          <Link to="/hyundai"className='no-underline text-black'>
          <div id='toyota'>
            <img src="src/assets/hyundai.jpg" alt="hyundai" />
            <p>Hyundai</p>
          </div>
          </Link>
          <Link to="/rollsroyce"className='no-underline text-black'>
          <div id='toyota'>
            <img src="src/assets/rollsroyce.jpg" alt="rolls royce" />
            <p>Rolls Royce</p>
          </div>
          </Link>
          <Link to="/lamborghini"className='no-underline text-black'>
          <div id='toyota'>
            <img src="src/assets/lamborghini.png" alt="lambo" />
            <p>Lamborghini</p>
          </div>
          </Link>
         <Link to="/pagani" className='no-underline text-black'>
         <div id='toyota'>
            <img src="src/assets/pagani.jpg" alt="pagani" />
            <p>Pagani</p>
          </div>
         </Link>
          </div>

        

      </div>
      
    
  )
}

export default Dashboard