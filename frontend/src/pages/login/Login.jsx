
import React, { useState, useEffect } from 'react';
import style from '../Login/Login.module.css';  // Ensure you have the correct path for the CSS
import axios from 'axios';
import toast from 'react-hot-toast';


const Login = () => {
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

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    

    
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
    <div className={style.login}>
      <fieldset>
        <legend>Login</legend>
        <form onSubmit={handleSubmit}>
          <div>
            <label>name</label>
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

          <div>
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

          <div className='register-link'>
            <p>Don't have an account? <a href="#">SignUp</a></p>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Login;
