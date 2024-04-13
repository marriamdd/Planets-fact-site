import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html{
        font-size: 62.5%;
    }
    body{
        @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
        box-sizing: border-box;
        background: #070724;
        font-family:  "League Spartan", sans-serif;


    }
    p , h1 ,span {
        color: #FFF;
    }
   
`;
export default GlobalStyles;
