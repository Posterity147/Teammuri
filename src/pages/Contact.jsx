import React from 'react'

const Contact = () => {
  return (

        
<div className='flex mr-7 ml-8'>
  <div id='contact-us'>
   <div id='container'>
    <h1 className='mt-5'>Contact Us</h1>
    <p>We'd love to hear from you, please fill out the Information below, and we get back to you swiftly</p>
    <div id='contact-form'>
      <form action="/submit-contact" method='post'>
      <div id='form-group'>
        <label htmlFor="name">Full Name</label>
      <input type="text" name="name" id="name" placeholder='Your Name' />
      </div>
      <div id='form-group'>
        <label htmlFor="email">Email Address</label>
        <input type="email" name='email' id='email' placeholder='Your Email' />
      </div>
      <div id='form-group'>
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" name='phone' id='phone' placeholder='Your Phone Number' />
      </div>
      <div id='form-group'>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="4" placeholder='Your Message'></textarea>
      </div>
      <button type='submit' id='cta-button'>Send Message</button>
      
      </form>
      
    </div>
   </div>
  </div>
  <div>
        
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0" className='mt-10 ml-8'
            />

        </div>
</div>
          
  
  )
}

export default Contact