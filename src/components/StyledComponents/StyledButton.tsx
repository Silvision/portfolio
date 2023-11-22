import { ThemeProvider } from '@emotion/react';
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon';
import { createTheme } from '@mui/material/styles';

type StyledButtonProps = {
    icon: string;
}

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

function StyledButton({icon}: StyledButtonProps) { 

    return (
        <ThemeProvider theme={theme}>
            <Button
                variant="contained"
                color="darkButtons"
                sx={{
                    '&:hover': {
                    '& .MuiIcon-root': {
                        color: '#f0f0f0',
                    },
                    },
                }}
            >
                <Icon sx={{ color: 'inherit'}}>{icon}</Icon>
            </Button>
        </ThemeProvider>
    );

}

export default StyledButton