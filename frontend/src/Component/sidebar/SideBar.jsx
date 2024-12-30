import React, { useEffect,useState,useContext} from 'react'
import img1 from "../../asset/img11.webp"
import img2 from "../../asset/img12.webp"
import img3 from "../../asset/img3.webp"
import img4 from "../../asset/img4.webp"
import img5 from "../../asset/img5.webp"
import img6 from "../../asset/img6.webp"
import style from "../sidebar/sidebar.module.css"
import { Link } from "react-router-dom"
import { globalvar } from '../../GlobalContext/GlobalContext'
import { MdDelete } from "react-icons/md";
import axios from 'axios'
import toast from 'react-hot-toast'


const SideBar = () => {
    let {allCategory,categoryId, setCategoryId,setAllCategory} = useContext(globalvar);
   

    const handleDelete = async (categ) => {
        try {
          const response = await axios.delete(`http://localhost:8080/open/category/${categ}`);
          toast.success("Category deleted successfully!");
          setCategoryId(allCategory[0].categoryId)
        } 
        catch (error) {
          toast.error("An error occurred categoryDelete. Please try again later.");
        }
    }
    
   

  return (
    <aside className={style["sidebar"]}>
      <nav className={style["sidebar-nav"]}>
        <ul>
          {allCategory.map((ele,i)=>{
            return <li onClick={(e)=>{e.stopPropagation(),setCategoryId(ele.categoryId)}}> <img src={img1} alt="Milk carton" /><p>{ele?.name}</p><MdDelete className={style['dustbin']} onClick={()=>{handleDelete(ele?.categoryId)}}/></li>
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar
