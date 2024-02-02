import { Container, Row, Col } from "react-bootstrap";
import ModalComponet from "./componets/Modal";
import turnos from "../src/asets/img/turnos.jpg"
import reproductor from "./asets/img/reproductor.jpg"
import Contacto from "./componets/Contacto";
function App() {
  return (
    <Container>
      <div>
        <h1>Arturo Baduna</h1>
        <h2>Full stack</h2>
      </div>
      <div className="about">
      <p>Abaout</p>
      </div>
      <div className="portafolio">
        <h2>Proyect</h2>
        <div>
          <h3>Piedra, papel y tijera</h3>
          <p>React scoket.io</p>
          <ModalComponet title="Piedra, papel y tijera" tecnologis="React scoket.io"/> 
        </div>
        <div>
          <h3>Reproductor de musica</h3>
          <p>React Express</p>
          <ModalComponet title="Reproductor de musica" tecnologis="React Express" img={reproductor}/> 
        </div>
        <div>
          <h3>Turnos</h3>
          <p>React Express SQL</p>
          <ModalComponet title="Turnos" tecnologis="React Express SQL"  img={turnos} /> 
        </div>
      </div>
      <div className="contacto">
        <Contacto/>
      </div>
    </Container>
  );
}

export default App;
