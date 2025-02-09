// import React from "react";
// import "../styles/journey.css";
// import JourneyItem from "./JourneyItem";

// const journeyData = [
//   {
//     title: "10th Grade",
//     year: "2019",
//     institution: "St. Peters's College,Agra",
//     // image: require("../assets/images/10th_dress.png"),
//     description: "Completed my 10th grade with amazing memories and experiences."
//   },
//   {
//     title: "12th Grade",
//     year: "2020",
//     institution: "John Milton Public School,Agra",
//     // image: require("../assets/images/12th_dress.png"),
//     description: "My high school journey with some of the best teachers and friends."
//   },
//   {
//     title: "College",
//     year: "2026 (Expected)",
//     institution: "Manipal Institute of Technology,Manipal",
//     // image: require("../assets/images/college_merch.png"),
//     description: "Currently pursuing my degree, exploring tech, and enjoying college life."
//   }
// ];

// const Journey = () => {
//   console.log("Journey Data:", journeyData); // ✅ Check if data exists

//   return (
//     <div className="journey-container">
//       <h2 className="journey-title">My Journey</h2>
//       <div className="timeline">
//         {journeyData.map((item, index) => {
//           console.log("Rendering JourneyItem with data:", item); // ✅ Debugging output
//           return <JourneyItem key={index} data={item} position={index % 2 === 0 ? "right" : "right"} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default Journey;







// import React from "react";
// import "../styles/journey.css";
// import JourneyItem from "./JourneyItem";

// import tenthDress from "../assets/images/mem_back/peters2.jpeg";
// import twelfthDress from "../assets/images/mem_back/milton1.png";
// import collegeMerch from "../assets/images/mem_back/mit4.jpeg";

// const journeyData = [
//   {
//     title: "10th Grade",
//     year: "2019",
//     institution: "St. Peters's College, Agra",
//     percentage: "95.4%",
//     image: tenthDress,
//     description: "Completed my 10th grade with amazing memories and experiences."
//   },
//   {
//     title: "12th Grade",
//     year: "2021",
//     institution: "John Milton Public School, Agra",
//     percentage: "90.5%",
//     image: twelfthDress,
//     description: "My high school journey with some of the best teachers and friends."
//   },
//   {
//     title: "College",
//     year: "2026 (Expected)",
//     institution: "Manipal Institute of Technology, Manipal",
//     cgpa: "8.96 CGPA",
//     image: collegeMerch,
//     description: "Currently pursuing my degree, exploring tech, and enjoying college life."
//   }
// ];

// const Journey = () => {
//   console.log("Journey Data:", journeyData); // ✅ Check if data exists

//   return (
//     <div className="journey-container">
//       <h2 className="journey-title">My Journey</h2>
//       <div className="timeline">
//         {journeyData.map((item, index) => {
//           console.log("Rendering JourneyItem with data:", item); // ✅ Debugging output
//           return <JourneyItem key={index} data={item} position={index % 2 === 0 ? "right" : "right"} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default Journey;






import React from "react";
import "../styles/journey.css";
import JourneyItem from "./JourneyItem";

import tenthDress from "../assets/images/mem_back/peters2.jpeg";
import twelfthDress from "../assets/images/mem_back/milton1.png";
import collegeMerch from "../assets/images/mem_back/mit4.jpeg";

const journeyData = [
  {
    title: "10th Grade",
    year: "2019",
    institution: "St. Peters's College, Agra",
    percentage: "95.4%",
    image: tenthDress,
    description: "Completed my 10th grade with amazing memories and experiences."
  },
  {
    title: "Member Of Parliament",
    year: "7th-9th Grade",
    eventTitle: "School Council-Member of Parliament",
    description: "Served as  Member of School Council,participating in student governance",
    isEvent: true,
    position: "right"
  },
  {
    title: "12th Grade",
    year: "2021",
    institution: "John Milton Public School, Agra",
    percentage: "90.5%",
    image: twelfthDress,
    description: "My high school journey with some of the best teachers and friends."
  },
  {
    title: "Coding Hackathon",
    year: "2021",
    eventTitle: "Inter-School Coding Hackathon",
    description: "Won first place in the inter-school coding competition.",
    isEvent: true,
    position: "right"
  },
  {
    title: "College",
    year: "2026 (Expected)",
    institution: "Manipal Institute of Technology, Manipal",
    cgpa: "8.96 CGPA",
    image: collegeMerch,
    description: "Currently pursuing my degree, exploring tech, and enjoying college life."
  },
  {
    title: "RUGVED-Task Phase Member",
    year: "2023",
    eventTitle: "RUGVED-Task Phase Member",
    description: "Learned different practical and theoretical basis of defence robotics",
    isEvent: true,
    position: "right"
  },
  {
    title: "MIST-Management Committee Member",
    year: "October,2023-November,2024",
    eventTitle: "MIST-Management Committee Member",
    description: "Organised events like Smoked ,CTF ,etc & conducted sessions  Web Development and cybersecurity.",
    isEvent: true,
    position: "right"
  },
  {
    title: "REVELS-Core Committee Member",
    year: "Feb,2025-March,2025",
    eventTitle: "REVELS-Core Committee Member",
    description: "Handled Finance, ProShow (the main event) entry and merchandise.",
    isEvent: true,
    position: "right"
  }
];

const Journey = () => {
  console.log("Journey Data:", journeyData); // ✅ Check if data exists

  return (
    <div className="journey-container">
      <h2 className="journey-title">My Journey</h2>
      <div className="timeline">
        {journeyData.map((item, index) => {
          console.log("Rendering JourneyItem with data:", item); // ✅ Debugging output
          return <JourneyItem key={index} data={item} position={item.position || (index % 2 === 0 ? "right" : "right")} />;
        })}
      </div>
    </div>
  );
};

export default Journey;
