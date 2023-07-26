// YELLOW HIGHLIGHT: #F2B628
// BLUE HIGHLIGHT: #0D81D7

export type Theme = {
  BACKGROUND: string;
  MID: string;
    // Boarding pass color
  MID_LIGHT: string;
    // Bag tag color
  FOREGROUND: string;
  MAIN: string;
  MID_HIGHLIGHT: string,
    // Text on bag tag
  HIGHLIGHT: string;
  SKY_IMAGE_COLOR: string;
    // Fall back background for the sky image on mobile devices, which do not support background-attachment: fixed
}

export const darkMode: Theme = {
  BACKGROUND: '#04182E',
  MID: '#0b223b',
  MID_LIGHT: '#2D568C',
  FOREGROUND: '#254774',
  MAIN: '#1f3661',
  MID_HIGHLIGHT: '#88AFE2',
  HIGHLIGHT: '#FFFFFF',
  SKY_IMAGE_COLOR: '#107FD7',
}

const color: Theme = darkMode;

export default color