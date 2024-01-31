import React from 'react'
import { NavLink } from 'react-router-dom'
import img1 from "../images/raz.png"  
import img2 from "../images/dva.png"
import "../styles/dirls.css"

function GirlsPage() {
  return (
    <div className='container'>
        <div className="girls_wrapper">
          <div className="girls_one">
            <div className="girls_text">
              <h2>Neque porro quisquam est, qui dolorem</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
              <NavLink to="/">Ingredient glossary</NavLink>
            </div>
            <div className="girls_img">
              <img src={img1} alt="" />
            </div>
          </div>


          <div className="girls_one">
            <div className="girls_img">
              <img className='asd' src={img2} alt="" />
            </div>
            <div className="girls_text bro">
              <h3>Our story</h3>
              <h2>Neque porro quisquam est, qui dolorem</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
              <span>About Us</span>
            </div>
          </div>


          {/* <div className="girls_two"></div> */}
        </div>
    </div>
  )
}

export default GirlsPage