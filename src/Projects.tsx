import ProjectSquare from "./components/StyledComponents/ProjectSquare";
import image1 from "../src/assets/cover15.jpg";
import video1 from "../src/assets/EcosphereVideo.mp4";
import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="item">
          <ProjectSquare
            linkURL="ecosphere"
            imageURL={image1}
            videoURL={video1}
          />
        </div>

        <div className="item">
          <ProjectSquare linkURL="ecosphere" imageURL={""} videoURL={""} />
        </div>

        <div className="item">
          <ProjectSquare linkURL="ecosphere" imageURL={""} videoURL={""} />
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
