import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Text from '../typography/Text';
import Bold from '../typography/Bold';
import Caps from '../typography/Caps';
import Justified from '../typography/Justified';
import Symbol from '../typography/Symbol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import color from '../constants/colors';
import BigBoldHighlight from '../typography/BigBoldHighlight';
import BigHighlight from '../typography/BigHighlight';
import { Stack } from 'react-bootstrap';

export type AirplaneRangeProps = {
  start: Date | string;
  end: Date | string;
}

function getThreeLetterMonth(d: Date): string {
  return d.toLocaleString('en-us', { month: 'short' });
}

const DateFormatter = (props:{date: Date}) => (
  <Stack>
    <BigBoldHighlight>
      {getThreeLetterMonth(props.date)}
    </BigBoldHighlight>
    <BigHighlight>
      {props.date.getFullYear()}
    </BigHighlight>
  </Stack>
)

const Arc = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="138" viewBox="0 0 225 311" fill="none">
    <path d="M0.894531 3.01111C296.395 3.01111 294.895 308.011 0.894531 308.011" stroke="#254774" stroke-width="5" stroke-dasharray="20 20"/>
  </svg>
)

const AirplaneRange = (props: AirplaneRangeProps) => (
  <Container className={'px-0'}>
    {/* <Row>
      <Col style={{
        maxWidth: 'fit-content'
      }}>
        {
          typeof props.start === 'string'
          ? <Bold>{props.start}</Bold>
          : <DateFormatter date={props.start} />
        }
      </Col>
      <Col style={{
        textAlign: 'center',
        minWidth: 'fit-content',
        flexShrink: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Symbol><FontAwesomeIcon icon={faPlane} /></Symbol>
      </Col>
      <Col style={{
        maxWidth: 'fit-content'
      }}>
      {
          typeof props.end === 'string'
          ? <Bold>{props.end}</Bold>
          : <DateFormatter date={props.end} />
        }
      </Col>
    </Row> */}
    <Row>
      <Col>
      <Row>
        {
          typeof props.start === 'string'
          ? <BigBoldHighlight>{props.start}</BigBoldHighlight>
          : <DateFormatter date={props.start} />
        }
      </Row>
      <Row>
        {
          typeof props.end === 'string'
          ? <BigBoldHighlight>{props.end}</BigBoldHighlight>
          : <DateFormatter date={props.end} />
        }
      </Row>
      </Col>
      <Col>
        <Arc />
      </Col>
    </Row>
  </Container>
)

export default AirplaneRange