import { Route, Routes, useLocation } from "react-router-dom";
import Projects from "./Projects";
import Ecosphere from "./Ecosphere";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route index element={<Projects />} />
        <Route path="ecosphere" element={<Ecosphere />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
