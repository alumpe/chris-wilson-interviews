import React from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider as MuiStylesProvider,
} from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { GlobalStyle } from "./global";
import "./fonts/roboto";

import { muiTheme } from "./theme/mui-theme";
import { combinedTheme } from "./theme/combined-theme";

interface StylesProviderProps {
  children: React.ReactNode;
}

const StylesProvider = ({ children }: StylesProviderProps) => (
  <MuiStylesProvider injectFirst>
    <MuiThemeProvider theme={muiTheme}>
      <StyledComponentsThemeProvider theme={combinedTheme}>
        <CssBaseline />
        <GlobalStyle />
        {children}
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  </MuiStylesProvider>
);

export default StylesProvider;
