import React from "react";
import "../styles/journey.css";

const JourneyItem = ({ data, position }) => {
  return (
    <div className={`timeline-item ${position}`}>
      <div className="timeline-content">
        <h3 className="timeline-title">{data.title}</h3>
        <span className="timeline-year">{data.year}</span>
        <p className="timeline-institution">{data.institution}</p>
        <img src={data.image} alt={data.title} className="timeline-image" />
        <p className="timeline-description">{data.description}</p>
      </div>
    </div>
  );
};

export default JourneyItem;