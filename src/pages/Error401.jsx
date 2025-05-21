import React from "react";
import "./NotFound.css";

const Error401 = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-message">
        <h1>401</h1>
        <p>Unauthorized</p>
        <a href="/" className="notfound-btn">
          Go to homepage
        </a>
      </div>
    </div>
  );
};

export default Error401;
