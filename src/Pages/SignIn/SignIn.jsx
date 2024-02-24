import React from 'react'
import './SignIn.scss'

export default function SignIn() {
  return (
    <>
      <div className="signIn">
        <div className="box">
          <h1>Crypto trading with bots and smart seals</h1>
          <div className="right">
            <div className="main">
              <h1>Sign in </h1>
              <div className="inputs">
              <input type="email" placeholder='login or email' />
              <input type="email" placeholder='Password' />
              </div>
              <button>Sign in </button>
              <p>Still not have account?</p>
              <button id='createAccountBtn'>Create an account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
