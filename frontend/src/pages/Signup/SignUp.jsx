import React, { useContext, useState } from 'react';
import style from '../Signup/SignUp.module.css';
<<<<<<< HEAD
import { globalvar } from '../../GlobalContext/GlobalContext';
=======
>>>>>>> c4153b1224ed4df85c7ffb962952d25719739697

const SignUp = () => {
  let { signupPanel, setSignuPanel } = useContext(globalvar);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    image: '',
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
<<<<<<< HEAD
    if (formData.username && formData.email && formData.password && formData.contact && formData.address && formData.role) {
      sessionStorage.setItem('userData', JSON.stringify(formData));
      alert('SignUp successful!');
=======
    if (formData.name && formData.email && formData.password && formData.phone && formData.role) {
  
      let response= await axios.post("http://localhost:8080/auth/signup",formData)
      console.log(response.data)
      
>>>>>>> c4153b1224ed4df85c7ffb962952d25719739697
      setFormData({
        name: '',
        email: '',
        password: '',
        phone: '',
        image: '',
        role: ''
      }
    )

    ;
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
<<<<<<< HEAD
              name="username" 
              value={formData.username}
              onChange={handleInputChange} 
=======
              name='name'
              value={formData.name}
              onChange={handleInputChange}
>>>>>>> c4153b1224ed4df85c7ffb962952d25719739697
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              // value={formData.email}
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
              // value={formData.password}
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
<<<<<<< HEAD
            <select
              className={style['role']}
              name="role"
              value={formData.role}
=======
            <select className={style["role"]}
              // value={formData.role}
>>>>>>> c4153b1224ed4df85c7ffb962952d25719739697
              onChange={handleInputChange}
              required
              name='role'
            >
              <option value="" disabled hidden>Select role</option>
              <option value="USER">USER</option>
              {/* <option value="delivery">Delivery Person</option> */}
            </select>
          </div>

<<<<<<< HEAD
          <button type="submit" className={style['signButton']}>
            Sign Up
          </button>
=======
        <div className={style['signButton']}>
        <button type="submit" >Sign Up</button>
        </div>
>>>>>>> c4153b1224ed4df85c7ffb962952d25719739697
        </form>
      </fieldset>
    </div>
  );
};

export default SignUp;
