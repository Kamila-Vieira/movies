import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    white: string;
    gray200: string;
    gray300: string;
    primary: string;
    secondary: string;
    title: string;
    text: string;
    textMuted: string;
    primaryFont: string;
    secondaryFont: string;
  }
}
