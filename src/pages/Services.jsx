import React from 'react'
import { BaggageClaimIcon, LucideNotebookPen, Slack } from 'lucide-react'
const Services = () => {
  return (
    <div className='bg-green-800'>
        <h1 className='text-center'>What we offer</h1>
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
  )
}

export default Services