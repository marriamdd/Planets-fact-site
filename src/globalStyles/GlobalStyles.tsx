import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
    html{
        font-size: 62.5%;

    }
    body{

      
        background: #070724;
        font-family:  "League Spartan", sans-serif;
        background-image: url(/assets/background-stars.svg);
        background-position: center;
        background-size: cover;


    }
    p , h1 ,span {
        color: #FFF;
    }
   a{
    color: #FFF;
    text-decoration: none;
   }
   
`;
export default GlobalStyles;
