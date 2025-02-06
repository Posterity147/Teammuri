import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingBasicExample() {
  return (
    <div>
    <div id='bounce'>
<h3 ><b> Sign up</b></h3>
<p>Continue with your email or Facebook or Google account</p>
<input type="text" placeholder='Email Address*'id='email' /><br />
<input type="password" placeholder='Password*' id='email'className='mt-3'/>
<button className='w-60 m-6 p-2 bg-black text-white rounded-full'>Continue</button><br />
<p>or</p>
<div>
<button id='button1'>Continue with Google</button><br />
<button id='button2'>Continue with Facebook</button>
</div>
    </div>
    </div>   
  );
}

export default FormFloatingBasicExample