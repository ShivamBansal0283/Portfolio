// import React from "react";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
// import "../styles/styles.css";

// const SocialLinks = () => {
//   return (
//     <motion.div
//       className="social-links"
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <motion.a whileHover={{ scale: 1.2 }} href="#"><FaGithub /></motion.a>
//       <motion.a whileHover={{ scale: 1.2 }} href="#"><FaLinkedin /></motion.a>
//       <motion.a whileHover={{ scale: 1.2 }} href="#"><FaEnvelope /></motion.a>
//       <motion.a whileHover={{ scale: 1.2 }} href="#"><FaTwitter /></motion.a>
//     </motion.div>
//   );
// };

// export default SocialLinks;

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import "../styles/styles.css";

const SocialLinks = () => {
  return (
    <motion.div
      className="social-links"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/ShivamBansal0283"><FaGithub /></motion.a>
      <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/shivam-bansal-b2aba924b/"><FaLinkedin /></motion.a>
      <motion.a whileHover={{ scale: 1.2 }} href="mailto:shivambansal4909@gmail.com"><FaEnvelope /></motion.a>
      <motion.a whileHover={{ scale: 1.2 }} href="#"><FaTwitter /></motion.a>
    </motion.div>
  );
};

export default SocialLinks;