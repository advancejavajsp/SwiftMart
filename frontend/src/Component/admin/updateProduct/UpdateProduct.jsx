import React, { useContext, useState } from 'react';
import style from "./updateProduct.module.css";
import { globalvar } from '../../../GlobalContext/GlobalContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateProduct = () => {
  const { productComp, allCategory ,setUpdateProductPopUp, refreshId, setRefreshId} = useContext(globalvar);

  const [updateProduct, setUpdateProduct] = useState({
    productId: productComp.productId,
    name: productComp.name,
    updateCategory: productComp.category, 
    price: productComp.price, 
    quantityAvailable: productComp.quantityAvailable, 
    imageUrl: productComp.imageUrl, 
    description: productComp.description, 
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setUpdateProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  let onClose=(e)=>{e?.stopPropagation(),setUpdateProductPopUp(false)}
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/open/products/${updateProduct.productId}`, updateProduct);
      if (response.status == 200) {
        toast.success("Updated succesfully");
        setRefreshId(refreshId+1)
        setTimeout(()=>{
          onClose()
        },1500)
      }
    } catch (error) {
    }
  };

  return (
    <div className={style["addProduct"]} onDoubleClick={onClose}>
      <div className={style["addProduct1"]} onClick={(e)=>{e.stopPropagation(), setUpdateProductPopUp(true)}}>
        <form onSubmit={handleSubmit}>
          <h1>Update Product</h1>
          <div className={style["productDetails"]}>
            <label htmlFor="">Id</label>
            <input type="text" name='productId' value={updateProduct.productId} readOnly />
          </div>
          <div className={style["productDetails"]}>
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={updateProduct.name} onChange={handleData} />
          </div>
          <div className={style["productDetails"]}>
            <label htmlFor="myDropdown">Choose a category:</label>
            <select id="myDropdown" name="category" value={updateProduct.category} onChange={handleData}>
              <option value="">Select Category</option>
              {allCategory.map((ele) => (
                <option key={ele.categoryId} value={ele.categoryId}>{ele.name}</option>
              ))}
            </select>
          </div>
          <div className={style["productDetails"]}>
            <label htmlFor="">Price</label>
            <input type="text" name='price' value={updateProduct.price} placeholder='Enter Price' onChange={handleData} />
          </div>
          <div className={style["productDetails"]}>
            <label htmlFor="">Quantity</label>
            <input type="text" name='quantityAvailable' value={updateProduct.quantityAvailable} placeholder='Enter Quantity' onChange={handleData} />
          </div>
          <div className={style["productDetails"]}>
            <label htmlFor="">Enter Image URL</label>
            <input type="text" name='imageUrl' value={updateProduct.imageUrl} placeholder='Enter image URL' onChange={handleData} />
          </div>
          <div className={style["productDetails"]}>
            <label htmlFor="">Description</label>
            <textarea name='description' value={updateProduct.description} placeholder='Enter Description' onChange={handleData} />
          </div>
          <div className={style["productDetails"]}>
            <div className={style["btn"]}>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;