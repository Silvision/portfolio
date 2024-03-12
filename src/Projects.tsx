import ProjectSquare from "./components/StyledComponents/ProjectSquare";
import { projectsMedia } from "./assets/images";
import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "10%" }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: 0, y: "10%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: "-300%" }}
        animate={{ opacity: 1, y: "0%" }}
        exit={{ opacity: 0, y: "-300%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="nameBar"
      >
        <h1>Richard Nguyen</h1>
      </motion.div>
    
      <div>
        <h1> Games </h1>
        <div className="container">
          <div className="item">
            <ProjectSquare linkURL="ecosphere" imageURL={projectsMedia[0]} videoURL={projectsMedia[1]}/>
          </div>

          <div className="item">
            <ProjectSquare linkURL="paintColorSwitch" imageURL={projectsMedia[2]}/>
          </div>

          <div className="item">
            <ProjectSquare linkURL="ultimuttDefenders" imageURL={projectsMedia[3]} />
          </div>

          <div className="item">
            <ProjectSquare linkURL="reverseSokoban" imageURL={projectsMedia[4]} />
          </div>

          <div className="item">
            <ProjectSquare linkURL="eternalReturn" imageURL={projectsMedia[5]} />
          </div>

        </div>
      </div>

      <br/><br/>

      <div>
        <h1> Other </h1>
        <div className="container">
          <div className="item">
            <ProjectSquare linkURL="shellProgram" imageURL={projectsMedia[6]}/>
          </div>

          <div className="item">
            <ProjectSquare linkURL="simpleFlixster" imageURL={projectsMedia[7]}/>
          </div>

          <div className="item">
            <ProjectSquare linkURL="simpleTwitter" imageURL={projectsMedia[8]}/>
          </div>

          <div className="item">
            <ProjectSquare linkURL="simpleInstagram" imageURL={projectsMedia[9]}/>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
