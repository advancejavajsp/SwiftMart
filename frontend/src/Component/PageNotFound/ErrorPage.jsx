import React from 'react';
import './ErrorPage.css'; // Import the CSS file

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-message">
        <h1 className="error-code">404</h1>
        <p className="error-text">Oops! We couldn't find the page you're looking for.</p>
        <p className="error-description">
          <span className="emoji">😞</span> The page might have been removed or the URL might be incorrect. Please check the URL or go back to the homepage.
        </p>
        
        <a href="/" className="error-link">Return to Homepage</a>
      </div>
    </div>
  );
};

export default ErrorPage;
