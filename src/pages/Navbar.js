import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="text-2xl font-bold">
        <Link to="/">Shivam Bansal</Link>
      </h1>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/journey">Memories</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
// import React from "react";
// import "../styles/navbar.css";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1 className="text-2xl font-bold">
//         <Link to="/">Shivam Bansal</Link>
//       </h1>
//       <ul>
//         <li><a href="#about">About</a></li>
//         <li><Link to="/journey">Memories</Link></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
