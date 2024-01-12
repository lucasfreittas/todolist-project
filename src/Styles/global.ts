import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body{
        background-color: ${({theme}) => theme.COLORS.GRAY_600};
        color: ${({theme}) => theme.COLORS.GRAY_300};
        font-family: 'Inter', sans-serif;
    }

    a, button{
        text-decoration: none;
        cursor: pointer;
        transition: filter 0.2s;
        font-family: 'Inter', sans-serif;
    }

`;