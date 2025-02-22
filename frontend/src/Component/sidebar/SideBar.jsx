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
    let {user,allCategory,categoryId, setCategoryId,setAllCategory,refreshId,setRefreshId,loaderPanel,setLoaderPanel} = useContext(globalvar);
   

    const handleDelete = async (categ) => {
        try {
          setLoaderPanel(true)
          const response = await axios.delete(`http://localhost:8080/open/category/${categ}`);
          
          toast.success("Category deleted successfully!");
 
          setCategoryId(allCategory[0].categoryId);
          setRefreshId(refreshId -1)
          setLoaderPanel(false)
        } 
        catch (error) {
          toast.error("An error occurred categoryDelete. Please try again later.");
        }
    }
    
   

  return (
    <aside className={style["sidebar"]}>
      <nav className={style["sidebar-nav"]}>
        <ul>
        {allCategory.map((ele) => (
            user?.role === "ADMIN" ? (
              <li
                key={ele.categoryId}
                onClick={(e) => {
                  e.stopPropagation();
                  setCategoryId(ele.categoryId);
                }}
              >
                <img src={ele?.image} alt="Milk carton" />
                <p>{ele?.name}</p>
                <MdDelete
                  className={style['dustbin']}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(ele?.categoryId);
                  }}
                />
              </li>
            ) : (
              <li
                key={ele.categoryId}
                onClick={(e) => {
                  e.stopPropagation();
                  setCategoryId(ele.categoryId);
                }}
              >
                <img src={ele?.image} alt="Milk carton" />
                <p>{ele?.name}</p>
              </li>
            )
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar
