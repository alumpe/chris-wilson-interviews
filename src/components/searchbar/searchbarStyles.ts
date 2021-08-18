import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-bottom: 1rem;

  > * {
    margin: 0;
    box-sizing: border-box;
    padding: 4px;
  }
`;
