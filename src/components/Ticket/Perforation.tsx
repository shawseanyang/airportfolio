import styled from 'styled-components';
import color from '../../constants/colors';
import format, { proportions } from '../../constants/format';

export type PerforationProps = {
  position: 'top' | 'bottom' | 'left' | 'right';
};

const PERFORATION_SIZE = 25;

const PerforationCircle = styled.div`
  height: ${PERFORATION_SIZE}px;
  width: ${PERFORATION_SIZE}px;
  border-radius: 50%;
  border: 5px solid ${color.FOREGROUND}; /* to remove clipping artifacts */
  background-color: ${color.FOREGROUND};
  position: absolute;
  filter: brightness(0.86); /* to match the drop shadow of the ticket */
`

// TODO: make it slice in the middle of space, not in the middle of another
// component.

const Perforation = (props: PerforationProps) => (
  <>
    {
      {
        'top': 
          <PerforationCircle style={{
            top: `-${PERFORATION_SIZE/2}px`,
            left: `50%`
          }} />,
        'bottom': 
          <PerforationCircle style={{
            bottom: `-${PERFORATION_SIZE/2}px`,
            left: `50%`
          }} />,
        'left': 
          <PerforationCircle style={{
            left: `-${PERFORATION_SIZE/2}px`,
            top: `50%`
          }} />,
        'right': 
          <PerforationCircle style={{
            right: `-${PERFORATION_SIZE/2}px`,
            top: `50%`
          }} />,
      }[props.position]
    }
  </>
);

export default Perforation