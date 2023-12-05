import { motion } from "framer-motion";
import background from "./assets/cover15.jpg";

function Ecosphere() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div>
        <h1> Testin! </h1>
      </div>
    </motion.div>
  );
}

export default Ecosphere;
