// import React from "react";
// import { motion } from "framer-motion";
// import "../styles/styles.css";

// const Hero = () => {
//   return (
//     <motion.div
//       className="hero"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <h1>Hi, I'm <span className="highlight">Shivam Bansal</span></h1>
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 1 }}
//       >
//         Full-Stack Developer | Creative Technologist
//       </motion.p>
//       <div className="button-container">
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           className="primary-btn"
//         >
//           View My Work
//         </motion.button>
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           className="secondary-btn"
//         >
//           Download Resume
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// export default Hero;

import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";

const Hero = () => {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Hi, I'm <span className="highlight">Shivam Bansal</span></h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Full-Stack Developer | Creative Technologist
      </motion.p>
      <div className="button-container">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="primary-btn"
        >
          View My Work
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="secondary-btn"
        >
          Download Resume
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Hero;