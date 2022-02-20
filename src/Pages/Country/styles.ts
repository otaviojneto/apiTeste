import styled from 'styled-components';

export const Container = styled.div`

  font-family: Arial, Helvetica, sans-serif;
  padding: 40px;
  
  h1 {
  font-size: 22px;
  }
  p {
    margin: 4px;
  }
  
  a {
    background-color: red;
    border-radius: 4px;
    color: white;
    text-decoration: none;
    padding: 10px;
  }
  `;

export const Content =styled.div`
background-color: #f2f2f2;
border: 1px solid blue;
border-radius: 4px;
margin-bottom: 20px;
max-width: 300px;
padding: 10px;

h2 {
  font-size: 20px;
}

div {
  align-items: center;
  display: flex;
  
  p {
    text-decoration: none;
  }

  img {
    margin-left: 10px;
    max-height: 30px;
    max-width: 80px;
  }
}
`