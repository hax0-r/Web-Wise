import React from 'react'
import './ContactUs.scss'

export default function ContactUs() {

  const formSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="contactUs">
        <div className="box">
          <h1>Crypto trading with bots and smart seals</h1>
          <div className="right">
            <form onSubmit={formSubmitHandler}>
              <div className="main">
                <h1>Contact us</h1>
                <div className="inputs">
                  <input type="name" placeholder='Name' />
                  <input type="email" placeholder='Email' />
                  <input type="number" placeholder='Phone Number' />
                  <textarea name="" id="" cols="30" rows="3" placeholder='Message'></textarea>
                </div>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
