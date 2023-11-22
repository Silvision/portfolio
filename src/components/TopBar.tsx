import './TopBar.css'
import StyledButton from './StyledComponents/StyledButton';


function TopBar() {

    return (
        <>
            <div className="top-bar">
            
              <StyledButton icon='appsIcon'></StyledButton>
              <div className="middle-content"><h1>Richard Nguyen</h1></div>
              <StyledButton icon='person'></StyledButton>

            </div>
        </>
    )

}

export default TopBar