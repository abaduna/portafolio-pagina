import React from "react";
import { motion } from "framer-motion";
import "./Stack.css";
import 'font-awesome/css/font-awesome.min.css'; 

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
          <i className="fab fa-node-js"></i>
          <p>Node.js</p>
        </motion.div>
        <motion.div className="stack-item" whileHover={{ scale: 1.1 }}>
          <i className="fab fa-node-js"></i>
          <p>Express</p>
        </motion.div>
        <motion.div className="stack-item" whileHover={{ scale: 1.1 }}>
          <i className="fab fa-java"></i>
          <p>Spring Boot</p>
        </motion.div>

        {/* Frontend */}
        <motion.div className="stack-item" whileHover={{ scale: 1.1 }}>
          <i className="fab fa-react"></i>
          <p>React JS</p>
        </motion.div>
        <motion.div className="stack-item" whileHover={{ scale: 1.1 }}>
          <i className="fab fa-html5"></i>
          <p>HTML</p>
        </motion.div>

        {/* Mobile */}
        <motion.div className="stack-item" whileHover={{ scale: 1.1 }}>
          <i className="fab fa-android"></i>
          <p>Flutter</p>
        </motion.div>

        {/* Bases de Datos */}
        <motion.div className="stack-item" whileHover={{ scale: 1.1 }}>
          <i className="fas fa-database"></i>
          <p>SQL</p>
        </motion.div>

        <motion.div className="stack-item" whileHover={{ scale: 1.1 }}>
          <i className="fas fa-database"></i>
          <p>MongoDB</p>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Stack;
