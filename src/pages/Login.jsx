import React from 'react'

const Login = () => {
  return (
    <div id='auspy'>
      <h1 id='login'>Log in</h1>
      <div id='username'>
      <input type="text" name="user" id="username" className='username'  placeholder='Enter your Username or Email' />
      </div>

      <div id='password'>
      <input type="password" name="password" id="password" className='password' placeholder='Input your Password' />
      </div>
      <span>.</span><span>.</span><span>.</span><br />
      <button className='init'>Log in</button><br />
      <p id='create'>Dont have an account?<a href="">Create account</a></p>
      <br />or continue with <span>.</span><span>.</span><span>.</span>
      <div id='button'>
        <button id='google'>Google</button>
        <button id='facebook'>Facebook</button>
      </div>
    </div>
  )
}

export default Login