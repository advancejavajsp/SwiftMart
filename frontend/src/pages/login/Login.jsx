import React, { useState, useEffect, useContext } from 'react';
import style from '../Login/Login.module.css';  
import { globalvar } from '../../GlobalContext/GlobalContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
  let {loginPanel,setLoginPanel,signupPanel,setSignuPanel,getUserDataFromToken}=useContext(globalvar)
  const [credentials, setCredentials] = useState({
    name: '',
    password: ''
    
  });


  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Load saved credentials from sessionStorage if available
    const storedUserData = JSON.parse(sessionStorage.getItem('userData'));
    if (storedUserData) {
      setCredentials({
        name: storedUserData.name || '',
        password: storedUserData.password || ''
      });
    }
  }, []);

  // Handle input change for name and password
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle the 'Remember Me' checkbox change
  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    
    if (credentials.email && credentials.password) {
      let {data} =await axios.post(`http://localhost:8080/auth/login?email=${credentials.email}&password=${credentials.password}`,credentials)
      console.log("data :",data);
      if (data.token) {
        getUserDataFromToken(data.token);
        toast.success("Login succesful");
        console.log("Login succesful");
        localStorage.setItem("token", data.token)
       setTimeout(()=>{
        setLoginPanel(false)
       },1500)
      }else{
        toast.error("Something went wrong")
      }
         
    } else {
      toast.error('error');
    }


    // Check if both name and password are filled out
    if (credentials.name && credentials.password) {

        let respone = await axios.post(`http://localhost:8080/auth/login?email=${credentials.name}&password=${credentials.password}`)
      localStorage.setItem('token',respone.data.token)
        console.log(respone.data)
        toast.success('Login successful!');
    } else {
      toast.error('Please enter both name and password');
    }
  };

  return (
    <div className={style['login']} onClick={(e)=>{e.stopPropagation(), setLoginPanel(false)}}>
      <fieldset>
        <legend>Login</legend>
        <form onSubmit={handleSubmit} onClick={(e)=>{e.stopPropagation(), setLoginPanel(true)}}>

          <div className={style['username']}>
            <label>Email</label>
            <input
              type="text"
              name="name"
              value={credentials.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
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
                onClick={()=>{setRememberMe(!rememberMe)}}
              />
            <label>Remember me</label>
          </div>

          <button type="submit">Login</button>

          <div className='register-link'>
            <p>Don't have an account? <a href="#">SignUp</a></p>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Login;
