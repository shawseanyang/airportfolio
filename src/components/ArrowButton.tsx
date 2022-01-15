import { faArrowUp, faArrowLeft, faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import color from '../constants/colors'
import styled, { withTheme } from 'styled-components'
import Stack from 'react-bootstrap/Stack'
import Bold from '../typography/Bold'
import { Transition, TransitionStatus } from 'react-transition-group';
import format from '../constants/format'

type Direction = 'n' | 's' | 'e' | 'w'

export type ArrowButtonProps = {
  direction: Direction;
  children: React.ReactNode;
  active?: boolean;
  activeBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  rounded?: boolean;
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

function directionToHoverMove(direction: Direction): [number, number] {
  let [x, y] = [0, 0]
  switch (direction) {
    case 'n':
      y = -format.PIXELS_TO_MOVE_ON_HOVER
      break;
    case 's':
      y = format.PIXELS_TO_MOVE_ON_HOVER
      break;
    case 'e':
      x = format.PIXELS_TO_MOVE_ON_HOVER
      break;
    case 'w':
      x = -format.PIXELS_TO_MOVE_ON_HOVER
      break;
  }
  return [x, y]
}

const ArrowButton = ({
  direction,
  children,
  active = false,
  activeBackgroundColor = color.HIGHLIGHT,
  backgroundColor = color.FOREGROUND,
  textColor = color.MAIN,
  rounded = true,
}: ArrowButtonProps) => {

  const StyledButton = styled(Button)`
    color: ${textColor};
    transition: ${format.TRANSITION_DURATION}s;
    border-top-right-radius: 0;
    ${!rounded ? 'border-radius: 0;' : ''}
    background-color: ${active ? activeBackgroundColor : backgroundColor};
    &:hover {
      transform: translate(${directionToHoverMove(direction)[0]}px, ${directionToHoverMove(direction)[1]}px);
      background-color: ${active ? activeBackgroundColor : backgroundColor};
      color: ${textColor};
    }
  `

  type TransitionStyle = {
    [key in TransitionStatus]: Object
  }

  const backgroundStyles: TransitionStyle = {
    entering: { backgroundColor: activeBackgroundColor },
    entered: { backgroundColor: activeBackgroundColor },
    exiting: { backgroundColor: backgroundColor },
    exited: { backgroundColor: backgroundColor },
    unmounted: {}
  };

  return (
    <Transition in={active} timeout={300}>
      {state => (
        <StyledButton size="lg" variant="custom" style={{...backgroundStyles[state]}}>
          <Stack direction="horizontal" gap={2}>
            {
              direction === 'e' 
              ? 
                <>
                  <Bold overrideColor={false}>{children}</Bold>
                  {directionToArrowIcon(direction)}
                </>
              : 
                <>
                  {directionToArrowIcon(direction)}
                  <Bold>{children}</Bold>
                </>
            }
          </Stack>
        </StyledButton>
      )}
  </Transition>
)}

export default ArrowButton