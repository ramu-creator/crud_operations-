import React from "react";

const ErrorPage = () => {
  return (
    <>
        <div id="background">
            <div className="error-container">
                <h1 className="error-code">404</h1>
                <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
                <a href="/" className="home-button">Go Home</a>
            </div>
        </div>
    </>
  );
};
export default ErrorPage;
