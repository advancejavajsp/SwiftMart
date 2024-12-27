import React, { useEffect,useState} from 'react'
import img1 from "../../asset/img11.webp"
import img2 from "../../asset/img12.webp"
import img3 from "../../asset/img3.webp"
import img4 from "../../asset/img4.webp"
import img5 from "../../asset/img5.webp"
import img6 from "../../asset/img6.webp"
import style from "../sidebar/sidebar.module.css"
import { Link } from "react-router-dom"


const SideBar = () => {
  const [data, setData] = useState([]);

  const fetchdata = async()=>{
    const response = await fetch(`http://localhost:8080/open/swiftmart/category/${categoryId}`);
    setData(response); 
  }
 
  useEffect(()=>{
    fetchdata()
  },[]);
console.log(data);


  return (
    <aside className={style["sidebar"]}>
      <nav className={style["sidebar-nav"]}>
        <ul>
        {data.map((response) => (
          <li>{response.title}</li>
        ))}
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar
