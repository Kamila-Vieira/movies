import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body{
    font-family: ${({ theme }) => theme.primaryFont};

    @keyframes loading {
      to {
        transform: rotate(1turn);
      }
    }
  }
  html, body, #root{
    //height: 100%;
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
`;
