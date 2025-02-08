import { Container, Row, Col } from "react-bootstrap";
import ModalComponet from "./componets/Modal";
import turnos from "../src/asets/img/turnos.jpg";
import ventas from "./asets/img/ventas.png";
import Contacto from "./componets/Contacto";
import Footer from "./componets/Foter";
import fondo from "./asets/img/fondo.jpg";
import ppot from "./asets/img/ppot.png"
import "./App.css";
import Menu from "./componets/menu";
import { useState } from "react";
import { motion } from "framer-motion";
import Stack from "./componets/Stack";
function App() {
  const [seeMenu, setSeeMenu] = useState(false);

  return (
    <div className="body">
      <div className="menu">
        <button className="btn-menu" onClick={() => setSeeMenu(!seeMenu)}>Menu</button>
        {seeMenu && <div className="fixded-Menu"><Menu/></div>}
      </div>
      <div className="contenedor" id="inicio">
        <img className="imagefondo" src={fondo} alt="fondo" />
        <div className="texto">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, scale: [1, 1.5, 2] }}
            transition={{ duration: 2 }}
          >
            Arturo Baduna
          </motion.h1>
          <br />
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 2 }}
          >
            <motion.span
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                times: [0, 0.1, 0.9, 1]
              }}
            >
              {"Fullstack"}
            </motion.span>
          </motion.h2>
        </div>
      </div>
      
      <div className="about" id="about">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          ¡Hola! Soy Arturo, un entusiasta de la tecnología con 25 años y una curiosidad interminable.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Como programador fullstack especializado en Node y React, encuentro mi pasión en la programación, sumergiéndome en líneas de código durante todo el día.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Mi desafío personal es subir algo nuevo a mi repositorio de GitHub diariamente, demostrando mi compromiso con el aprendizaje constante y el perfeccionamiento de mis habilidades.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.6 }}

        >
          Además, me aventuro en el mundo del testing y TypeScript, abrazando desafíos que me impulsan a crecer en este emocionante campo tecnológico.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <b>¡Bienvenido a mi viaje de innovación y desarrollo!</b>
        </motion.p>
      </div>
      <div className="stack-container">
        <Stack/>
      </div>
      <br/>
      <div className="portafolio"  id="porfolio">
        <motion.h2
        initial={{opacity:0,y:100}}

        whileInView={{opacity:1,y:0,scale:[1,2,1]}}
        viewport={{ once: true, amount: 0.5 }}
        transition={{duration:1}}
        >Proyectos</motion.h2>
       <hr/>



        <motion.div 
          className="portafolioPrimario"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <h3>Piedra, papel y tijera</h3>
          <p>React scoket.io</p>
          <ModalComponet
            title="Piedra, papel y tijera"
            tecnologis="React scoket.io"
            img={ppot}
            carateristicas="multijugador con salas para jugar"
            link="https://github.com/abaduna/piedra-papel-tijera-scoket.io"
            funcion={[
              "se puede jugar de manera individual",
              "se puede jugar con otra persona solo entrando a la misma sala"
            ]}
            urlVido={`https://www.youtube.com/embed/qtgtLXWalT0?si=JVPuAu0VVXfk-f_1`}
          />
        </motion.div>
        <motion.div 
          className="portafolioSecundario"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <h3>Sistema de ventas</h3>
          <p>React-Express-React Native</p>
          <ModalComponet
            title="Sistema de ventas"
            tecnologis="React-Express-React Native"
            img={ventas}
            carateristicas="Sistema para anotar ventas"
            link="https://github.com/abaduna/fullstack-express-react-react-native"
            funcion={["Anotar ventas","Borrar venta"]}
            urlVido={`https://youtu.be/N1dSycykBzs`}
            urlNative={"https://youtube.com/shorts/7C6zhWorDdk?feature=share"}
          />
        </motion.div>
        <motion.div 
          className="portafolioPrimario"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <h3>Turnos</h3>

          <p>React Express SQL</p>
          <ModalComponet

            title="Turnos"
            tecnologis="React Express SQL"
            img={turnos}
            carateristicas="podes eligir un medico y el horario disponible,agregar un nuevo medico."
            link="https://github.com/abaduna/turnos-express-react"
            funcion={["Elegir el médico y los horarios disponibless","Seleccionar una hora disponible","Agregar un nuevo medico"]}
            urlVido={`https://www.youtube.com/embed/HKVo-9HtSzE?si=f5Kb_ssDd0VD2U1s`}
          />
        </motion.div>
      </div>
      <div className="contacto" id="contacto">
        <motion.h3 className="title-contanto"
         initial={{opacity:0,y:100}}
         whileInView={{opacity:1,y:0,scale:[1,2,1]}}
         viewport={{ once: true, amount: 0.5 }}
         transition={{duration:1}}
        >Contacto</motion.h3>
        <Contacto className="form" />
      </div>
      <div className="menu-completo">

        <Menu />
      </div>
      <div className="foter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
