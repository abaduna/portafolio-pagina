import { Container, Row, Col } from "react-bootstrap";
import ModalComponet from "./componets/Modal";
import turnos from "../src/asets/img/turnos.jpg";
import reproductor from "./asets/img/reproductor.jpg";
import Contacto from "./componets/Contacto";
import Footer from "./componets/Foter";
import fondo from "./asets/img/fondo.jpg";
import "./App.css";
function App() {
  return (
    <div>
      <div className="contenedor">
        <img className="imagefondo" src={fondo}></img>
        <div className="texto">
          <h1>Arturo Baduna</h1>
          <h2>Full stack</h2>
        </div>
      </div>
      <div className="about">
        <p>
          ¡Hola! Soy Arturo, un entusiasta de la tecnología con 25 años y una
          curiosidad interminable. Como programador fullstack especializado en
          Node y React, encuentro mi pasión en la programación, sumergiéndome en
          líneas de código durante todo el día. Mi desafío personal es subir
          algo nuevo a mi repositorio de GitHub diariamente, demostrando mi
          compromiso con el aprendizaje constante y el perfeccionamiento de mis
          habilidades. Además, me aventuro en el mundo del testing y TypeScript,
          abrazando desafíos que me impulsan a crecer en este emocionante campo
          tecnológico. ¡Bienvenido a mi viaje de innovación y desarrollo!
        </p>
      </div>
      <div className="portafolio">
        <h2>Proyect</h2>
        <div className="portafolioPrimario">
          <h3>Piedra, papel y tijera</h3>
          <p>React scoket.io</p>
          <ModalComponet
            title="Piedra, papel y tijera"
            tecnologis="React scoket.io"
          />
        </div>
        <div className="portafolioSecundario">
          <h3>Reproductor de musica</h3>
          <p>React Express</p>
          <ModalComponet
            title="Reproductor de musica"
            tecnologis="React Express"
            img={reproductor}
            carateristicas="Reproductos de musica que descarga musica de youtube"
            link="https://github.com/abaduna/reproducto-musica-react-express"
          />
        </div>
        <div className="portafolioPrimario">
          <h3>Turnos</h3>
          <p>React Express SQL</p>
          <ModalComponet
            title="Turnos"
            tecnologis="React Express SQL"
            img={turnos}
            carateristicas="podes eligir un medico y el horario disponible,agregar un nuevo medico."
            link="https://github.com/abaduna/turnos-express-react"
          />
        </div>
      </div>
      <div className="contacto">
        <h3>Contacto</h3>
        <Contacto className="form" />
      </div>
      <div className="foter">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
