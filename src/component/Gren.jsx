import React from 'react'
import "../styles/gren.css"
import devochka from "../images/devochka.png"
import lists from "../images/list item.png"
import lists1 from "../images/list item (1).png"
import lists2 from "../images/list item (2).png"
import lists3 from "../images/list item (3).png"
import lists4 from "../images/list item (4).png"
import lists5 from "../images/list item (5).png"

function Gren() {
  return (
    <div className='big_container'>
        <div className="gren_wrapper">
            <div className="gren_text">
                <h2>Ingredients</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <div className="gren_img">
                    <img src={lists} alt="" />
                    <img src={lists1} alt="" />
                    <img src={lists2} alt="" />
                    <img src={lists3} alt="" />
                    <img src={lists4} alt="" />
                    <img src={lists5} alt="" />
                </div>
                <h3>Full Ingredient glossary</h3>
            </div>
            <img src={devochka} alt="" />
        </div>
    </div>
  )
}

export default Gren