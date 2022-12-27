import { DefaultTheme } from 'styled-components';

/* 
    // backgroundColor: "#131811",
    // backgroundColor: "#591925",
    // backgroundColor: "#2b071c",
    backgroundColor: "#ffffff",
    // backgroundColor: "#111e1e",
    // backgroundColor: "#1f2724",
    // backgroundColor: "#0e1611",
    textColor: "#fff",
    linkColor: "#f4c3b0",
    // linkColor: "#f9a777",
    // linkColor: "#e3c06d",
    // linkColor: "#74875d",
    // linkColor: "#ba3636",
    // linkColor: "#ffa347",
    borderColor: "#ffffff55",
    // linkColor: "#ffd8cc"
*/

const CHARCOL = "#333333";
const TOMATO = "#591925";

// const BACKGROUND = "#ffffff";
const BACKGROUND = "#edffff";
// const FOREGROUND = "#333333";
// const FOREGROUND = "#2b071c";
const FOREGROUND = "#044732";
// const FOREGROUND = "#74875d";

const theme: DefaultTheme = {
  spacing: [...new Array(10)].reduce((acc, _, index) =>
    ({ ...acc, [index + 1]: `${index + 1}rem` }),
    {}
  ),
  palette: {
    backgroundColor: BACKGROUND,
    textColor: {
      heading: {
        primary: FOREGROUND
      },
      body: {
        primary: FOREGROUND
      },
    },
    linkColor: {
      default: {
        text: FOREGROUND,
        underline: FOREGROUND + "44"
      },
      hover: {
        text: FOREGROUND,
        underline: FOREGROUND
      }
    },
    borderColor: FOREGROUND,
  }
};

export default theme;
