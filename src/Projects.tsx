import ProjectSquare from "./components/StyledComponents/ProjectSquare";
import image1 from "../src/assets/cover15.jpg";
import video1 from "../src/assets/EcosphereVideo.mp4";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Grid>
        <ProjectSquare
          linkURL="ecosphere"
          imageURL={image1}
          videoURL={video1}
        />
        <ProjectSquare linkURL="ecosphere" imageURL={""} videoURL={""} />
      </Grid>
    </motion.div>
  );
}

export default Projects;
