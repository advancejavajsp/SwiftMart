import React from 'react';
import './SomethingWentWrongPage.css'; 
import { Link } from 'react-router-dom';

const SomethingWentWrongPage = () => {
  return (
    <div className="something-went-wrong-container">
      <div className="error-message">
        <h1 className="error-title">Something Went Wrong</h1>
        <p className="error-description">
          <span className="emoji">😞</span> We're sorry, but there was an issue processing your request. Please try again later.
        </p>
       
        <Link to="/"><button  className="home-button">Return to Homepage</button></Link>
      </div>
    </div>
  );
};

export default SomethingWentWrongPage;
