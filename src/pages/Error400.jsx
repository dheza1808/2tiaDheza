import React from "react";
import "./NotFound.css";

const Error400 = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-message">
        <h1>400</h1>
        <p>Bad Request</p>
        <a href="/" className="notfound-btn">
          Go to homepage
        </a>
      </div>
    </div>
  );
};

export default Error400;
