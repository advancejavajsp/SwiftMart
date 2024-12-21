import React, { useState, useEffect } from 'react';
import style from '../Login/Login.module.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const storedUserData = JSON.parse(sessionStorage.getItem('userData'));
    if (storedUserData) {
      setCredentials({
        username: storedUserData.username || '',
        password: storedUserData.password || ''
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credentials.username && credentials.password) {
      const storedData = JSON.parse(sessionStorage.getItem('userData'));

      if (storedData && storedData.username === credentials.username && storedData.password === credentials.password) {
        alert('Login successful!');

        if (rememberMe) {
          sessionStorage.setItem('username', credentials.username);
          sessionStorage.setItem('password', credentials.password);
          sessionStorage.setItem('rememberMe', 'true');
        } else {
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
    <div className={style['login']}>
      <fieldset>
        <legend>Login</legend>
        <form onSubmit={handleSubmit}>

          <div className={style['username']}>
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
            <p>Don't have an account? <a href="#">SignUp</a></p>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Login;
