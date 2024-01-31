import React from 'react'
import "../styles/footer.css"
import arrow from "../images/arrow.svg"
import icon from "../images/icon.svg"
import icon1 from "../images/icon 1.svg"
import icon2 from "../images/icon 2.svg"
import icon5 from "../images/icon 5.svg"

function Footer() {
    return (
        <div className='big_container'>
            <div className="footer_wrapper">
                <div className="footer_part_one">
                    <h2>Join the club</h2>
                    <p>Keep up with our new releases, beauty tips and what Winnie’s been up to.</p>
                    <button>Email Address   <img src={arrow} alt="" /></button>

                    <div className="icons">
                        <span><img src={icon} alt="" /></span>
                        <span><img src={icon1} alt="" /></span>
                        <span><img src={icon2} alt="" /></span>
                    </div>

                    <div className="sms">
                        <div className="text">
                            <p>© 2021 Cream Shop</p>
                            <p>Terms and conditions</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>
                <div className="grud">


                    <div className="footer_part_two">
                        <ul>
                            <h3>Shop</h3>
                            <li>Shop All</li>
                            <li>Best Sellers</li>
                            <li>Universal Mineral</li>
                            <li>Isie Glow to Isle</li>
                            <li>Deepwater</li>
                            <li>Winne Selects</li>
                        </ul>
                        <ul>
                            <h3>Learn</h3>
                            <li>About Us</li>
                            <li>Ingredient Glossary</li>
                            <li>Sun Care 101</li>
                            <li>Our Journey</li>

                        </ul>
                        <ul>
                            <h3>Customer</h3>
                            <li>Contact Us</li>
                            <li>Help/FAQ</li>
                            <li>My Account</li>
                            <li>Shipping and Return</li>

                        </ul>

                    </div>


                    <img className='mes' src={icon5} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer