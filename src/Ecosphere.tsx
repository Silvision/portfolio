import { motion } from "framer-motion";

function Ecosphere() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h1> EcoSphere </h1>
      </div>
    </motion.div>
  );
}

export default Ecosphere;
