import React, { useState, useEffect, useContext } from 'react';
import style from '../Login/Login.module.css';  
import { globalvar } from '../../GlobalContext/GlobalContext';
import { Link } from 'react-router-dom';

const Login = () => {
  let {loginPanel,setLoginPanel,signupPanel,setSignuPanel}=useContext(globalvar)
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


  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className={style['login']} onClick={()=>{}}>
      <fieldset>
        <legend>Login</legend>
        <form onSubmit={handleSubmit}>

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
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleCheckboxChange}
              />
              Remember me
            </label>
          </div>

          <button type="submit">Login</button>

          <div className={style['register-link']}>
          <p onClick={()=>{setLoginPanel( !loginPanel),setSignuPanel(!signupPanel)}}> Don't have an account? SignUp </p>

          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Login;