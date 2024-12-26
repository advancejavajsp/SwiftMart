import React, { useContext, useState } from 'react';
import style from '../Signup/SignUp.module.css';
import { globalvar } from '../../GlobalContext/GlobalContext';
import axios from 'axios';
import toast from 'react-hot-toast';


const SignUp = () => {
  let { signupPanel, setSignuPanel } = useContext(globalvar);
<<<<<<< HEAD
=======
  // let {photo,setImage}=useState();
>>>>>>> f1e02607d3bfcdd0205e5c2a5e9276424ca886b6
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
<<<<<<< HEAD
    image: '',
=======
 
>>>>>>> f1e02607d3bfcdd0205e5c2a5e9276424ca886b6
    phone: '',
    role: ''
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, 
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData)
    if (formData.name && formData.email && formData.password && formData.phone && formData.role) {
      console.log(e.name);
      let response =await axios.post("http://localhost:8080/auth/signup",formData)
      console.log(response.data)
<<<<<<< HEAD
      
+
      setFormData({
        // name: '',
        // email: '',
        // password: '',
        // phone: '',
        // image: '',
        // role: ''
      }
    )

    ;
=======
         
>>>>>>> f1e02607d3bfcdd0205e5c2a5e9276424ca886b6
    } else {
      toast.error('error');
    }


  };

  return (
    <div className={style['signup']}>
      <fieldset>
        <legend>SignUp</legend>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              className={style['username']}
              type="text"
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <label>Contact</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your contact number"
              required
            />
          </div>

          <div>
            <label>Image</label>
            <input
              type="file"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="Enter your address"
             
            />
          </div>

          <div className='role-dropdown'>
            <label>Role</label>
            <select className={style["role"]}
              value={formData.role}

              onChange={handleInputChange}
              required
              name='role'
            >
              <option value="" disabled hidden>Select role</option>
              <option value="USER">USER</option>
              {/* <option value="delivery">Delivery Person</option> */}
            </select>
          </div>

        
        <button type="submit" className={style["signupButton"]}>Sign Up</button>
     

        </form>
      </fieldset>
    </div>
  );
};

export default SignUp;
