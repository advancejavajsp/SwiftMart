import React, { useState, useEffect, useContext } from 'react';
import style from '../Login/Login.module.css';  // Ensure you have the correct path for the CSS
import { globalvar } from '../../GlobalContext/GlobalContext';
import { Link } from 'react-router-dom';

const Login = () => {
  let {loginPanel,setLoginPanel,signupPanel,setSignuPanel}=useContext(globalvar)
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Load saved credentials from sessionStorage if available
    const storedUserData = JSON.parse(sessionStorage.getItem('userData'));
    if (storedUserData) {
      setCredentials({
        username: storedUserData.username || '',
        password: storedUserData.password || ''
      });
    }
  }, []);

  // Handle input change for username and password
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
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if both username and password are filled out
    if (credentials.username && credentials.password) {
      const storedData = JSON.parse(sessionStorage.getItem('userData'));

      // Check if the entered username and password match the stored data
      if (storedData && storedData.username === credentials.username && storedData.password === credentials.password) {
        alert('Login successful!');

        // Optionally store credentials in sessionStorage if 'remember me' is checked
        if (rememberMe) {
          sessionStorage.setItem('username', credentials.username);
          sessionStorage.setItem('password', credentials.password);
          sessionStorage.setItem('rememberMe', 'true');
        } else {
          // If 'remember me' is unchecked, remove the credentials from sessionStorage
          sessionStorage.removeItem('username');
          sessionStorage.removeItem('password');
          sessionStorage.removeItem('rememberMe');
        }
      } else {
        alert('Incorrect username or password');
      }
    } else {
      alert('Please enter both username and password');
    }
  };
  

  return (
    <div className={style.login}>
      <fieldset>
        <legend>Login</legend>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
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
            <p onClick={()=>{setLoginPanel( loginPanel=false),setSignuPanel(signupPanel =true)}}> Don't have an account? SignUp </p>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Login;
