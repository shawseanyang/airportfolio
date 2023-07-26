import styled from 'styled-components';
import { TICKET_WIDTH_PX } from './Ticket/Ticket';
import color from '../constants/colors';
import colors from '../constants/colors';
import format from '../constants/format';
import RandomRotation from './RandomRotation';

const HOLE_PUNCH_SIZE_PX = 35;
const HOLE_PUNCH_BORDER_SIZE_PX = 7;

const BagTagBackground = styled.div`
  background-color: ${color.MID_LIGHT};
  padding: ${format.PADDING_PX}px;
  padding-left: ${format.PADDING_PX + HOLE_PUNCH_SIZE_PX}px;
  border-radius: ${format.BORDER_RADIUS}px;
  filter: ${format.DROP_SHADOW};
  position: relative;
`

const HolePunch = styled.div`
  background-color: ${colors.FOREGROUND};
  width: ${HOLE_PUNCH_SIZE_PX}px;
  height: ${HOLE_PUNCH_SIZE_PX}px;
  border-radius: 50%;
  position: absolute;
  left: ${format.PADDING_PX / 2}px;
  top: 50%;
  transform: translateY(-50%);
  border: ${HOLE_PUNCH_BORDER_SIZE_PX}px solid ${colors.FOREGROUND};
  box-shadow: inset ${format.BOX_SHADOW};
`

const BagTag: React.FC = ({children}) => (
  <RandomRotation>
    <BagTagBackground>
      <HolePunch />
      {children}
    </BagTagBackground>
  </RandomRotation>
)
export default BagTag;