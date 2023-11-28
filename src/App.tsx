import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import ProjectsGrid from "./ProjectsGrid";
import Ecosphere from "./Ecosphere";
import AppLayout from "./AppLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<ProjectsGrid />} />
      <Route path="ecosphere" element={<Ecosphere />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
