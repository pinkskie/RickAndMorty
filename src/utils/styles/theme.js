import { createTheme } from "@material-ui/core/styles";

const getPalette = () => {
  const light = localStorage.getItem("light");
  if (light === "true") { 
    return {
      primary: {
        main: "#43D049"
      },
      default: {
        main: "#22A2BD"
      },
      background: {
        default: "#F2F2F2",
        paper: "#E5E5E5"
      },
      secondary: {
        main: "#5B6975"
      }
    };
  } else {
    return {
      type: "dark",
      primary: {
        main: "#43D049"
      },
      default: {
        main: "#22A2BD"
      },
      background: {
        default: "#0B1E2D",
        paper: "#152A3A"
      },
      secondary: {
        main: "#5B6975"
      }
    };
  }
};

const palette = getPalette();

const theme = createTheme({
  palette,
  overrides: {
    MuiOutlinedInput:  {
      root: {
        borderRadius: "999rem",
        background: palette.background.paper
      },
      notchedOutline: {
        borderColor: "transparent",
      }
    },
    MuiBottomNavigationAction: {
      root: {
        color: palette.secondary.main
      }
    },
    MuiButton: {
      root: {
        borderRadius: "12px",
        textTransform: "inherit",
        padding: "12px"
      },
      containedPrimary:{
        color: "white",
        backgroundColor: palette.default.main,
        "&:hover": {
          backgroundColor: palette.default.main,
          "@media (hover: none)": {
            backgroundColor: palette.default.main,
          },
        }
      },
      outlinedPrimary: {
        color: palette.default.main,
        padding: "8px",
        border: `1px solid ${palette.default.main}`,
        "&:hover": {
          border: `1px solid ${palette.default.main}`,
          "@media (hover: none)": {
            border: `1px solid ${palette.default.main}`,
          },
        }
      },
    },
    MuiAvatar: {
      root: {
        width: 72,
        height: 72,
        marginRight:16
      },
      square: {
        borderRadius: 8
      }
    },
    MuiAppBar:  {
      colorDefault: {
        backgroundColor: palette.background.default
      }
    },
    MuiDivider: {
      light: {
        border: "1px solid #152A3A"
      }
    }
  }
});

export default theme;