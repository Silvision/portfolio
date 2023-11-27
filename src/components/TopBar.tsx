import './TopBar.css'
import StyledButton from './StyledComponents/StyledButton';
import { Outlet } from 'react-router-dom';


function TopBar() {

    return (
        <>
            <div className="top-bar">
            
              <StyledButton icon='appsIcon'></StyledButton>
              <div className="middle-content"><h1>Richard Nguyen</h1></div>
              <StyledButton icon='person'></StyledButton>

            </div>

            <main>
                <Outlet />
            </main>
        </>
    )

}

export default TopBar