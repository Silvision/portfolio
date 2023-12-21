import { motion } from "framer-motion";
import background from "./assets/ecosphereCover.png";

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
      }}
    >
      <div style={{ width: "100%", height: "720px" }}>
        <h1> Testin! </h1>
      </div>
    </motion.div>
  );
}

export default Ecosphere;
