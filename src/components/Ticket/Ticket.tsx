import Container from 'react-bootstrap/Container';
import color from '../../constants/colors';
import format from '../../constants/format';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Text from '../../typography/Text';
import Stack from 'react-bootstrap/Stack';
import Bold from '../../typography/Bold';
import AirplaneRange, { AirplaneRangeProps } from '../AirplaneRange';
import Subtitle from '../../typography/Subtitle';
import BarcodeButton, { BarcodeButtonProps } from '../BarcodeButton';
import Body, { BodyProps } from './Body';
import Perforation from './Perforation';
import Stub, { StubProps } from './Stub';

export const poportions = ((proposal = 
  {
    stub: 3,
    space: 1,
    body: 8
  }) => {
  if(Object.values(proposal).reduce((sum, current) => sum + current, 0) !== format.BOOTSTRAP_NUM_COLUMNS) {
    throw new Error('Ticket proportions must sum to the default number of columns in the Bootstrap grid system');
  }
  return proposal;
})();

export type TicketProps = StubProps & BodyProps

 // TicketProps but replace children with a string
export type ParsableTicketProps =
  Omit<TicketProps, 'children'> & {
    text: string;
}

const TicketContainer = styled(Container)`
  background-color: ${color.FOREGROUND};
  border-radius: ${format.BORDER_RADIUS}px;
  position: relative;
  transition: ${format.TRANSITION_DURATION}s;
  &:hover {
    transform: scale(1.01);
  }
`

const Ticket = (props: TicketProps) => (
  <TicketContainer
    fluid={format.MOBILE_BREAKPOINT}
    className={'p-5'}
  >
    <Row>
      <Stub {...props} />
      <Col xs={poportions.space} />
      <Body {...props} />
    </Row>
    <Perforation position={'top'} />
    <Perforation position={'bottom'} />
  </TicketContainer>
)

export default Ticket