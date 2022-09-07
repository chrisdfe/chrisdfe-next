import 'styled-components';

export type SpacingMap = { [key: number]: string; };

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: SpacingMap,
    palette: {
      backgroundColor: string;
      textColor: {
        heading: {
          primary: string;
        },
        body: {
          primary: string;
        };
      };
      linkColor: {
        default: {
          text: string;
          underline: string;
        },
        hover: {
          text: string;
          underline: string;
        };
      };
      borderColor: string;
    };
  }
}