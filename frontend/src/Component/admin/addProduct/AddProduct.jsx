import React, { useState,useContext } from 'react'
import style from './addProduct.module.css'
import { globalvar } from '../../../GlobalContext/GlobalContext';

const AddProduct = () => {

let {setAddProductPanel} = useContext(globalvar);
  let {addProduct, setAddProduct} =  useState({
    productId: "",
    name: "",
    category: "",
    price: "",
    quantity: "",
    imageUrl:"",
    description: "",
   })

   let handleData = (e)=>{
    setAddProduct({...addProduct, [e.target.name]: e.target.value})
   }
  return (
    <div className={style["addProduct"]} onClick={(e) => {e.stopPropagation(),setAddProductPanel(false)}}>
        <div className={style["addProduct1"]}  onClick={(e) => {e.stopPropagation(),setAddProductPanel(true)}}>
        <form action="">
        <h2>Add Product</h2>
          <div className={style["productDetails"]}>
            <label htmlFor="">Id</label>
            <input type="text" name='productId' placeholder='ProductId'  />
          </div>
          <div className={style["productDetails"]}>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' name='name' onChange={handleData} />
          </div>
          <div className={style["productDetails"]}>
          <label for="myDropdown">Choose an option:</label>
            <select id="myDropdown" name="category" onChange={handleData} >
            <option value="option1">Category 1</option>
            <option value="option2">Category 2</option>
            <option value="option3">Category 3</option> 
            </select>
              
            
          </div>
          <div className={style["productDetails"]} >
            <label htmlFor="">Price</label>
            <input type="text" placeholder='Enter Price' name='price' onChange={handleData} />
          </div>
          <div className={style["productDetails"]}>
            <label htmlFor="">Quantity</label>
            <input type="text" placeholder='Enter Quantity' name='quantity' onChange={handleData} />
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