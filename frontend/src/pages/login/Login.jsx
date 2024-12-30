import React, { useState, useEffect, useContext } from 'react';
import style from '../Login/Login.module.css';  
import { globalvar } from '../../GlobalContext/GlobalContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
  let { loginPanel, setLoginPanel, signupPanel, setSignuPanel, getUserDataFromToken, user, setUser } = useContext(globalvar);
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.email && credentials.password) {
      let { data } = await axios.post(`http://localhost:8080/auth/login?email=${credentials.email}&password=${credentials.password}`, credentials);
      if (data.token) {
        localStorage.setItem("token", data.token);
        getUserDataFromToken(data.token);
        toast.success("Login successful");
        console.log("Login successful");
        setTimeout(() => {
          setLoginPanel(false);
        }, 1500);
      } else {
        toast.error("Something went wrong");
      }

    } else {
      toast.error('Please fill in both fields');
    }
  };

  return (
    <div className={style['login']} onClick={(e) => { e.stopPropagation(); setLoginPanel(false); }}>
      <div className={style['container']}>
        <h2 className={style['login-title']}>Login</h2>
        <form onSubmit={handleSubmit} onClick={(e) => { e.stopPropagation(); setLoginPanel(true); }}>

          <div className={style['username']}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={style['password']}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className={style['checkbox']}>
            <input
              type="checkbox"
              checked={rememberMe}
              onClick={() => { setRememberMe(!rememberMe); }}
            />
            <label>Remember me</label>
          </div>

          <button type="submit">Login</button>

          <div className={style['register-link']}>
            <p onClick={(e) => { e.stopPropagation(); setLoginPanel(!loginPanel); setSignuPanel(!signupPanel); }}>Don't have an account? SignUp</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
