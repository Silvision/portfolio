import ProjectSquare from "./components/StyledComponents/ProjectSquare";
import image1 from "./assets/ecosphereCover.png";
import video1 from "./assets/EcosphereVideo.mp4";
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

      <div className="container">
        <div className="item">
          <ProjectSquare
            linkURL="ecosphere"
            imageURL={image1}
            videoURL={video1}
          />
        </div>

        <div className="item">
          <ProjectSquare linkURL="" imageURL={""} videoURL={""} />
        </div>

        <div className="item">
          <ProjectSquare linkURL="" imageURL={""} videoURL={""} />
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
