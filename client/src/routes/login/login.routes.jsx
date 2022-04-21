import React from 'react'
import './login.style.css'

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Sign In</h1>
        <form action="">
          <input className='sign-inp sign' type="email" placeholder='Email or phone number'/>
          <input className='sign-inp sign' type="password" placeholder='Password'/>
          <button className="sign-in-btn sign">Sign In</button>
        </form>
        <div className="login-support">
          <div className="remember-me">
            <input type="checkbox" />Remember me 
          </div>
          <p>Need help?</p>
        </div>

        <div className="other-content">
            <p className='fb'>Login with Google</p> 
            <p><span>New to Netflux?</span> Sign up now</p>
            <p className='recaptcha'>
              This page is protected by Google reCAPTCHA to
              ensure you're not a bot. <a href="/">Learn More</a>.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Login