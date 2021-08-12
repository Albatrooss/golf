import { createGlobalStyle } from "styled-components";

export const theme = {
    color: {
        darkgreen: '#122710',
        fairway: '#749950',
        green: '#BCCD93',
        wood: '#141310',
        
        white: '#F2F2F2',
        black: '#040C04',
        grey: '#E9EDE9',
        darkred: '#751308',
    }
}
export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Georama', sans-serif;
    }
`;