import "./TopBar.css";
import StyledButton from "./StyledComponents/StyledButton";
import { Link, Outlet } from "react-router-dom";

function TopBar() {
  return (
    <>
      <div className="top-bar">
        <Link to="/">
          <StyledButton icon="appsIcon" />
        </Link>

        <div className="middle-content">
          <h1>Richard Nguyen</h1>
        </div>

        <StyledButton icon="person"></StyledButton>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default TopBar;
