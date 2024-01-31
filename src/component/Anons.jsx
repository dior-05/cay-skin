import React from 'react'
import "../styles/anons.css"
import mask from "../images/Mask Group.png"
import mask1 from "../images/Mask Group (1).png"
import { NavLink } from 'react-router-dom'

function Anons() {
    return (
        <div className='container'>
            <div className="anons">
                <div className="anons_girl res" style={{ backgroundImage: `url(${mask})` }}>
                    <h1>Nemo enim ipsam</h1>
                    <NavLink>Shop Now</NavLink>
                </div>

                <div className="anons_girl_one res" style={{ backgroundImage: `url(${mask1})` }}>
                    <h1>Temporibus autem</h1>
                    <NavLink>Shop Now</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Anons