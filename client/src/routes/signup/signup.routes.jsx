import React from 'react'
import './signup.style.css'

const SignUp = () => {
  return (
    <div className="signup">
      <div className="sign-up-header">
      </div>
      <div className="bottom-fade">
        <h1>Ulimited movies, TV</h1>
        <h1>shows and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>

        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="input-email-field">
          <input type="text" placeholder='Email address' />
          <button>Get Started  &#x3009;</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp