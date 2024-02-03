import React from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const Contacto = () => {
  return (
    <>
      <form target="_blank" action="https://formsubmit.co/artuelrey@gmail.com" method="POST">
    <div class="form-group">
      <div class="form-row">
        <div class="col">
          <input type="text" name="name" class="form-control" placeholder="Nombre completo" required/>
        </div>
        <div class="col">
          <input type="email" name="email" class="form-control" placeholder="Email" required/>
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Mensaje" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-dark btn-block">Enviar</button>
  </form>
    </>
  );
};

export default Contacto;
