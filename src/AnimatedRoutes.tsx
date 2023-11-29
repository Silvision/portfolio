import { Route, Routes, useLocation } from "react-router-dom";
import Projects from "./Projects";
import Ecosphere from "./Ecosphere";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route index element={<Projects />} />
      <Route path="ecosphere" element={<Ecosphere />} />
    </Routes>
  );
}

export default AnimatedRoutes;
