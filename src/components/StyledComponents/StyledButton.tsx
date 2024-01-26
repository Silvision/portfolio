import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import { createTheme } from "@mui/material/styles";
import React, { ReactElement, useState } from "react";

type StyledButtonProps = {
  icon: React.ReactNode;
  buttonColor: 'darkButtons' | 'playButton';
  buttonSize: 'small' | 'medium' | 'large' | 'extraLarge';
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
      light:"#000000",
      dark:"",
      contrastText:"#000000",
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

function StyledButton({ icon, buttonColor, buttonSize}: StyledButtonProps) {
  let iconComponent;
  // Check if it's a string for normal icons
  if (typeof icon === 'string'){
    iconComponent = <Icon style={{scale: buttonSize === 'extraLarge' ? "300%" : "100%"}}>{icon}</Icon>
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
          "&:hover": {
            "& .MuiIcon-root": {
              color: theme.palette[buttonColor].light,
            },
          },
        }}
      >
        {iconComponent}
      </Button>
    </ThemeProvider>
  );
}

export default StyledButton;
