import { motion } from "framer-motion";

function Ecosphere() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      bark
    </motion.div>
  );
}

export default Ecosphere;
