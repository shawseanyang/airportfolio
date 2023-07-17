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

export type TicketProps = {
  title?: TitleImageProps | string;
  keyValuePairs?: KeyValuePairsProps;
  dateRange?: AirplaneRangeProps;
  barcode?: BarcodeButtonProps;
}

function getRandomRotationDegree(): number {
  const minDegree = -5;
  const maxDegree = 5;

  // Generate a random number between minDegree and maxDegree
  const randomDegree = Math.floor(Math.random() * (maxDegree - minDegree + 1)) + minDegree;

  return randomDegree;
}

const TicketContainer = styled(Container)`
  background-color: ${color.MID};
  border-radius: ${format.BORDER_RADIUS}px;
  position: relative;
  transition: ${format.TRANSITION_DURATION}s;
  width: 300px;
  padding: 50px 50px;
  overflow: hidden;
  filter: ${format.DROP_SHADOW};
`

const Center = styled.div`
  align-self: center;
`

const Ticket = (props: TicketProps) => {
  return (
    <FollowMouse>
      <TicketContainer
        fluid={format.MOBILE_BREAKPOINT}
        className={'p-5'}
        style={{
          transform: `rotate(${getRandomRotationDegree()}deg)`
        }}
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
    </FollowMouse>
  )
}

export default Ticket