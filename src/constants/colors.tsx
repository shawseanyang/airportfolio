// YELLOW HIGHLIGHT: #F2B628
// BLUE HIGHLIGHT: #0D81D7

export type Theme = {
  BACKGROUND: string;
  FOREGROUND: string;
  MAIN: string;
  HIGHLIGHT: string;
  SKY_IMAGE_COLOR: string;
    // Fall back background for the sky image on mobile devices, which do not support background-attachment: fixed
}

export const darkMode: Theme = {
  BACKGROUND: '#04182E',
  FOREGROUND: '#0B223B',
  MAIN: '#FFFFFF',
  HIGHLIGHT: '#0D81D7',
  SKY_IMAGE_COLOR: '#107FD7',
}

const color: Theme = darkMode;

export default color