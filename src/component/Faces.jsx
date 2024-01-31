import React from 'react'
import "../styles/faces.css"
import head from "../images/faces.png"

function Faces() {
  return (
    <div className='big_container'>
        <div className='face_wrapper' style={{backgroundImage: `url(${head})`}}>
          <div className="titl">
            <h5>Featuring</h5>
            <h2>Sed ut perspiciatis</h2>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className="titlss">
            <h5>Featuring</h5>
            <h2>Sed ut perspiciatis</h2>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            <button className='plus'>SHOP NOW</button>
          </div>
    </div>
  )
}

export default Faces