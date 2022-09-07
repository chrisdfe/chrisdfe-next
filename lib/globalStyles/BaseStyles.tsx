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
  }

  h1,
  h2,
  h3 {
    line-height: 1.2;
    margin: 0;
    font-weight: 400;
    color: ${props => props.theme.palette.textColor.heading.primary};
    font-family: 'EB Garamond', serif;
  }

  h1 {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
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