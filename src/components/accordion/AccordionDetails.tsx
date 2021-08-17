import React from "react";
import styled from "styled-components";
import {
  AccordionDetails as MuiAccordionDetails,
  AccordionDetailsProps as MuiAccordionDetailsProps,
} from "@material-ui/core";

const AccordionDetailsComponent = (props: MuiAccordionDetailsProps) => (
  <MuiAccordionDetails {...props} />
);

export const AccordionDetails = styled(AccordionDetailsComponent)``;
