import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "./Moda.css";
const ModalComponet = ({
  title,
  tecnologis,
  img,
  carateristicas,
  link,
  funcion,
  urlVido
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Ver mas
      </Button>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fullscreen="true"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          tecnologias usadas {tecnologis}
          <br />
          {carateristicas}
          podes ver el codigo <a href={link} target="_blank">aca</a>
          <img className="image" src={img}></img>
          {<ul>
              {funcion?.map(caract=>(
               <li>{caract}</li> 
              ))}
              
              
            </ul> }
            <a href={urlVido}  target="_blank"> Video en funcionamento</a>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponet;
