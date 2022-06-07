import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Rubik', sans-serif;
  }

  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
`