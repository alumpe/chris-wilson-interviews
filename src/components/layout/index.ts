import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  overflow-y: auto;
`;

export const SplitView = styled.div`
  padding: 2rem;
  flex-grow: 1;
  grid-column-gap: 2rem;
  display: grid;
  grid-template-columns: minmax(30rem, 40rem) minmax(40rem, auto);
  overflow-y: auto;
`;
