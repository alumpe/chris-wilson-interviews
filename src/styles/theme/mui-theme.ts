import { createTheme } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
/**
 * Personalized MuiTheme.
 * @see {@link https://material-ui.com/customization/default-theme/#explore} for all options.
 */
export const muiTheme = createTheme({
  palette: {
    type: "dark",
    primary: teal,
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
