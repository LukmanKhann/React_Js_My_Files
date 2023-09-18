import { Link } from "react-router-dom"
import style from "./findcoder.module.css"
import React from "react"
const Menu =()=>{
    return (
        <div id={style.menuBlock}>
            <ul>
                
                <li><Link to={"/comp1"}>Explore Work</Link></li>
                <li><Link to={"/comp2"}>Hire Talents</Link></li>
                <li><Link to={"/comp3"}>Dev board</Link></li>
                <li><Link to={"/comp4"}>Challanges</Link></li>
            </ul>

        </div>
    )
}
export default Menu