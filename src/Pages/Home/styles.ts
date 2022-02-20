import styled from "styled-components";

export const Container = styled.div`
  background: gray;
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
  padding: 10px;

  div {
    margin-bottom: 50px;
  }

  a {
    background: blue;
    border-radius: 4px;
    color: white;
    font-family: arial;
    padding: 10px;
    transition: ease-in-out 0.2s;
    text-decoration: none;

    &:hover {
      color: #d3d3d3;
    }
  }
`;


