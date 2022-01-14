import { ContainerProps } from 'react-bootstrap/Container'

type KeysOfUnion<T> = T extends T ? keyof T: never;
type Breakpoints = ContainerProps["fluid"]

type Format = {
  BORDER_RADIUS: number;
  PADDING: number;
  MOBILE_BREAKPOINT: ContainerProps["fluid"];
  PIXELS_TO_MOVE_ON_HOVER: number;
  TRANSITION_DURATION: number;
  MAX_Z_INDEX: number;
  BOOTSTRAP_NUM_COLUMNS: number;
}

const format: Format = {
  BORDER_RADIUS: 15,
  PADDING: 5,
  MOBILE_BREAKPOINT: 'md',
  PIXELS_TO_MOVE_ON_HOVER: 5,
  TRANSITION_DURATION: 0.3,
  MAX_Z_INDEX: 1000,
  BOOTSTRAP_NUM_COLUMNS: 12,
}

export default format