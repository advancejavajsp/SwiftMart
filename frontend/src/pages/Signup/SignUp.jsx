import React, { useState } from 'react';
import style from '../Signup/SignUp.module.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    contact: '',
    address: '',
    role: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.email && formData.password && formData.contact && formData.address && formData.role) {

      sessionStorage.setItem('userData', JSON.stringify(formData));
      alert('SignUp successful!');
      setFormData({
        username: '',
        email: '',
        password: '',
        contact: '',
        address: '',
        role: ''
      });
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className={style.signup}>
      <fieldset>
        <legend>SignUp</legend>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input className={style["username"]}
              type="text"
              value={formData.username}
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
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              placeholder="Enter your contact number"
              required
            />
          </div>

          <div>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
              required
            />
          </div>

          <div className='role-dropdown'>
            <label>Role</label>
            <select className="role"
              value={formData.role}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>Select role</option>
              <option value="customer">Customer</option>
              <option value="delivery">Delivery Person</option>
            </select>
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </fieldset>
    </div>
  );
};

export default SignUp;
