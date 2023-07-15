import Container from 'react-bootstrap/Container';
import color from '../../constants/colors';
import format, { poportions } from '../../constants/format';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Body, { BodyProps } from './Body';
import Perforation from './Perforation';
import Stub, { StubProps } from './Stub';
import FollowMouse from '../FollowMouse';
import MediaQuery from 'react-responsive'
import { TitleImageProps } from './TitleImage';
import { AirplaneRangeProps } from '../AirplaneRange';
import { BarcodeButtonProps } from '../BarcodeButton';
import { KeyValuePairsProps } from './KeyValuePairs';

export type TicketProps = {
  title: TitleImageProps | string;
  keyValuePairs: KeyValuePairsProps;
  dateRange: AirplaneRangeProps;
  barcode: BarcodeButtonProps;
}

const TicketContainer = styled(Container)`
  background-color: ${color.FOREGROUND};
  border-radius: ${format.BORDER_RADIUS}px;
  position: relative;
  transition: ${format.TRANSITION_DURATION}s;
`

const Ticket = (props: TicketProps) => {
  return (
    <FollowMouse>
      <TicketContainer
        fluid={format.MOBILE_BREAKPOINT}
        className={'p-5'}
      >
        {/* TODO: fill in */}
      </TicketContainer>
    </FollowMouse>
  )
}

export default Ticket