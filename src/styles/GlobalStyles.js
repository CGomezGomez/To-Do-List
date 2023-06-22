import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  
    a {

        text-decoration: none;
        color: inherit;
        
    }

    body {
        
        height: 100vh;
        width: 100%;
        background-image: url("/images/bg-desktop-light.jpg");
        background-repeat: no-repeat;
        background-size: 100% 30%;
    }

    *{
    
    }

`

export {GlobalStyles}