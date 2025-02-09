import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://github.com/ShivamBansal0283" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/shivam-bansal-b2aba924b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        <a href="mailto:shivambansal4909@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon" />
        </a>
      </div>
      <p className="copyright">&copy; {new Date().getFullYear()} Shivam Bansal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;