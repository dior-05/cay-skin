import React from 'react'
import "../styles/brend.css"

function BrendProp({img, title, text}) {
  return (
   
        <div className="prop">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    
  )
}

export default BrendProp