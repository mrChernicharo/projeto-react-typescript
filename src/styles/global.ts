import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/githubBackground.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0; /* <== estudar box-model */
  }
  body {
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top; /* <== color | url | repeat |  l/r | top/bottom */
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px Roboto, sans-serif

  }

  #root {
    max-width: 960px;  /* <== max-width (e não width) pra não tretar com o formato Mobile */
    margin: 0 auto;
    padding: 40px 20px; /* <== boa jogada pro mobile, evta que o elemento encoste no canto da tela */

  button {
    cursor: pointer; /* <== coisa irritante, sem isso aqui o CSS não muda o cursor ao passar por botões */
  }

  }
  `;
