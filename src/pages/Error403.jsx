import React from "react";
import "./NotFound.css";

const Error403 = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-message">
        <h1>403</h1>
        <p>Forbidden</p>
        <a href="/" className="notfound-btn">
          Go to homepage
        </a>
      </div>
    </div>
  );
};

export default Error403;
