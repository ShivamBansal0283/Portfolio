// import React from "react";
// import { motion } from "framer-motion";
// import "../styles/styles.css";

// const Navbar = () => {
//   return (
//     <motion.nav
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <h1>Shivam Bansal</h1>
//       <ul>
//         {["Home", "About", "Projects", "Resume", "Contact"].map((item) => (
//           <motion.li key={item} whileHover={{ scale: 1.1, color: "#ffc300" }}>
//             {item}
//           </motion.li>
//         ))}
//       </ul>
//     </motion.nav>
//   );
// };

// export default Navbar;

import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Shivam Bansal</h1>
      <ul>
        {["Home", "About", "Projects", "Resume", "Contact"].map((item) => (
          <motion.li key={item} whileHover={{ scale: 1.1, color: "#ffc300" }}>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;