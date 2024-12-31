import React, { useState,useContext } from 'react'
import style from './addProduct.module.css'
import { globalvar } from '../../../GlobalContext/GlobalContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddProduct = () => {

let {setAddProductPanel, allCategory , setLoaderPanel} = useContext(globalvar);
  let [addProduct, setAddProduct] =  useState({
    
    name: "",
    price: "",
    quantityAvailable: "",
    imageUrl:"",
    description: "",
   })
  let [categoryId, setCategoryId]=useState("")

   let {name, category, price, quantityAvailable, description, imageUrl} = addProduct

   let handleData = (e)=>{
    setAddProduct({...addProduct, [e.target.name]: e.target.value})
   }
   let handleCategoryID = (e)=>{
    setCategoryId(e.target.value)
   }

   let handSubmit =async (e)=>{
    e.stopPropagation(),
    e.preventDefault();
      if(name && quantityAvailable&& price&& description){
        console.log(categoryId)
        setLoaderPanel(true);
        // console.log(addProduct)
        let response = await axios.post(`http://localhost:8080/open/products/${categoryId}`,addProduct);
        setLoaderPanel(false);
        if (response.status == 201) {
          toast.success(`${name} is added succesfully`);
          setTimeout(()=>{
            setAddProductPanel(false)
          },1500)
        }else{
          toast.error("Something Went Wrong")
        }
      }
   }
  return (
    <div className={style["addProduct"]} onClick={(e) => {e.stopPropagation(),setAddProductPanel(false)}}>
        <div className={style["addProduct1"]}  onClick={(e) => {e.stopPropagation(),setAddProductPanel(true)}}>
        <form action="" onSubmit={handSubmit}>
        <h2>Add Product</h2>
          <div className={style["productDetails"]}>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' name='name' onChange={handleData} />
          </div>
          <div className={style["productDetails"]}>
          <label for="myDropdown">Choose an option:</label>
            <select id="myDropdown" name="category" onChange={handleCategoryID} >
            {/* <option value="option1">Category 1</option>
            <option value="option2">Category 2</option>*/}
            <option value="option3" disabled selected>Select Category</option>  
            {allCategory.map((ele, i)=>  <option name="category" value={ele.categoryId}>{ele.name}</option>)}
            </select>
              
            
          </div>
          <div className={style["productDetails"]} >
            <label htmlFor="">Price</label>
            <input type="text" placeholder='Enter Price' name='price' onChange={handleData} />
          </div>
          <div className={style["productDetails"]}>
            <label htmlFor="">quantityAvailable</label>
            <input type="text" placeholder='Enter quantityAvailable' name='quantityAvailable' onChange={handleData} />
          </div>
          <div className={style["productDetails"]}>
            <label htmlFor="">Enter Image url</label>
            <input type="text" placeholder='Enter image url ' name='imageUrl' onChange={handleData}/>
          </div>
          <div className={style["productDetails"]}>
            <label htmlFor="">Description</label>
            <textarea type="text" placeholder='Enter Description' name='description' onChange={handleData}></textarea>
          </div>
          <div className={style["productDetails"]}>
            <div className={style["btn"]}><button >Submit</button></div>
            
          </div>
        </form>
        </div>
    </div>
  )
}

export default AddProduct