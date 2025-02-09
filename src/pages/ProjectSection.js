import React, { useState } from "react";
import "../styles/projectsection.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa"; // Import Icons


import project1 from "../assets/images/project1.jpeg";
import project2 from "../assets/images/project2.jpeg";
import project3 from "../assets/images/project3.png";

const completedProjects = [
    {
        title: "Academic Project Tracking System",
        description: "A platform for professors to track projects, students to form teams, and admins to manage project progress.",
        details: "This project uses MySql to extract the data from",
        techStack: ["React", "Node", "MySql"],
        image: project1,
        github: "https://github.com/ShivamBansal0283",
        demo: "https://github.com/ShivamBansal0283"
    },
    {
        title: "Secure File Transfer",
        description: "Encrypting data inside audio signals for secure transfers.",
        details: "This project applies steganography techniques to securely transmit files hidden within audio signals.",
        techStack: ["Python", "Steganography", "Information Security","FTP"],
        image: project2,
        github: "https://github.com/ShivamBansal0283",
        demo: "https://github.com/ShivamBansal0283"
    },
    {
        title: "Multi-Protocol Network",
        description: "Configured multiple network protocols including RIP, OSPF, NAT, DHCP, NTP, and EIGRP. ",
        details: "Addressed key functionalities like IP addressing (Class A, B, C, and classless), email configuration using POP and IMAP protocols, and FTP server setup",
        techStack: ["Cisco Packet Tracer", "Client-Server"],
        image: project3,
        github: "https://github.com/ShivamBansal0283",
        demo: "https://github.com/ShivamBansal0283"
    }
];

const ongoingProjects = [
    {
        title: "Smart Parking System",
        description: "An Andorid Studio project which helps users to locate vacant spots,download reciepts,pay parking pill,etc",
        progress: 65,
        details: "This is build is bulit in java and groovy dsl also using the APIs of Google Maps & UPI"
    },
    {
        title: "Hate Speech Detection",
        description: "This is a Data Mining project which uses ML to detect and report comments/chats that can be harmful,toxic,obscene,threating,etc",
        progress: 40,
        details: "This is being tried to be released as an API and also being tried to be implemented on Rapid Minor or Talend"
    }
];

function ProjectsSection() {
    const [expandedProject, setExpandedProject] = useState(null);

    const toggleExpand = (index) => {
        setExpandedProject(expandedProject === index ? null : index);
    };

    return (
        <div className="projects-container" >
            {/* Completed Projects Section */}
            <h2 className="projects-heading">My Works</h2>
            <div className="completed-projects-grid">
                {completedProjects.map((project, index) => (
                    <div key={index} className="flip-card">
                        <div className="flip-card-inner">
                            {/* Front Side - Full Image */}
                            <div className="flip-card-front">
                                <img src={project.image} alt={project.title} />
                            </div>
                            
                            {/* Back Side - Details */}
                            <div className="flip-card-back">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                {/* Tech Stack */}
                                <div className="tech-stack">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="tech-badge">
                                            <FaCode className="tech-icon1" /> {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Links */}
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaGithub /> GitHub
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-title">{project.title}</div>
                    </div>
                ))}
            </div>

            {/* Ongoing Projects Section */}
            <div className="ongoing-projects">
                <h2>🚀 Currently Working On</h2>
                <div className="ongoing-list">
                    {ongoingProjects.map((project, index) => (
                        <div
                            className={`ongoing-card ${expandedProject === index + completedProjects.length ? "expanded" : ""}`}
                            key={index}
                            onClick={() => toggleExpand(index + completedProjects.length)}
                        >
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="progress-bar">
                                <div
                                    className="progress"
                                    style={{ width: `${project.progress}%`, transition: "width 1.2s ease-in-out" }}
                                >
                                    {project.progress}%
                                </div>
                            </div>
                            {expandedProject === index + completedProjects.length && (
                                <div className="project-details">
                                    <p>{project.details}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectsSection;