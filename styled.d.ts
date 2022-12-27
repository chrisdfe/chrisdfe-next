import 'styled-components';

export type SpacingMap = { [key: number]: string; };

declare module 'styled-components' {
  export interface ThemeVariant {
    palette: {
      backgroundColor: string;
      textColor: {
        heading: string;
        body: string;
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
  };

  export interface DefaultTheme {
    spacing: SpacingMap;
    primary: ThemeVariant;
    secondary: ThemeVariant;
  }
}