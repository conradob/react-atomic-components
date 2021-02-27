import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      background: string;
      backgroundContrast: string;
      borderMain: string;
      boxBackground: string;
    };
  }
}
