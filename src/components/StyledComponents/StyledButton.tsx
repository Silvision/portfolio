import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import { createTheme } from "@mui/material/styles";

type StyledButtonProps = {
  icon: string;
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
          style: { fontSize: 80, width: "100%", height: "100%" }
        }
      ]
    }
  }
});

function StyledButton({ icon, buttonColor, buttonSize}: StyledButtonProps) {

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
        <Icon sx={{ color: "inherit" }}>{icon}</Icon>
      </Button>
    </ThemeProvider>
  );
}

export default StyledButton;
