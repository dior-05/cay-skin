import React from 'react'
import "../styles/cartPage.css"
import CartProps from './CartProps'

function BannerCart() {
    return (
        <div className='container'>
            <div className=" help">
                <h1>MY CART</h1>
                <input type="range" />
                <p>$12.00 away from Free Shipping</p>
                <div className="first">
                    <p>Product</p>
                    <div className="second">
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                    </div>
                </div>
            </div>
            <div className="props">
            <CartProps titles="Universal mineral face lotion SPF55" texts="Size: 1.7 fl oz" subtitle="One Time Purchase" link="Remove" tsena="$28.00" number="1" tsenas="$28.00"/>
            <CartProps titles="Deepwater Dew Body Serum" texts="Size: 3.4 fl oz" subtitle="One Time Purchase" link="Remove" tsena="$28.00" number="1" tsenas="$28.00"/>
            <CartProps titles="Isle Glow Face Lotion SPF45" texts="Size: 1.5 fl oz" subtitle="One Time Purchase" link="Remove" tsena="$28.00" number="2" tsenas="$56.00"/>
            <CartProps titles="Isle Lip Balm SPF30" texts="Size: 0.5 fl oz" subtitle="(100% OFF)" link="Remove" tsena="$0.00" number="1" tsenas="$0.00"/>
        </div>

        <div className="form">
            <div className="box">
                <h6>Order Notes</h6>
                <input type="text" placeholder='Type Message...'/>

            </div>
            <div className="many">
                <div className="one">
                    <p>Subtotal</p>
                    <p>$112.00</p>
                </div>
                <h5>Shipping and tax calculated at checkout.</h5>
                <div className="two">
                    <h4>Auto</h4>
                    <h4>-$10.00</h4>
                </div>
                <div className="three">
                    <h3>Total</h3>
                    <h3>$102.00</h3>
                </div>
                <button>Secure Checkout</button>
            </div>
        </div>
        </div>
    )
}

export default BannerCart