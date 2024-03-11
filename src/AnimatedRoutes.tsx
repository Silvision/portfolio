import { Route, Routes, useLocation } from "react-router-dom";
import Projects from "./Projects";
import Ecosphere from "./Ecosphere";
import { AnimatePresence } from "framer-motion";
import Profile from "./Profile";
import PaintColorSwitch from "./PaintColorSwitch";
import UltimuttDefenders from "./UltimuttDefenders";
import ReverseSokoban from "./ReverseSokoban";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route index element={<Projects />} />
        <Route path="profile" element={<Profile />} />
        <Route path="ecosphere" element={<Ecosphere />} />
        <Route path="paintColorSwitch" element={<PaintColorSwitch/>} />
        <Route path="ultimuttDefenders" element={<UltimuttDefenders/>} />
        <Route path="reverseSokoban" element={<ReverseSokoban/>} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
