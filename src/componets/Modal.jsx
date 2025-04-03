import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./Moda.css";

const ModalComponent = ({
  title,
  tecnologis,
  img,
  carateristicas,
  link,
  funcion,
  urlVido,
  urlNative
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <motion.div
      
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.95 }}
          className="btn btn-dark px-4 py-2 rounded-pill"
          onClick={handleShow}
        >

        
          Ver más
        </motion.button>
      </motion.div>


      <AnimatePresence>
        {show && (
          <Modal
            size="lg"
            centered
            show={show}
            onHide={handleClose}
            className="custom-modal"
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <Modal.Header closeButton className="border-bottom-0">
                <Modal.Title className="fw-bold">{title}</Modal.Title>
              </Modal.Header>
              <Modal.Body className="p-4">
                <div className="mb-4">
                  <h5 className="mb-3">Tecnologías utilizadas:</h5>
                  <p className="text-muted">{tecnologis}</p>
                </div>

                <div className="mb-4">
                  <p className="lead">{carateristicas}</p>
                  <p className="mb-3">
                    Puedes ver el código{" "}
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      aquí
                    </a>
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <img className="img-fluid rounded shadow-sm mb-4" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} src={img} alt={title} />
                </motion.div>

                {funcion && funcion.length > 0 && (
                  <div className="mb-4">
                    <h5 className="mb-3">Características:</h5>
                    <ul className="list-group">
                      {funcion.map((caract, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="list-group-item border-0"
                        >
                          {caract}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="d-flex gap-3">
                  {urlVido && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={urlVido}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Ver demostración
                    </motion.a>
                  )}
                  {urlNative && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={urlNative}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary"
                    >
                      Ver app nativa
                    </motion.a>
                  )}
                </div>
              </Modal.Body>
              <Modal.Footer className="border-top-0">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                  </Button>
                </motion.div>
              </Modal.Footer>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalComponent;
