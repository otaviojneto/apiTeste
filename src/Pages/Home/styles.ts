import styled from "styled-components";

export const Container = styled.div`
  background: red;
  a {
    background: blue;
    color: white;
    text-decoration: none;

    &:hover {
      opacity: 0.4;
    }
  }
`;
