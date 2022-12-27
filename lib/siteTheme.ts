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

// const BACKGROUND = "#ffffff";
// const BACKGROUND = "#edffff";
// const FOREGROUND = "#333333";
// const FOREGROUND = "#2b071c";
// const FOREGROUND = "#044732";
// const FOREGROUND = "#74875d";

// const CHARCOL = "#333333";

// const TOMATO = "#591925";
const TOMATO = "#5b0e15";
// const TOMATO = "#ca3a47";
const WHITE = "#ffffff";
// const CREAM_PEACH = "#ffded3";
const CREAM_PEACH = "#fff1ed";

const theme: DefaultTheme = {
  spacing: [...new Array(10)].reduce((acc, _, index) =>
    ({ ...acc, [index + 1]: `${index + 1}rem` }),
    {}
  ),
  primary: {
    palette: {
      backgroundColor: CREAM_PEACH,
      textColor: {
        heading: TOMATO,
        body: TOMATO
      },
      linkColor: {
        default: {
          text: TOMATO + "dd",
          underline: TOMATO + "dd"
        },
        hover: {
          text: TOMATO,
          underline: TOMATO
        }
      },
      borderColor: TOMATO,
    },
  },
  secondary: {
    palette: {
      backgroundColor: TOMATO,
      textColor: {
        heading: WHITE,
        body: WHITE
      },
      linkColor: {
        default: {
          text: WHITE,
          underline: WHITE + "44"
        },
        hover: {
          text: WHITE,
          underline: WHITE
        }
      },
      borderColor: WHITE,
    }
  }
};

export default theme;
