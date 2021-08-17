import React from "react";
import styled from "styled-components";
import {
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
} from "@material-ui/core";

const AccordionComponent = (props: MuiAccordionProps) => (
  <MuiAccordion {...props} />
);

export const Accordion = styled(AccordionComponent)``;
