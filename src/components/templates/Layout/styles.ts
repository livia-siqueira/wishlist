import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1.2rem;

  h1 {
    font-weight: bold;
    font-size: 1.4rem;
  }
`;

export const AreaLinks = styled.div`
  display: flex;
  align-self: start;
  padding-left: 5rem;
  a {
    font-weight: bold;
    font-size: 1.5rem;
    align-self: start;
  }
`;
