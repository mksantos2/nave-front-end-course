import { createGlobalStyle} from "styled-components"



export const Global = createGlobalStyle`
  html, body {
    background: ${({ theme }) => theme.body} ;
    color: ${({ theme }) => theme.text} ;
    font-family: Roboto, sans-serif;
    transition: all 0.50s linear;
  }

 `