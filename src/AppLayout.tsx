import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";

function AppLayout() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}

export default AppLayout;
