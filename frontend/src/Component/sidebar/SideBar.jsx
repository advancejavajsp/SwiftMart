import React from 'react'
// import img1 from "../asset/img1.webp"
// import img2 from "../asset/img2.webp"
// import img3 from "../asset/img3.webp"
// import img4 from "../asset/img4.webp"
// import img5 from "../asset/img5.webp"
// import img6 from "../asset/img6.webp"
import style from "../sidebar/sidebar.module.css"
import { Link } from "react-router-dom"


const SideBar = () => {
  return (
    <aside className={style["sidebar"]}>
      <nav className={style["sidebar-nav"]}>
        <ul>
          <li><img src='' alt="Milk carton" /><Link to="/milk">Milk</Link></li>
          <li><img src='' alt="Bread" /><Link to="/bread">Bread & Pav</Link></li>
          <li><img src='' alt="Eggs" /><Link to="/egg">Egg</Link></li>
          <li><img src='' alt="Cereal flakes" /><Link to="/flakes">Flakes & Kids Cereals</Link></li>
          <li><img src='' alt="Muesli and Granola" /><Link to="/muesli">Muesli & Granola</Link></li>
          <li><img src='' alt="Oats pack" /><Link to="/oats">Oats</Link></li>
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar
