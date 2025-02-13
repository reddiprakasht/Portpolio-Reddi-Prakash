// import React from "react";

// export default function Home() {
//   return (
//     <div className="container text-center mt-5">
//       {/* Hero Section */}
//       <div className="row justify-content-center">
//         <div className="col-md-8">
//           <h1 className="fw-bold">Hi, I'm Reddi Prakash 👋</h1>
//           <p className="lead">Front-End Developer | React.js | UI/UX Designer</p>
//           <a href="#projects" className="btn btn-primary">
//             View My Work
//           </a>
//         </div>
//       </div>

//       {/* Skills Section */}
//       <div className="row mt-5">
//         <div className="col">
//           <h2>Skills</h2>
//           <p>React.js • JavaScript • HTML • CSS • Bootstrap • Figma</p>
//         </div>
//       </div>

//       {/* Projects Section */}
//       <div id="projects" className="row mt-5">
//         <div className="col">
//           <h2>Projects</h2>
//           <ul className="list-unstyled">
//             <li>🚀 Portfolio Website</li>
//             <li>🛒 E-commerce Dashboard</li>
//             <li>📊 Data Visualization App</li>
//           </ul>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="row mt-5">
//         <div className="col">
//           <h2>Contact Me</h2>
//           <p>Email: your.email@example.com</p>
//           <p>
//             <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">
//               LinkedIn Profile
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



import { motion } from "framer-motion";
import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-danger">
      {/* Hero Section */}
      <motion.div
        className="row justify-content-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="col-md-8">
          <h1 className="fw-bold">
            Hi, I'm{" "}
            <motion.span
              className="text-primary"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Reddi Prakash 👋
            </motion.span>
          </h1>
          <p className="lead">Front-End Developer | React.js | UI/UX Designer</p>
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View My Work
          </motion.a>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="row mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <div className="col">
          <h2>Skills</h2>
          <p>React.js • JavaScript • HTML • CSS • Bootstrap • Figma</p>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        id="projects"
        className="row mt-5"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, delay: 0.6 }}
      >
        <div className="col">
          <h2>Projects</h2>
          <ul className="list-unstyled">
            <li>🚀 Portfolio Website</li>
            <li>🛒 E-commerce Dashboard</li>
            <li>📊 Data Visualization App</li>
          </ul>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="row mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        <div className="col">
          <h2>Contact Me</h2>
          <p>
            <FaEnvelope className="me-2 text-danger" />
            your.email@example.com
          </p>
          <p>
            <a
              href="https://linkedin.com/in/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <FaLinkedin className="me-2 text-primary" /> LinkedIn Profile
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
