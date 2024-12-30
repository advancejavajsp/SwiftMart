import React from 'react'
import style from "./updateProduct.module.css"
import { useState } from 'react'

const UpdateProduct = () => {
  

   let {updateProduct, setUpdateProduct} =  useState({
    updateProductId: "",
    updateName: "",
    updateCategory: "",
    updatePrice: "",
    updateQuantity: "",
    updateImageUrl:"",
    updateDescription: "",
   })
   

   let handleData = (e)=>{
    setUpdateProduct({...updateProduct, [e.target.name]:e.target.value})
   }

  return (
    <div className={style["addProduct"]}  onClick={(e) => {e.stopPropagation(),setUpdateProduct(false)}}>
      
    <div className={style["addProduct1"]}>
    <form action="">
    <h1>Update Product</h1>
      <div className={style["productDetails"]}>
        <label htmlFor="">Id</label>
        <input type="text" name='updateProductId' placeholder='ProductId'  readOnly  />
      </div>
      <div className={style["productDetails"]}>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='Enter Name'name='updateName'onChange={handleData} />
      </div>
      <div className={style["productDetails"]}>
      <label for="myDropdown">Choose an option:</label>
        <select id="myDropdown" name="updateCategory" onChange={handleData}>
        <option value="option1">Category 1</option>
        <option value="option2">Category 2</option>
        <option value="option3" selected>Category 3</option> 
        </select>
      </div>
      <div className={style["productDetails"]}>
        <label htmlFor="">Price</label>
        <input type="text" name='updatePrice' placeholder='Enter Price'onChange={handleData} />
      </div>
      <div className={style["productDetails"]}>
        <label htmlFor="">Quantity</label>
        <input type="text" name='updateQuantity' placeholder='Enter Quantity'onChange={handleData} />
      </div>
      <div className={style["productDetails"]}>
        <label htmlFor="">Enter Image url</label>
        <input type="text" name='updateImageUrl' placeholder='Enter image url ' onChange={handleData}/>
      </div>
      <div className={style["productDetails"]}>
        <label htmlFor="">Description</label>
        <textarea type="text" name='updateDescription' placeholder='Enter Description' onChange={handleData} />

      </div>
      <div className={style["productDetails"]}>
            <div className={style["btn"]}><button>Submit</button></div>
      </div>
    </form>
    </div>
</div>
  )
}

export default UpdateProduct