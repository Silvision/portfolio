import "./TopBar.css";
import StyledButton from "./StyledComponents/StyledButton";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <>
      <div className="top-bar">
        <Link to="/">
          <StyledButton
            icon="appsIcon"
            buttonColor="darkButtons"
            buttonSize="medium"
          />
        </Link>

        <Link to="profile">
          <StyledButton
            icon="person"
            buttonColor="darkButtons"
            buttonSize="medium"
          />
        </Link>
      </div>
    </>
  );
}

export default TopBar;
