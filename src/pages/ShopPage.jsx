import React from 'react'
import "../styles/shop.css"
import ShopSwiper from '../component/ShopSwiper'

function ShopPage() {
  return (
    <div className='big_container'>
      <div className="shop_hero">
        <h1 className='shop_title'>Lorem ipsum</h1>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
      </div>

      <div className="container">
        <div className="texts">
          <p>Home / Best Seller</p>
          <h6>Sort by</h6>
        </div>

        <ShopSwiper/>

        <div className="opicaniy">
          <p>Showing 16 of 23</p>
          <button>load more</button>
        </div>

          
      </div>
    </div>
  )
}

export default ShopPage