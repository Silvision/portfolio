import { ThemeProvider } from '@emotion/react';
import './TopBar.css'
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { createTheme } from '@mui/material/styles';
import StyledButton from './StyledComponents/StyledButton';

declare module '@mui/material/styles' {
    interface Palette {
      darkButtons: Palette['primary'];
    }
  
    interface PaletteOptions {
      darkButtons?: PaletteOptions['primary'];
    }
}
  
  // Update the Button's color options to include an ochre option
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      darkButtons: true;
    }
}

const theme = createTheme({
    palette: {
      darkButtons: {
        main: '#272727',
        light: '#f0f0f0',
        dark: '#2d2d2d',
        contrastText: '#a5a5a5',
      },
    },
});


function TopBar() {

    return (
        <>
            <div className="top-bar">
            
                <ThemeProvider theme={theme}>
                    <StyledButton icon='appsIcon'></StyledButton>
                    <div className="middle-content"><h1>Richard Nguyen</h1></div>
                    <StyledButton icon='person'></StyledButton>
                </ThemeProvider>

            </div>
        </>
    )

}

export default TopBar