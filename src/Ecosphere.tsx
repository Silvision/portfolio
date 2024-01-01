import { motion } from "framer-motion";
import "./Ecosphere.css"

function Ecosphere() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container-project">
        <div className="container-project-description"> EcoSphere </div>
        <div> Carousel </div>
      </div>
    </motion.div>
  );
}

export default Ecosphere;
