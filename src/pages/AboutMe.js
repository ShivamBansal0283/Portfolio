import React from "react";
import "../styles/aboutme.css";

const AboutMe = () => {
    return (
        <section className="about-me-section text-center py-10">
            <div className="container mx-auto flex flex-col items-center">
                {/* <h2 className="text-3xl text-[#8b5a2b] font-bold mb-5">About Me</h2> */}
                <p className="text-lg text-gray-700 max-w-2xl mb-5">
                    I am Shivam Bansal, a passionate tech enthusiast who thrives on solving complex problems and building innovative projects. With expertise in multiple technologies, I love working on projects that challenge me to think outside the box.
                </p>
                <a
                    href="../assets/resume/SHIVAM_BANSAL_220911546_IT.pdf"  // Ensure this is the correct path to your PDF file
                    download="Shivam_Bansal_Resume.pdf"
                    className="bg-[#8b5a2b] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#6b4226] transition-all"
                >
                    Download Resume
                </a>
            </div>
        </section>
    );
};

export default AboutMe;