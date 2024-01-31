import React from 'react'
import "../styles/logos.css"
import logo1 from "../images/image 2 (Traced).png"
import logo2 from "../images/image 3 (Traced).png"
import logo3 from "../images/image 4 (Traced).png"
import logo4 from "../images/image 5 (Traced).png"

function Logos() {
  return (
    <div className='big_containe'>
        <div className='big_container'>
        <div className="logos">
          <h3>Featured</h3>
          <div className="logo_img">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logos