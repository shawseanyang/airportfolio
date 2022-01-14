import { ContainerProps } from 'react-bootstrap/Container'

type KeysOfUnion<T> = T extends T ? keyof T: never;
type Breakpoints = ContainerProps["fluid"]

type Format = {
  BORDER_RADIUS: number;
  PADDING: number;
  MOBILE_BREAKPOINT: ContainerProps["fluid"];
  MOBILE_BREAKPOINT_PIXELS: number;
  PIXELS_TO_MOVE_ON_HOVER: number;
  TRANSITION_DURATION: number;
  MAX_Z_INDEX: number;
  BOOTSTRAP_NUM_COLUMNS: number;
}

const format: Format = {
  BORDER_RADIUS: 15,
  PADDING: 5,
  MOBILE_BREAKPOINT: 'md',
  MOBILE_BREAKPOINT_PIXELS: 768, 
    /*
      {name: 'xs', value: 0},
      {name: 'sm', value: 576},
      {name: 'md', value: 768},
      {name: 'lg', value: 992},
      {name: 'xl', value: 1200}
    */
  PIXELS_TO_MOVE_ON_HOVER: 5,
  TRANSITION_DURATION: 0.3,
  MAX_Z_INDEX: 1000,
  BOOTSTRAP_NUM_COLUMNS: 12,
}

export default format