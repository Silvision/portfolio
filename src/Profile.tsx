import { motion } from "framer-motion";

function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h1> Testing Profile </h1>
      </div>
    </motion.div>
  );
}

export default Profile;
