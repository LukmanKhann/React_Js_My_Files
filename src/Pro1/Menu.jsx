import style from "./garage.module.css"
import { Link } from "react-router-dom"
const Menu = () => {
  return (
    <div id={style.menuBlock}>
        <ul>
            <li> <Link to={"/home"} >Home</Link> </li>
            <li> <Link to={"/contact"} >Contact</Link> </li>
            <li> <Link to={"/about"} >About Us</Link> </li>
        </ul>

      
    </div>
  )
}

export default Menu