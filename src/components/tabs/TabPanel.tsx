import React from "react";
import styled from "styled-components";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanelComponent = ({
  children,
  value,
  index,
  ...rest
}: TabPanelProps) => {
  return (
    <div role="tabpanel" hidden={value !== index} {...rest}>
      {children}
    </div>
  );
};

export const TabPanel = styled(TabPanelComponent)`
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;
