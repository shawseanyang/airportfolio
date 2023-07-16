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
import BigBoldCapsHighlight from '../typography/BigBoldCapsHighlight';
import BigHighlight from '../typography/BigHighlight';
import { Stack } from 'react-bootstrap';
import BoldHighlight from '../typography/BoldHighlight';

export type AirplaneRangeProps = {
  start: Date;
  end: Date;
}

function getThreeLetterMonth(d: Date): string {
  return d.toLocaleString('en-us', { month: 'short' });
}

function getHumanReadableDateDifference(startDate: Date, endDate: Date): string {
  const millisecondsPerSecond = 1000;
  const millisecondsPerMinute = millisecondsPerSecond * 60;
  const millisecondsPerHour = millisecondsPerMinute * 60;
  const millisecondsPerDay = millisecondsPerHour * 24;
  const millisecondsPerMonth = millisecondsPerDay * 30;
  const millisecondsPerYear = millisecondsPerDay * 365;

  const timeDifference = endDate.getTime() - startDate.getTime();
  const absoluteDifference = Math.abs(timeDifference);

  if (absoluteDifference < millisecondsPerMinute) {
    return `${Math.round(absoluteDifference / millisecondsPerSecond)} sec.`;
  } else if (absoluteDifference < millisecondsPerHour) {
    return `${Math.round(absoluteDifference / millisecondsPerMinute)} min.`;
  } else if (absoluteDifference < millisecondsPerDay) {
    return `${Math.round(absoluteDifference / millisecondsPerHour)} hr.`;
  } else if (absoluteDifference < millisecondsPerMonth) {
    return `${Math.round(absoluteDifference / millisecondsPerDay)} day`;
  } else if (absoluteDifference < millisecondsPerYear) {
    return `${Math.round(absoluteDifference / millisecondsPerMonth)} mo.`;
  } else {
    return `${Math.round(absoluteDifference / millisecondsPerYear)} yr.`;
  }
}

const DateFormatter = (props:{date: Date}) => (
  <Stack>
    <BigBoldCapsHighlight>
      {getThreeLetterMonth(props.date)}
    </BigBoldCapsHighlight>
    <BigHighlight>
      {props.date.getFullYear()}
    </BigHighlight>
  </Stack>
)

const VerticallyCenteredSvg = styled.svg`
  align-self: center;
  transform: rotate(2deg);
`

const Arc = () => (
  <VerticallyCenteredSvg xmlns="http://www.w3.org/2000/svg" width="100" height="138" viewBox="0 0 225 311" fill="none">
    <path d="M0.246094 3.28467C295.746 3.28467 294.246 308.285 0.246094 308.285" stroke="#254774" stroke-width="5" stroke-dasharray="20 20"/>
  </VerticallyCenteredSvg>
)

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 170px;
`

const Dates = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TopDate = styled.div`
`

const BottomDate = styled.div`
`

const ArcContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`

const AbsoluteCenterLeftStack = styled(Stack)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
`

const Centering = styled.span`
  text-align: center;
`

const Duration = (props: {start: Date, end: Date}) => (
  <AbsoluteCenterLeftStack>
    <Centering>
      <Symbol>
        <FontAwesomeIcon icon={faPlane} />
      </Symbol>
    </Centering>
    <BoldHighlight>
      {getHumanReadableDateDifference(props.start, props.end)}
    </BoldHighlight>
  </AbsoluteCenterLeftStack>
)

const AirplaneRange = (props: AirplaneRangeProps) => (
    <FlexContainer>
      <Dates>
        <TopDate>
          <DateFormatter date={props.start} />
        </TopDate>
        <BottomDate>
          <DateFormatter date={props.end} />
        </BottomDate>
      </Dates>
      <ArcContainer>
        <Arc />
        <Duration start={props.start} end={props.end}/>
      </ArcContainer>
    </FlexContainer>
)

export default AirplaneRange