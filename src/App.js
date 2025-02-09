// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
















// import React from "react";
// import Home from "./pages/Home";
// import Navbar from "./pages/Navbar";
// import Footer from "./pages/Footer";
// // import "./styles/styles.css";

// function App() {
//   return (
//     <div className="app-container">

//       <Navbar />
//       <Home />
//       <Footer />
//     </div>
//   );
// }

// export default App;











import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Journey from "./pages/Journey"; // Import the Journey page
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./styles/styles1.css"
import ProjectsSection from "./pages/ProjectSection";

function App() {
  return (
    <Router>
      <div>
        <div className="app-container">
          <header>
            <Navbar />
          </header>
          <div className="page-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/projects" element={<ProjectsSection />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

          </div>
        </div>
        <footer>
          <div className="footer">
            <Footer />
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;