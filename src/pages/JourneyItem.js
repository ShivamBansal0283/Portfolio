

// import React, { useState } from "react";
// import "../styles/journey.css";

// const JourneyItem = ({ data, position }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div 
//       className={`timeline-item ${position}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="timeline-title">{data.institution}</div>
//       <div className={`timeline-details ${isHovered ? "visible" : ""}`}>
//         <p className="timeline-description">{data.description}</p>
//       </div>
//     </div>
//   );
// };

// export default JourneyItem;


import React, { useState } from "react";
import { FaUniversity, FaStar } from "react-icons/fa"; // Import icons
import "../styles/journey.css";

const JourneyItem = ({ data, position }) => {
  const [isHovered, setIsHovered] = useState(false);
  const titleClass = data.isEvent ? "event-title" : "timeline-title"; // Assign class based on type
  const itemClass = data.isEvent ? "event-item" : "timeline-item"; // Unique class for dot styling

  

  return (
    <div 
      className={`timeline-item ${itemClass} ${position}`} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!data.isEvent && <div className="timeline-dot"></div>}

      <div className={`timeline-title ${titleClass}`}>
        {data.isEvent ? <FaStar className="event-icon" /> : <FaUniversity className="institution-icon" />}
        {data.isEvent ? data.eventTitle : data.institution}
      </div>
      
      <div 
        className={`timeline-details ${isHovered ? "visible" : ""}`} 
        style={data.image ? { backgroundImage: `url(${data.image})` } : {}}
      >
        <p className="timeline-year">{data.year}</p>
        {data.percentage && <p className="timeline-percentage">Percentage: {data.percentage}</p>}
        {data.cgpa && <p className="timeline-cgpa">CGPA: {data.cgpa}</p>}
        {data.description && <p className="timeline-description">{data.description}</p>}
      </div>
    </div>
  );
};

export default JourneyItem;