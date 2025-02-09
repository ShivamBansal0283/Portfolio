// import React from "react";
// import { motion } from "framer-motion";
// import "../styles/styles.css";

// const Footer = () => {
//   return (
//     <motion.footer
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 1 }}
//     >
//       © 2025 Shivam Bansal. All rights reserved. Built with React ❤️
//     </motion.footer>
//   );
// };

// export default Footer;

import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      © 2025 Shivam Bansal. All rights reserved. Built with React ❤️
    </motion.footer>
  );
};

export default Footer;