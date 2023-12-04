import "./TopBar.css";
import StyledButton from "./StyledComponents/StyledButton";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <>
      <div className="top-bar">
        <Link to="/">
          <StyledButton icon="appsIcon" />
        </Link>

        <StyledButton icon="person"></StyledButton>
      </div>
    </>
  );
}

export default TopBar;
