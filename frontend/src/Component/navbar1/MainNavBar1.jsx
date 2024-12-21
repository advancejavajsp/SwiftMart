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
                        {/* <Link to=""></Link>  */} Sweet tooth
                    </option>
                    <option>
                        {/* <Link to=""></Link> */} Atta, Rice & Dal
                    </option>
                    <option>
                        {/* <Link to=""></Link> */}Dry Fruit, Masala & Oil
                    </option>
                    <option>
                        {/* <Link to=""></Link> */}Sauces & Spread
                    </option>
                    <option>
                        {/* <Link to=""></Link> */} Chicken, Meat & Fish
                    </option>
                    <option>
                        {/* <Link to=""></Link> */} Paan Corne
                    </option>
                    <option>
                        {/* <Link to=""></Link> */} Organic & Premium
                    </option>
                    <option>
                        {/* <Link to=""></Link> */} Baby Care
                    </option>
                    <option>
                        {/* <Link to=""></Link> */} Pharma & Wellness
                    </option>
                    <option>
                        {/* <Link to=""></Link> */} Cleaning Essentials
                    </option>
                    <option>
                        {/* <Link to=""></Link> */} Home & Office
                    </option>
                    <option>
                        {/* <Link to=""></Link> */} Personal Care
                    </option>
                    <option>
                        {/* <Link to=""></Link> */} Beauty & Cosmetics
                    </option>
                    <option>
                        {/* <Link to=""></Link> */} Magazines
                    </option>
                    <option>
                        {/* <Link to=""></Link> */} Electronics & Electrical
                    </option>
                </select>

            </div>
        </nav>
    )
}

export default MainNavBar1
