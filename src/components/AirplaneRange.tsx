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

export type AirplaneRangeProps = {
  start: Date | string;
  end: Date | string;
}

function getThreeLetterMonth(d: Date): string {
  return d.toLocaleString('en-us', { month: 'short' });
}

const DateFormatter = (props:{date: Date}) => (
  <div style={{
    width: 'fit-content',
    margin: '0'
  }}>
    <Caps>
      <Justified text={getThreeLetterMonth(props.date)} />
    </Caps>
    <Text>
      {props.date.getFullYear()}
    </Text>
  </div>
)

const AirplaneRange = (props: AirplaneRangeProps) => (
  <Container className={'px-0'}>
    <Row>
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
    </Row>
  </Container>
)

export default AirplaneRange