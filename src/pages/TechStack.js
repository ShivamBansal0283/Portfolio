import React, { useEffect, useState } from "react";
import "../styles/techstack.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaJava, FaCuttlefish } from "react-icons/fa";
import { SiCplusplus, SiXampp, SiCisco } from "react-icons/si";

// Define the icons queue
const initialIcons = [
  { id: 1, icon: <FaHtml5 title="HTML5" /> },
  { id: 2, icon: <FaCss3Alt title="CSS3" /> },
  { id: 3, icon: <FaJs title="JavaScript" /> },
  { id: 4, icon: <FaReact title="React" /> },
  { id: 5, icon: <FaNodeJs title="Node.js" /> },
  { id: 6, icon: <FaPython title="Python" /> },
  { id: 7, icon: <FaDatabase title="SQL & Databases" /> },
  { id: 8, icon: <SiCplusplus title="C++" /> },
  { id: 9, icon: <FaJava title="Java" /> },
  { id: 10, icon: <FaCuttlefish title="C" /> },
  { id: 11, icon: <SiCisco title="Cisco Packet Tracer" /> },
  { id: 12, icon: <SiXampp title="XAMPP" /> }
];

const TechStack = () => {
  const [icons, setIcons] = useState(initialIcons);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move the first icon to the end (Circular Queue behavior)
      setIcons((prevIcons) => {
        const updatedIcons = [...prevIcons];
        const firstIcon = updatedIcons.shift(); // Remove first
        updatedIcons.push(firstIcon); // Add to end
        return updatedIcons;
      });
    }, 2000); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="tech-stack-section text-center py-10 overflow-hidden">
      <h2 className="text-3xl text-[#8b5a2b] font-bold mb-5">Tech Stack</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-5">
        Here are some of the technologies I work with:
      </p>
      <div className="tech-icons-wrapper overflow-hidden w-full mx-auto relative flex justify-center">
        <div className="tech-icons flex gap-6 w-max">
          {icons.map(({ id, icon }) => (
            <div key={id} className="tech-icon flex gap-6 text-4xl">{icon}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

