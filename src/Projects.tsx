import ProjectSquare from "./components/StyledComponents/ProjectSquare";
import image1 from "../src/assets/cover15.jpg";
import video1 from "../src/assets/makessense.mp4";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ProjectSquare linkURL="ecosphere" imageURL={image1} videoURL={video1} />
    </motion.div>
  );
}

export default Projects;
