import React from "react";
import styled from "styled-components";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@material-ui/core";

interface OverridableButton {
  <C extends React.ElementType>(
    props: MuiButtonProps<C, { component?: C }>
  ): JSX.Element;
}

const ButtonComponent: OverridableButton = (props) => <MuiButton {...props} />;

export const Button = styled(ButtonComponent)``;
