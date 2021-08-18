import React from "react";
import styled from "styled-components";
import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from "@material-ui/core";

interface OverridableIconButton {
  <C extends React.ElementType>(
    props: MuiIconButtonProps<C, { component?: C }>
  ): JSX.Element;
}

const IconButtonComponent: OverridableIconButton = (props) => (
  <MuiIconButton {...props} />
);

export const IconButton = styled(IconButtonComponent)``;
