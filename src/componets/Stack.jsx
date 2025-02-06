import React from "react";
import { motion } from "framer-motion";
import "./Stack.css";

const Stack = () => {
  return (
    <motion.div
      className="stack-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 style={{textAlign:"center"}} animate={{opacity:1,y:0,scale:[1,2,1]}} initial={{opacity:0,y:100}} transition={{duration:1}}>Mi Stack Tecnológico</motion.h2>
      <br/>
      <div className="stack-list" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Backend */}
        <motion.div className="stack-item" whileHover={{ scale: 1.1 }}>
          <img
            src="https://nodejs.org/static/images/logo.svg"
            alt="Node.js"
          />
          <p>Node.js</p>
        </motion.div>
        <motion.div className="stack-item" whileHover={{ scale: 1.1 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
            alt="Express"
          />
          <p>Express</p>
        </motion.div>
        <motion.div className="stack-item" whileHover={{ scale: 1.1 }}>
          <img
            src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
            alt="Spring Boot"
          />
          <p>Spring Boot</p>
        </motion.div>

        {/* Frontend */}
        <motion.div className="stack-item" whileHover={{ scale: 1.1 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React JS"
          />
          <p>React JS</p>
        </motion.div>
        <motion.div className="stack-item" whileHover={{ scale: 1.1 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            alt="HTML"
          />
          <p>HTML</p>
        </motion.div>

        {/* Mobile */}
        <motion.div className="stack-item" whileHover={{ scale: 1.1 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png"
            alt="Flutter"
          />
          <p>Flutter</p>
        </motion.div>

        {/* Bases de Datos */}
        <motion.div className="stack-item" whileHover={{ scale: 1.1 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg"
            alt="SQL"
          />
          <p>SQL</p>
        </motion.div>
        <motion.div className="stack-item" whileHover={{ scale: 1.1 }}>
          <img
            src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
            alt="MongoDB"
          />
          <p>MongoDB</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Stack;
