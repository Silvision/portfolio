import "./App.css";
import TopBar from "./components/TopBar";
import AnimatedRoutes from "./AnimatedRoutes";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <TopBar />
        <AnimatedRoutes />
      </HashRouter>
    </>
  );
}

export default App;
