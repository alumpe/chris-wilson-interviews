import { Theme as MuiTheme } from "@material-ui/core";

declare module "styled-components" {
  export interface DefaultTheme extends MuiTheme {}
}
