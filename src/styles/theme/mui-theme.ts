import { createTheme } from "@material-ui/core/styles";

/**
 * Personalized MuiTheme.
 * @see {@link https://material-ui.com/customization/default-theme/#explore} for all options.
 */
export const muiTheme = createTheme({
  palette: {
    type: "dark",
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
  overrides: {
    MuiTouchRipple: {
      root: { opacity: 0.5 },
    },
  },
});
