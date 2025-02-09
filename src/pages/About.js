

// import React from "react";
// import "../styles/about.css";
// import thinkingGuy from "../assets/images/project1.jpeg"; // Replace with an actual animated image
// import { FaUserAstronaut } from "react-icons/fa";
// import TerminalBio from "./TerminalBio";

// const About = () => {
//     return (
//         <div className="about-me-wrapper">
//             <div className="about-me-container">
//             <FaUserAstronaut className="thinking-guy" />
//                 <p className="about-me-hint">🧐 Find out about me using the terminal below.</p>
//             </div>
//             <TerminalBio />
//         </div>
//     );
// };

// export default About;


import React from "react";
import "../styles/about.css";
import TerminalBio from "./TerminalBio";
import { FaUserSecret } from "react-icons/fa"; // Mysterious person (hacker-like)
import MatrixRain from "./MatrixRain";

const About = () => {
    return (
        <div className="about-me-wrapper">
            <div className="about-me-container">
                <FaUserSecret className="thinking-guy" />
                <p className="about-me-hint">🧐 Find out about me using the terminal below.</p>
            </div>
            <div className="hint">
                <p className="cmd-hint">Try: whoami, sudo, skills, interests, social-links, exit</p>
            </div>
            <TerminalBio />
            {/* <MatrixRain/> */}
        </div>
    );
};

export default About;