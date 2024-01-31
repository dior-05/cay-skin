import React from 'react'
import "../styles/cartPage.css"
import maz from "../images/image 9.png"

function CartProps({ titles, texts, subtitle, link, tsena, number, tsenas }) {
  return (
    <main>
      <div className='container'>
        <div className='url'>
          <div className="picture">
            <div className="gel">
              <img src={maz} alt="" />
            </div>
            <div className="titless">
              <h4>{titles}</h4>
              <h5>{texts}</h5>
              <h6>{subtitle}</h6>
              <p>{link}</p>
            </div>
          </div>
          <h3>{tsena}</h3>
          <div className="number">
            <p>-</p>
            <p>{number}</p>
            <p>+</p>
          </div>
          <h3>{tsenas}</h3>
        </div>
      </div>

    </main>
  )
}

export default CartProps