import Container from 'react-bootstrap/Container';
import color from '../../constants/colors';
import format from '../../constants/format';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Perforation from './Perforation';
import FollowMouse from '../FollowMouse';
import MediaQuery from 'react-responsive'
import TitleImage, { TitleImageProps } from './TitleImage';
import AirplaneRange, { AirplaneRangeProps } from '../AirplaneRange';
import BarcodeButton, { BarcodeButtonProps } from '../BarcodeButton';
import KeyValuePairs, { KeyValuePairsProps } from './KeyValuePairs';
import { Stack } from 'react-bootstrap';
import Title from '../../typography/Title';
import { getRandomRotationDegree } from '../../utils/rotate';
import RandomRotation from '../RandomRotation';

export type TicketProps = {
  title?: TitleImageProps | string;
  keyValuePairs?: KeyValuePairsProps;
  dateRange?: AirplaneRangeProps;
  barcode?: BarcodeButtonProps;
}

export const TICKET_WIDTH_PX = 300;

const TicketContainer = styled(Container)`
  background-color: ${color.MID};
  border-radius: ${format.BORDER_RADIUS}px;
  position: relative;
  transition: ${format.TRANSITION_DURATION}s;
  width: ${TICKET_WIDTH_PX}px;
  padding: ${format.PADDING_PX}px;
  overflow: hidden;
  filter: ${format.DROP_SHADOW};
`

const Center = styled.div`
  align-self: center;
`

const Ticket = (props: TicketProps) => {
  return (
    <FollowMouse>
      <RandomRotation>
        <TicketContainer
          fluid={format.MOBILE_BREAKPOINT}
          className={'p-5'}
        >
          <Stack gap={5}>
            <Center>
              {props.title &&
                (typeof props.title === 'string'
                  ? <Title>{props.title}</Title>
                  : <TitleImage {...props.title} />)}
            </Center>
            {props.keyValuePairs && <KeyValuePairs {...props.keyValuePairs} />}
            {props.dateRange && <AirplaneRange {...props.dateRange} />}
            {props.barcode && <BarcodeButton {...props.barcode} />}
          </Stack>
          <Perforation position={'left'}/>
          <Perforation position={'right'}/>
        </TicketContainer>
      </RandomRotation>
    </FollowMouse>
  )
}

export default Ticket