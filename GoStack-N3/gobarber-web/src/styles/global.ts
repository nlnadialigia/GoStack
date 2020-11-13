import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:none;
  }

  body{
    background: #423F4D;
    color: #F4EDE8;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }
`;
