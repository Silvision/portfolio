import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import { createTheme } from "@mui/material/styles";
import React, { ReactElement } from "react";

type StyledButtonProps = {
  icon: React.ReactNode;
  buttonColor: 'darkButtons' | 'playButton';
  buttonSize: 'small' | 'medium' | 'large' | 'extraLarge';
  text?: string;
};

declare module "@mui/material/styles" {
  interface Palette {
    darkButtons: Palette["primary"];
    playButton: Palette["primary"];
  }

  interface PaletteOptions {
    darkButtons?: PaletteOptions["primary"];
    playButton?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    darkButtons: true;
    playButton: true;
  }

  interface ButtonPropsSizeOverrides {
    extraLarge: true;
  }
}

const theme = createTheme({
  palette: {
    darkButtons: {
      main: "#272727",
      light: "#f0f0f0",
      dark: "#2d2d2d",
      contrastText: "#a5a5a5",
    },
    playButton: {
      main:"#14b3d8",
      light:"",
      dark:"",
      contrastText:"#ffffff",
    },
  },
  
  components: {
    MuiButton: {
      variants: [
        {
          props: { size: "extraLarge" },
          style: { fontSize: 32, width: "100%", height: "100%" }
        }
      ]
    }
  }
});

function StyledButton({ icon, buttonColor, buttonSize, text}: StyledButtonProps) {
  let iconComponent;
  // Check if it's a string for normal icons
  if (typeof icon === 'string'){
    iconComponent = (
      <Icon 
        sx={{
          scale: buttonSize === 'extraLarge' ? "300%" : "100%",
        }}
      >
        {icon}
      </Icon>
    )
  }
  // Check if it's something else such as an ReactElement, where we passed in a component (example passed in <GitHubIcon />)
  else {
    iconComponent = (React.cloneElement(icon as ReactElement, {
      style: {
        transform: `scale(${buttonSize === 'extraLarge' ? 3 : 1})`,
      }}
    ))
  }

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color={buttonColor}
        size={buttonSize}
        sx={{
          borderRadius: "0.5em",
          // Yeah i'm tweaking idk why this works and I have to call MuiIcon-root up here in this scope, and not just once down below.. maybe it's because 
          // it will make it apply OUTSIDE of just hovering?
          '& .MuiIcon-root': {
            transition: 'scale 0.2s ease-in-out',
          },
          '& .MuiSvgIcon-root': {
            transition: 'scale 0.2s ease-in-out',
          },
          "& p": {
            transition: 'scale 0.2s ease-in-out',
          },
          "&:hover": {
            "& .MuiIcon-root": {
              color: theme.palette[buttonColor].light,
              scale: buttonSize === 'extraLarge' ? '3.5' : '1',
            },
            "& .MuiSvgIcon-root": {
              scale: buttonSize === 'extraLarge' ? '1.1' : '1',
            },
            "& p": {
              scale: buttonSize === 'extraLarge' ? '1.2' : '1',
            },
          },
        }}
      >
        {iconComponent}
        { text && <p style={{marginLeft:'15%'}}>{text}</p>}
      </Button>
    </ThemeProvider>
  );
}

export default StyledButton;
