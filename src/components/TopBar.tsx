import { ThemeProvider } from '@emotion/react';
import './TopBar.css'
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
      ochre: Palette['primary'];
    }
  
    interface PaletteOptions {
      ochre?: PaletteOptions['primary'];
    }
}
  
  // Update the Button's color options to include an ochre option
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        ochre: true;
    }
}

const theme = createTheme({
    palette: {
      ochre: {
        main: '#E3D026',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
    },
});


function TopBar() {

    return (
        <>
            <div className="top-bar">
            
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="ochre"> <Icon>appsIcon</Icon> </Button>
                    <div className="middle-content"><h1>Richard Nguyen</h1></div>
                    <Button variant="contained" color="ochre"> <Icon>person</Icon> </Button>
                </ThemeProvider>

            </div>
        </>
    )

}

export default TopBar