
// import React, { useEffect } from "react";
// import Navbar from "./Navbar";
// import ProjectSlideshow from "./ProjectSlideshow";
// import "../styles/homepage.css";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import AboutMe from "./AboutMe";

// const Home = () => {
//   const controls1 = useAnimation();
//   const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.6 });

//   const controls2 = useAnimation();
//   const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.6 });

//   useEffect(() => {
//     if (inView1) {
//       controls1.start({ opacity: 1, scale: 1 });
//     } else {
//       controls1.start({ opacity: 0, scale: 0.9 });
//     }
//   }, [controls1, inView1]);

//   useEffect(() => {
//     if (inView2) {
//       controls2.start({ opacity: 1, scale: 1 });
//     } else {
//       controls2.start({ opacity: 0, scale: 0.9 });
//     }
//   }, [controls2, inView2]);

//   return (
//     <div className="bg-[#f5f5dc] min-h-screen flex flex-col">
//       {/* Navbar */}
//       <Navbar />

//       {/* Body Section */}
//       <section className="text-center p-10">
//         <motion.div
//           ref={ref1}
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={controls1}
//           transition={{ duration: 1.0 }}
//         >
//           <h2 className="text-4xl text-[#8b5a2b] font-bold">Welcome to My Portfolio</h2>
//           {/* <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
//             I am Shivam Bansal, a passionate tech enthusiast dedicated to innovation and perfection. Explore my work and projects.
//           </p> */}

//           <AboutMe/>
//         </motion.div>
//       </section>

//       {/* Works/Projects Section */}
//       <section className="text-center py-10">
//         <motion.div
//           ref={ref2}
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={controls2}
//           transition={{ duration: 1.0 }}
//         >
//           <h2 className="text-3xl text-[#8b5a2b] font-bold mb-5"> Projects</h2>
//           <ProjectSlideshow />
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default Home;








import React, { useEffect } from "react";
// import Navbar from "./Navbar";
import ProjectSlideshow from "./ProjectSlideshow";
import "../styles/homepage.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
// import ImageSlider from "./ImageSlider";

const Home = () => {
  const controls1 = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.6 });

  const controls2 = useAnimation();
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.6 });

  const controls3 = useAnimation();
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, scale: 1 });
    } else {
      controls1.start({ opacity: 0, scale: 0.9 });
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, scale: 1 });
    } else {
      controls2.start({ opacity: 0, scale: 0.9 });
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start({ opacity: 1, scale: 1 });
    } else {
      controls3.start({ opacity: 0, scale: 0.9 });
    }
  }, [controls3, inView3]);

  return (
    <div className="bg-[#f5f5dc] min-h-screen flex flex-col">
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Body Section */}
      <section className="text-center p-10">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls1}
          transition={{ duration: 1.0 }}
        >
          <h2 className="text-4xl text-[#8b5a2b] font-bold">Welcome to My Portfolio</h2>
          <AboutMe />
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="text-center py-10">
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls3}
          transition={{ duration: 1.0 }}
        >
          <TechStack />
        </motion.div>
      </section>

      {/* Works/Projects Section */}
      <section className="text-center py-10">
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls2}
          transition={{ duration: 1.0 }}
        >
          <h2 className="text-3xl text-[#8b5a2b] font-bold mb-5"> Projects</h2>
          <ProjectSlideshow />
          {/* <ImageSlider /> */}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;