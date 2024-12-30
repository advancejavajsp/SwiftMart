import React, { useState, useEffect, useRef, useContext } from 'react';
import styles from './addCategory.module.css';
import { globalvar } from '../../../GlobalContext/GlobalContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddCategory = () => {
  const { setAddCategoryPanel ,refreshId, setRefreshId} = useContext(globalvar);

  const [addCategory, setAddCategory] = useState({
    name: "",
    description: "",
    image: "",
  });

  const { name, description, image } = addCategory;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddCategory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  let handleCancel=(e)=>{
    e.stopPropagation();
    setAddCategoryPanel(false)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && description) {
      try {
        const response = await axios.post(`http://localhost:8080/open/category`, addCategory);
        if (response.status === 201) {
          toast.success(`${name} added successfully!`);
          setRefreshId(refreshId + 1)
          setTimeout(() => {
            setAddCategoryPanel(false);
          }, 1500);
        }
      } catch (error) {
        toast.error("Something went wrong!");
      }
    } else {
      toast.error("Please fill in all required fields.");
    }
  };


  return (
    <div className={styles["popupOverlay"]} onClick={handleCancel}>
      <div  className={styles["popupContent"]} onClick={(e)=>{e.stopPropagation(), setAddCategoryPanel(true)}}>
        <h2>Add Category</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter category name"
            value={name}
            onChange={handleChange}
            required
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Enter category description"
            value={description}
            onChange={handleChange}
            required
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            placeholder="Enter image URL"
            value={image}
            onChange={handleChange}
          />
          <div className={styles["btn"]}>
            <button type="submit">Add</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
