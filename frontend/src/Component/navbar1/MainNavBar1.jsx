import React from 'react'
import style from "../navbar1/MainNavbar1.module.css"
import { Link } from "react-router-dom"


const MainNavBar1 = () => {
    return (
        <nav className={style['navbar1']}>
            <div className={style["nav-links"]}>
                <Link to="">Vegetables & Fruits</Link>
                <Link to="">Dairy & Breakfast</Link>
                <Link to="">Munchies</Link>
                <Link to="">Cold Drinks & Juices</Link>
                <Link to="">Instant & Frozen Food</Link>
                <Link to="">Tea, Coffee & Health Drinks</Link>
                <Link to="">Bakery & Biscuits</Link>

                <select className={style['drop-down']}>
                    <option value="" className="more" disabled hidden>More</option>
                    <option>
                        <Link to="">Sweet tooth</Link>
                    </option>
                    <option>
                        <Link to="">Atta, Rice & Dal</Link>
                    </option>
                    <option>
                        <Link to="">Dry Fruit, Masala & Oil</Link>
                    </option>
                    <option>
                        <Link to="">Sauces & Spread</Link>
                    </option>
                    <option>
                        <Link to="">Chicken, Meat & Fish</Link>
                    </option>
                    <option>
                        <Link to="">Paan Corne</Link>
                    </option>
                    <option>
                        <Link to="">Organic & Premium</Link>
                    </option>
                    <option>
                        <Link to="">Baby Care</Link>
                    </option>
                    <option>
                        <Link to="">Pharma & Wellness</Link>
                    </option>
                    <option>
                        <Link to="">Cleaning Essentials</Link>
                    </option>
                    <option>
                        <Link to="">Home & Office</Link>
                    </option>
                    <option>
                        <Link to="">Personal Care</Link>
                    </option>
                    <option>
                        <Link to="">Beauty & Cosmetics</Link>
                    </option>
                    <option>
                        <Link to="">Magazines</Link>
                    </option>
                    <option>
                        <Link to="">Electronics & Electrical</Link>
                    </option>
                </select>

            </div>
        </nav>
    )
}

export default MainNavBar1
