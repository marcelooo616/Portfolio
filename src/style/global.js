import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

    :root{
        --color-primary: #000000;
        --color-secundary: #c8ff00;
        --color-complement-one: #fa023c;
        --color-complement-two: grey;
        --font-primary: 'Montserrat', sans-serif;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .link{
        text-decoration: none;
        color: var(--cor-secundary);
        position: relative;
        
    }

    .link::after{
        content: " ";
        width: 0%;
        height: 1px;
        background-color:  #c8ff00;
        position: absolute;
        bottom: 0;
        left: 0;
        transition:  0.5s ease-in-out;
    }

    .link:hover::after {
        width: 100%;
        border-radius: 20px;
    }


`