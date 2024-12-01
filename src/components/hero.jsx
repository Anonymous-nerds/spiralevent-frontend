import React from 'react'
import "./hero.css"

const hero = () => {
  return (
     <section className='hero wrapper'>
      <div className="paddings innerWidth flexCenter hero-container ">
        <div className="hero-left">
          <form>
            <h2>Get Early access</h2>
            <h3>Be one of the fist people to register !!!</h3>
            <div className='input-box'>
              <label>First Name</label>
              <input type="text" className='field' placeholder='First name' required/>
            </div>

            <div className='input-box'>
              <label>Last Name</label>
              <input type="text" className='field' placeholder='Last Name' required/>
            </div>

            <div className='input-box'>
              <label>Email</label>
              <input type="email" className='field' placeholder='Enter Your Email' required/>
            </div>
          </form>
        </div>

        <div className=" flexCenter hero-right">
          <div className='image-container'>
            <img src="./image.jpg" alt="" />
          </div>

        </div>
       
      </div>
    </section>

  )
}

export default hero