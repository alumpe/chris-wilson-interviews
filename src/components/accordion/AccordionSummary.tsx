import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  AccordionSummary as MuiAccordionSummary,
  AccordionSummaryProps as MuiAccordionSummaryProps,
} from "@material-ui/core";
import { Button } from "../buttons";

const AccordionSummaryComponent = (props: MuiAccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />
);

export const AccordionSummary = styled(AccordionSummaryComponent)`
  .MuiAccordionSummary-content {
    align-items: center;
  }

  ${Button} {
    margin-left: auto;
  }
`;
