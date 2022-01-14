import styled from 'styled-components';
import color from '../../constants/colors';
import { poportions } from './Ticket';
import format from '../../constants/format';

export type PerforationProps = {
  position: 'top' | 'bottom';
};

const PERFORATION_SIZE = 25;

const PerforationCircle = styled.div`
  height: ${PERFORATION_SIZE}px;
  width: ${PERFORATION_SIZE}px;
  border-radius: 50%;
  background-color: ${color.BACKGROUND};
  position: absolute;
`

const Perforation = (props: PerforationProps) => (
  <PerforationCircle style={{
    top: props.position === 'top' ? `-${PERFORATION_SIZE/2}px` : 'auto',
    bottom: props.position === 'top' ? 'auto' : `-${PERFORATION_SIZE/2}px`,
    left: `${100 * ( poportions.stub + poportions.space / 2) / format.BOOTSTRAP_NUM_COLUMNS}%`,
  }} />
);

export default Perforation