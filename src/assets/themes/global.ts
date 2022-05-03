import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Sora', sans-serif;
  }

  body {
    background: #090c10;
    color: #eff2f6;
  }



  button {
    cursor: pointer;
  }

  body, input, select, textarea, button {
  font: 400 1rem sans-serif;  // 1rem = 16px
}

  @media (min-width: 720px) {
   html {
     font-size: 85.5% // vai gerar 14px
   }
}


  @media (min-width: 1080px) {
    html {
      font-size: 93.75% // vai gerar 15px
    }
}

`;