import React, { useState } from 'react'
import style from './addProduct.module.css'
import axios from 'axios'

const AddProduct = () => {


  let {addProduct, setAddProduct} =  useState({
    name: "",
    categoryId: "",
    price: "",
    quantityAvailable: "",
    imageUrl:"",
    description: "",

   })

   let handleData = async(e)=>{
e.preventDefault();
    let response = await axios.post("http://localhost:8080/products",addProduct)
    console.log(response.data)

    setAddProduct({...addProduct, [e.target.name]: e.target.value})
   }
  return (
    <div className={style["addProduct"]}>
      
        <div className={style["addProduct1"]}>
        <form action="">
        <h1>Add Product</h1>
          {/* <div className={style["productDetails"]}>
            <label htmlFor="">Id</label>
            <input type="text" name='productId' placeholder='ProductId'  />
          </div> */}
          <div className={style["productDetails"]}>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' name='name' onChange={handleData} />
          </div>
          <div className={style["productDetails"]}>
          <label for="myDropdown">Choose an option:</label>
            <select id="myDropdown" name="categoryId" onChange={handleData} >
            <option value="option1">categoryId 1</option>
            <option value="option2">categoryId 2</option>
            <option value="option3" >categoryId 3</option> 
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