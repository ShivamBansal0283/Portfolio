// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "../styles/slideshow.css";

// // Import images from assets
// import project1 from "../assets/images/project1.jpeg";
// import project2 from "../assets/images/project2.jpeg";
// import project3 from "../assets/images/project3.png";

// const projects = [
//     {
//         image: project1,
//         title: "Project One",
//         description: "loreModern humans arrived on theem fr"
//     },
//     {
//         image: project2,
//         title: "Project Two",
//         description: "A brief description of Project Two."
//     },
//     {
//         image: project3,
//         title: "Project Three",
//         description: "A brief description of Project Three."
//     }
// ];

// const ProjectSlideshow = () => {
//     return (
//         <div className="slideshow-container">
//             <Swiper
//                 modules={[Navigation, Pagination, Autoplay]}
//                 spaceBetween={50}
//                 slidesPerView={1}
//                 navigation
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 3000, disableOnInteraction: false }}
//                 loop={true} // Enables infinite looping
//             >
//                 {projects.map((project, index) => (
//                     <SwiperSlide key={index}>
//                         <div className="slide-content">
//                             <div className="slide-layout">
//                                 <img src={project.image} alt={project.title} className="project-image" />
//                                 <div className="project-info">
//                                     <h2>{project.title}</h2>
//                                     <p>{project.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default ProjectSlideshow;




import React from "react";
import "../styles/projectslideshow.css";
import project1 from "../assets/images/project1.jpeg";
import project3 from "../assets/images/project2.jpeg";
import project2 from "../assets/images/project3.png";
import CustomCarousel from "./CustomCarousel";

const images = [
    {
        imgURL: project1,
        imgAlt: "Slide 1",
        title: "ACADEMIC PROJECT TRACKING SYSTEM",
        description: "Project to streamline project management, allowing professors to track projects, students to form teams, and administrators to oversee ongoing and completed projects with grades.",
        link: "https://github.com/ShivamBansal0283"
    },
    {
        imgURL: project2,
        imgAlt: "Slide 2",
        title: "Multi-Protocol Network",
        description: "Configured multiple network protocols including RIP, OSPF, NAT, DHCP, NTP, and EIGRP. Addressed key functionalities like IP addressing (Class A, B, C, and classless), email configuration using POP and IMAP protocols, and FTP server setup",
        link: "https://github.com/ShivamBansal0283"
    },
    {
        imgURL: project3,
        imgAlt: "Slide 3",
        title: "Secure File Transfer Using Audio Steganography",
        description: "Developed a secure file transfer system combining AES-256 encryption and audio steganography (LSB encoding, echo hiding) to conceal sensitive data within audio files",
        link: "https://github.com/ShivamBansal0283"
    }
];

function ProjectSlideshow() {
    return (
        <div className="container" style={{ maxWidth: "800px", margin: "40px auto" }}>
            <div className="slider-header">
               
                <p>
                    Drawing on the strengths of both independent flair and collaborative synergy,
                    I've meticulously crafted a portfolio of innovative projects that speak volumes
                    of creativity and technical excellence.
                </p>
            </div>

            <CustomCarousel>
                {images.map((image, index) => (
                    <div className="slider__item-content" key={index}>
                        <img src={image.imgURL} alt={image.imgAlt} />
                        <div className="slider__overlay">
                            <div className="overlay-left">
                                <div className="project-title1">{image.title}</div>
                                <a href={image.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                    Click Here
                                </a>
                            </div>
                            <div className="overlay-right">
                                <div className="project-description">{image.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </CustomCarousel>
        </div>
    );
}

export default ProjectSlideshow;