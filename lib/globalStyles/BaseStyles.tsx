import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.primary.palette.backgroundColor};
    color: ${props => props.theme.primary.palette.textColor.body};
    font-family: 'Anonymous Pro', monospace;
    font-weight: 400;
    padding: 0;
    margin: 0;
  }

  h1, .h1,
  h2, .h2,
  h3, .h3 {
    line-height: 1.5;
    margin: 0 0 1em;
    font-weight: 400;
    color: ${props => props.theme.primary.palette.textColor.heading};
    font-family: 'EB Garamond', serif;
    letter-spacing: 0.2px;
  }

  h1,
  .h1 {
    font-size: 2.8rem;
  }

  h2,
  .h2 {
    font-size: 2rem;
  }

  h3,
  .h3 {
    font-size: 1.5rem;
    letter-spacing: 0.4px;
  }

  p {
    line-height: 1.4;
  }
  
  a {
    position: relative;
    color: ${props => props.theme.primary.palette.linkColor.default.text};
    /* text-decoration: none; */

    /*
    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -2px;
    }

    &:before {
      border-bottom: 2px solid ${props => props.theme.primary.palette.linkColor.default.underline};
      width: 100%;
    }

    &:after {
      width: 0;
      border-bottom: 2px solid ${props => props.theme.primary.palette.linkColor.hover.underline};
      transition: all 0.2s;
    }

    &:hover {
      color: ${props => props.theme.primary.palette.linkColor.hover.text};
      
      &:after {
        width: 100%;
      }
    }
    */
  }
`;

export default GlobalStyles;;;;;