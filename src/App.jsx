import { Container, Row, Col } from "react-bootstrap";
import ModalComponet from "./componets/Modal";
import recetas from "./asets/img/recetas.jpeg"
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
        {seeMenu && <div className="fixded-Menu"><Menu /></div>}
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
        <Stack />
      </div>
      <br />
      <div className="portafolio" id="porfolio">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}

          whileInView={{ opacity: 1, y: 0, scale: [1, 2, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >Proyectos</motion.h2>
        <hr />



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
          <h3>To-Do List </h3>
          <p>Springboot React</p>
          <ModalComponet
            title="To-Do List "
            tecnologis="Springboot React"
            img={"https://media.licdn.com/dms/image/v2/D4D22AQHtENsRnQ5cZQ/feedshare-shrink_1280/B4DZTTx6DGHYAk-/0/1738719863622?e=1746662400&v=beta&t=wJKx4i8GZukkPcrFKzATrxFXNx-6Firqy3ARMywJmjU"}
            carateristicas="To do list con testing 80% coverage"
            link="https://github.com/abaduna/react-testingToDo.git"
            funcion={["Agregar tareas", "Eliminar tareas", "Marcar como completadas"]}


          />
        </motion.div>
        <motion.div
          className="portafolioPrimario"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <h3>Recetas</h3>

          <p>Flutter Springboot</p>
          <ModalComponet

            title="Recetas"
            tecnologis="Flutter Springboot"
            img={recetas}
            carateristicas="podes elegir una receta y ver los ingredientes,agregar una nueva receta."
            link="https://github.com/abaduna/Springboot-Recipes "
            funcion={["Elegir la receta", "Ver los ingredientes", "Agregar una nueva receta"]}

          />
        </motion.div>
      </div>
      <div className="contacto" id="contacto">
        <motion.h3 className="title-contanto"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, scale: [1, 2, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
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
