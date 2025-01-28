import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-evenly m-12 font-serif p-0'>
      <h3> <a href="https://dribbble.com/">Aardvark</a></h3>
      <input type="text" id='what' placeholder='What are you looking for ?' /><a href="">
        <select name="search" id="search">
          <option value="shots"><a href="">Shots</a></option>
          <option value="designers">Designers</option>
        </select>
      </a>

      <select name="explore" id="explore">
        <option value="xplore"><a href="https://dribbble.com/shots/popular"> Explore</a></option>
        <option value="animation"><a href="https://dribbble.com/shots/popular/animation">Animation</a> </option>
        <option value="web"><a href="https://dribbble.com/shots/popular/web-design">Web Design</a></option>
        <option value="product"><a href="https://dribbble.com/shots/popular/product-design">Product Design</a></option>
        <option value="brand"><a href="https://dribbble.com/shots/popular/branding">Branding</a></option>
        <option value="illustrste"><a href="https://dribbble.com/shots/popular/illustration">Illustration</a></option>
        <option value="mobile"><a href="https://dribbble.com/shots/popular/mobile">Mobile</a></option>
        <option value="typo"><a href="https://dribbble.com/shots/popular/typography">Typography</a></option>
        <option value="print"><a href="https://dribbble.com/shots/popular/print">Print</a></option>
      </select>
      <select name="hire" id="hire">
        <option value="hire"><a href="https://dribbble.com/designers">Hire a Designer</a></option>
        <option value="browse"><a href="https://dribbble.com/designers">Browse Designers</a></option>
        <option value=""><a href="https://dribbble.com/jobs/new">Post a Job</a></option>
        <option value="submit"><a href="https://dribbble.com/submit-brief">Submit a Project Brief</a></option>
        <option value="dribble"><a href="https://dribbble.com/hiring">Hiring on Dribble</a></option>
      </select>
      <a href="https://dribbble.com/jobs">Find Jobs</a>
      <a href="https://dribbble.com/stories">Blog</a>
      <button id='sign'>Sign Up</button>
      <button id='log'>Log in</button>
    </div>

  )
}

export default Navbar