import React from 'react';
import './SomethingWentWrongPage.css'; 

const SomethingWentWrongPage = () => {
  return (
    <div className="something-went-wrong-container">
      <div className="error-message">
        <h1 className="error-title">Something Went Wrong</h1>
        <p className="error-description">
          <span className="emoji">😞</span> We're sorry, but there was an issue processing your request. Please try again later.
        </p>
       
        <a href="/" className="home-button">Return to Homepage</a>
      </div>
    </div>
  );
};

export default SomethingWentWrongPage;
