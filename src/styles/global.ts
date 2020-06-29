import css from 'styled-jsx/css'

export default css.global`
  * {
    box-sizing: border-box;
    outline: none;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
    padding: 0;
    color: #333;
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Malgun Gothic', '맑은 고딕', Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.2px;
    -webkit-font-smoothing: antialiased;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: 0;
  }
`
