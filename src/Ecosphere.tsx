import { motion } from "framer-motion";
import "./Ecosphere.css";
import ProjectSwiper from "./components/StyledComponents/ProjectSwiper";

function Ecosphere() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container-project">
        <div className="container-project-description"> EcoSphere </div>
        <div className="container-project-slider"> <ProjectSwiper/> </div>
        
      </div>
    </motion.div>
  );
}

export default Ecosphere;
