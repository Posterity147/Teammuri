import React from 'react'

const Register = () => {
  return (
    <div id='register'>
      <h1><b>SIGNING UP </b></h1>

<input type="text"  placeholder='First Name'id='first'/>
<input type="text"  placeholder='Last Name' id='last'/><br />
<br />
<input type="text" placeholder='Select Username' id='usernam'/>
<input type="password"  placeholder="Password" id='pass' /><br />
<br />
<label htmlFor="Gender">GENDER?</label>
<select name="Gender" id="gender">
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Others">Others</option><br />
  <br />

</select><br />
<br />
<label htmlFor="checker">Yes,My Informations are Correct!</label>
<input type="checkbox" id="info" />
<br />
<br />
Already have an account? <a href="http://alhost:5173/login">Login</a>




    </div>
  )
}

export default Register