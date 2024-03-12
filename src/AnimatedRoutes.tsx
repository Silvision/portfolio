import { Route, Routes, useLocation } from "react-router-dom";
import Projects from "./Projects";
import Ecosphere from "./Ecosphere";
import { AnimatePresence } from "framer-motion";
import Profile from "./Profile";
import PaintColorSwitch from "./PaintColorSwitch";
import UltimuttDefenders from "./UltimuttDefenders";
import ReverseSokoban from "./ReverseSokoban";
import EternalReturn from "./EternalReturn";

import ShellProgram from "./ShellProgram";
import SimpleFlixster from "./SimpleFlixster";
import SimpleTwitter from "./SimpleTwitter";

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
        <Route path="eternalReturn" element={<EternalReturn/>} />

        <Route path="shellProgram" element={<ShellProgram/>} />
        <Route path="simpleFlixster" element={<SimpleFlixster/>} />
        <Route path="simpleTwitter" element={<SimpleTwitter/>} />

      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
