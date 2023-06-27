import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*,*::after,*::before{
    box-sizing: border-box;
}

img{
    
	max-width: 100%;
	display: block;
}

ul {

	list-style: none;
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;

}

a {
	text-decoration: none;
	color: inherit;
}

body {
	
	max-width: 100%; 
	margin: 0 auto;
    padding: 0;
    font-family: sans-serif;

	background-image: ${props =>
      props.dark
        ? 'url("/images/bg-desktop-dark.jpg")'
        : 'url("/images/bg-desktop-light.jpg")'};

	background-repeat: no-repeat;
	background-size: cover;
	background-position: top;
    position: fixed;

	background-color: ${props =>
      props.dark
        ? '#25273D'
        : '#FFFFFF'};

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
 
	}
`;

export { GlobalStyles };