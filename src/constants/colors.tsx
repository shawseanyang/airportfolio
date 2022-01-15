// YELLOW HIGHLIGHT: #F2B628
// BLUE HIGHLIGHT: #0D81D7

export type Theme = {
  BACKGROUND: string;
  FOREGROUND: string;
  MAIN: string;
  HIGHLIGHT: string;
}

export const darkMode: Theme = {
  BACKGROUND: '#04182E',
  FOREGROUND: '#0B223B',
  MAIN: '#FFFFFF',
  HIGHLIGHT: '#0D81D7',
}

const color: Theme = darkMode;

export default color