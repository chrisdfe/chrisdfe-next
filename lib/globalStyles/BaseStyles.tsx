import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.palette.backgroundColor};
    color: ${props => props.theme.palette.textColor.body.primary};
    font-family: 'Anonymous Pro', monospace;
    font-weight: 400;
    padding: 0;
    margin: 0;
  }

  h1, .h1,
  h2, .h2,
  h3, .h3 {
    line-height: 1.2;
    margin: 0 0 1em;
    font-weight: 400;
    color: ${props => props.theme.palette.textColor.heading.primary};
    font-family: 'EB Garamond', serif;
    letter-spacing: 0.2px;
  }

  h1,
  .h1 {
    font-size: 3.6rem;
  }

  h2,
  .h2 {
    font-size: 2.6rem;
  }

  h3,
  .h3 {
    font-size: 1.5rem;
    letter-spacing: 0.4px;
    /* font-weight: 600; */
  }

  p {
    line-height: 1.4;
  }
  
  a {
    position: relative;
    color: ${props => props.theme.palette.linkColor.default.text};
    text-decoration: none;

    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -2px;
    }

    &:before {
      border-bottom: 1px solid ${props => props.theme.palette.linkColor.default.underline};
      width: 100%;
    }

    &:after {
      width: 0;
      border-bottom: 1px solid ${props => props.theme.palette.linkColor.hover.underline};
      transition: all 0.2s;
    }

    &:hover {
      color: ${props => props.theme.palette.linkColor.hover.text};
      
      &:after {
        width: 100%;
      }
    }
  }
`;

export default GlobalStyles;