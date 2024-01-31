
import { NavLink, useLocation } from 'react-router-dom'
import '../styles/header.css'
import img2 from "../images/logo.svg"
import dark from "../images/dark.svg"
function Header() {
  // const [nav, setNav] = useState(false)

  // window.addEventListener("scroll", () => {
  //   if (window.scrollY >= 100) {
  //     setNav(true)
  //   } else {
  //     setNav(false)
  //   }
  // })
  let location = useLocation()
  return (
    <div className='big_container'>
      <div className={location.pathname === "/" ? "wrapper" : "home" &&
        location.pathname === "/shop" ? "wrapper" : "home"}  >

          <div className="part_one ">
            <div className="menu">
              <select className={location.pathname === "/" ? "chose" : "befor"   && location.pathname === "/shop" ? "chose" : "befor"} id="">
                <option value="">
                  <NavLink >menu</NavLink>
                </option>
                <option value="/shop">
                  <NavLink to="/shop">Shop</NavLink>
                </option>
                <option value="/about">
                  <NavLink to='/about'>About</NavLink>

                </option>

              </select>
            </div>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink>Suncare 101</NavLink>
          </div>

          <NavLink to="/"><img src={location.pathname === "/" ? img2 : dark &&
            location.pathname === "/shop" ? img2 : dark} alt="" /></NavLink>

          <div className="part_one">
            <NavLink>Account</NavLink>
            <NavLink>Search</NavLink>
            <NavLink to="/cart">Cart (0)</NavLink>
          </div>
        </div>
      
    </div>
  )
}

export default Header