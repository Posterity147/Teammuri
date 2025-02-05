import React from 'react'
import { HouseIcon, User, SearchIcon, Search, BaggageClaimIcon, LucideNotebookPen, SlackIcon, SlashIcon, Slack, Car } from 'lucide-react'
const Home = () => {
  return (
    <div class="fill">
      <img src="src/assets/pexels-trace-707046.jpg" alt="porsche" className='w-full h-full' id='reveal' />
      
      <div className='absolute top-11 transform-translate-x-1/2 translate-y-1/2 text-9xl font-thin m-3'><h1 id='aardvark' className='mb-8 ml-20'><strong><b>Aadvark: Your Premier Destination for Buying and Selling Cars</b></strong></h1>
      <h3 className='m-3'>

<div className='text-center' id='slide-in'>
<h5 id='bonce' className='text-black '>- Extensive listings of new and used cars from top manufacturers <br />
- Advanced search filters for easy navigation<br />
- Detailed vehicle profiles with high-quality photos and videos<br />
- Secure payment processing and escrow services<br />
- Expert customer support and resources<br /></h5>

</div>

      </h3>
      </div>   


     <div className='bg-black text-white w-full mt-0 '>
<h2 className='text-center text-white mt-0.5 pt-5'>Why Aardvark?</h2>
   <div className='flex gap-5 ml-64 mt-10'>
   <div>
          <BaggageClaimIcon size={140} color='blue'id='rotate' />
          <h3>Transparent Pricing</h3>
          <p>No surprises here. <br />See how much you'll on cars you like</p>
         </div>
         <div>
         <LucideNotebookPen size={140} color='green'id='rotate' />
         <h3>Minutes not hours</h3>
         <p>Time saving tools to help you find the right car in a snap</p>
         </div>
         <div>
          <Slack size={140} color='orange' id='rotate' />
          <h3>Shop your way</h3>
          <p>Your own pace,your own space. <br />Shop online when and where its convenient for you</p>
         </div> 

   </div>
   
         </div>



    <div id='reveal'>
      <h1></h1>

    </div>




     </div>
    
     
       
       
    
   
  )
}

export default Home