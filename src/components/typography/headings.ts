import styled from "styled-components";
import { Typography } from "@material-ui/core";

const Heading = styled(Typography)``;

const H1 = styled(Heading).attrs({ variant: "h1" })``;
const H2 = styled(Heading).attrs({ variant: "h2" })``;
const H3 = styled(Heading).attrs({ variant: "h3" })``;
const H4 = styled(Heading).attrs({ variant: "h4" })``;
const H5 = styled(Heading).attrs({ variant: "h5" })``;
const H6 = styled(Heading).attrs({ variant: "h6" })``;

export { Heading, H1, H2, H3, H4, H5, H6 };
