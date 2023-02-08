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
// const BACKGROUND = "#f6f0ed";
// const FOREGROUND = "#333333";
// const FOREGROUND = "#2b071c";
// const FOREGROUND = "#044732";
// const FOREGROUND = "#74875d";

const CHARCOL = "#333333";

// const TOMATO = "#591925";
// const TOMATO = "#5b0e15";
const TOMATO = "#ca3a47";
const WHITE = "#ffffff";
// const CREAM_PEACH = "#ffded3";
const CREAM_PEACH = "#fff1ed";
const DESERT_SAND = "#f8cbbf";
const BLUE_BLACK = "#051718";
const OUTER_SPACE = "#194754";
const FERN = "#4bd376";

// const BACKGROUND_PRIMARY = "#edffff";
// const FOREGROUND_PRIMARY = "#00aa74";

const BACKGROUND_PRIMARY = "#111D1D";
// const BACKGROUND_PRIMARY = BLUE_BLACK;
// const FOREGROUND_PRIMARY = TOMATO;
// const FOREGROUND_PRIMARY = FERN;
const FOREGROUND_PRIMARY = "#cfeac9";

// const BACKGROUND_SECONDARY = TOMATO;
const BACKGROUND_SECONDARY = "#ffffff";
const FOREGROUND_SECONDARY = WHITE;

const spacing = [...new Array(10)].reduce((acc, _, index) =>
  ({ ...acc, [index + 1]: `${index + 1}rem` }),
  {}
);

const theme: DefaultTheme = {
  spacing,
  primary: {
    palette: {
      backgroundColor: BACKGROUND_PRIMARY,
      textColor: {
        heading: FOREGROUND_PRIMARY,
        body: FOREGROUND_PRIMARY
      },
      linkColor: {
        default: {
          text: FOREGROUND_PRIMARY + "dd",
          underline: FOREGROUND_PRIMARY + "dd"
        },
        hover: {
          text: FOREGROUND_PRIMARY,
          underline: FOREGROUND_PRIMARY
        }
      },
      borderColor: FOREGROUND_PRIMARY,
    },
  },
  secondary: {
    palette: {
      backgroundColor: BACKGROUND_SECONDARY,
      textColor: {
        heading: FOREGROUND_SECONDARY,
        body: FOREGROUND_SECONDARY
      },
      linkColor: {
        default: {
          text: FOREGROUND_SECONDARY,
          underline: FOREGROUND_SECONDARY + "44"
        },
        hover: {
          text: FOREGROUND_SECONDARY,
          underline: FOREGROUND_SECONDARY
        }
      },
      borderColor: FOREGROUND_SECONDARY,
    }
  }
};

export default theme;
