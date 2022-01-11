import { faArrowUp, faArrowLeft, faArrowRight, faArrowDown, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import color from '../constants/colors'
import styled from 'styled-components'
import Stack from 'react-bootstrap/Stack'
import Bold from '../typography/Bold'
import { Transition, TransitionStatus } from 'react-transition-group';

type Direction = 'n' | 's' | 'e' | 'w'

export type ArrowButtonProps = {
  direction: Direction;
  children: React.ReactNode;
  active?: boolean;
}

function directionToArrowIcon(direction: Direction) {
  let name = faArrowUp;
  switch (direction) {
    case 'n':
      name = faArrowUp
      break;
    case 's':
      name = faArrowDown
      break;
    case 'e':
      name = faArrowRight
      break;
    case 'w':
      name = faArrowLeft
      break;
  }
  return <FontAwesomeIcon icon={name} />
}

const PIXELS_TO_MOVE_ON_HOVER = 5;

function directionToHoverMove(direction: Direction): [number, number] {
  let [x, y] = [0, 0]
  switch (direction) {
    case 'n':
      y = -PIXELS_TO_MOVE_ON_HOVER
      break;
    case 's':
      y = PIXELS_TO_MOVE_ON_HOVER
      break;
    case 'e':
      x = PIXELS_TO_MOVE_ON_HOVER
      break;
    case 'w':
      x = -PIXELS_TO_MOVE_ON_HOVER
      break;
  }
  return [x, y]
}

const ArrowButton = ({
  direction,
  children,
  active = false,
}: ArrowButtonProps) => {

  const StyledButton = styled(Button)`
    color: ${color.MAIN};
    transition: 0.3s;
    border-top-right-radius: 0;
    &:hover {
      transform: translate(${directionToHoverMove(direction)[0]}px, ${directionToHoverMove(direction)[1]}px);
      background-color: ${active ? color.HIGHLIGHT : color.FOREGROUND};
      color: ${color.MAIN};
    }
  `

  type TransitionStyle = {
    [key in TransitionStatus]: Object
  }

  const backgroundStyles: TransitionStyle = {
    entering: { backgroundColor: color.HIGHLIGHT },
    entered: { backgroundColor: color.HIGHLIGHT },
    exiting: { backgroundColor: color.FOREGROUND },
    exited: { backgroundColor: color.FOREGROUND },
    unmounted: {}
  };

  return (
    <Transition in={active} timeout={300}>
      {state => (
        <StyledButton size="lg" variant="custom" style={{...backgroundStyles[state]}}>
          <Stack direction="horizontal" gap={1}>
            {directionToArrowIcon(direction)}
            <Bold>
              {children}
            </Bold>
          </Stack>
        </StyledButton>
      )}
  </Transition>
)}

export default ArrowButton