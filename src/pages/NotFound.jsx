import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-message">
        <h1>400</h1>
        <p>Page not found!</p>
        <a href="/" className="notfound-btn">
          Go to homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
