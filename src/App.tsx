import { BrowserRouter } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
