import React from "react";

const Social = () => {
  return (
    <div className="home_social">
      <a
        href="https://www.instagram.com/suriya_837/"
        className="home_social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
       <i class="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/suriya-g-dev/"
        className="home_social-icon"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i class="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/Suriya23222/"
        className="home_social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
