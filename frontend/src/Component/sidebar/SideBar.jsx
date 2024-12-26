import React from 'react'
import img1 from "../../asset/img11.webp"
import img2 from "../../asset/img12.webp"
import img3 from "../../asset/img3.webp"
import img4 from "../../asset/img4.webp"
import img5 from "../../asset/img5.webp"
import img6 from "../../asset/img6.webp"
import style from "../sidebar/sidebar.module.css"
import { Link } from "react-router-dom"


const SideBar = () => {
  return (
    <aside className={style["sidebar"]}>
      <nav className={style["sidebar-nav"]}>
        <ul>
          <li> <Link to="/milk"><img src={img1} alt="Milk carton" /><p>Milk</p></Link></li>
          <li><Link to="/bread"><img src={img2} alt="Bread" /><p>Bread & Pav</p></Link></li>
          <li><Link to="/egg"><img src={img3} alt="Eggs" /><p>Egg</p></Link></li>
          <li><Link to="/flakes"><img src={img4} alt="Cereal flakes" /><p>Flakes & Kids Cereals</p></Link></li>
          <li><Link to="/muesli"><img src={img5} alt="Muesli and Granola" /><p>Muesli & Granola</p></Link></li>
          <li><Link to="/oats"><img src={img6} alt="Oats pack" /><p>Oats</p></Link></li>
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar
