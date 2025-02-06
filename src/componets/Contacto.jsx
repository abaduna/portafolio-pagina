import React from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Contacto.css";

const Contacto = () => {
  return (
    <motion.div
      className="formulario"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <form
        target="_blank"

        action="https://formsubmit.co/artuelrey@gmail.com"
        method="POST"
      >
        <div className="form-group">
          <div className="form-row">
            <div className="col col-input">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Nombre completo"
                required
              />
            </div>
            <div className="col col-input">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="col col-input">
              <input
                type="text"
                name="asunto"
                className="form-control"
                placeholder="Asunto"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group col-input">
          <textarea
            placeholder="Mensaje"
            className="form-control"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-lg btn-dark btn-block">
          Enviar
        </button>
      </form>
    </motion.div>
  );
};

export default Contacto;
