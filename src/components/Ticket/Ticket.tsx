import Container from 'react-bootstrap/Container';
import color from '../../constants/colors';
import format from '../../constants/format';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Body, { BodyProps } from './Body';
import Perforation from './Perforation';
import Stub, { StubProps } from './Stub';
import FollowMouse from '../FollowMouse';
import MediaQuery from 'react-responsive'

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
`

const Ticket = (props: TicketProps) => {
  return (
    <FollowMouse>
      <TicketContainer
        fluid={format.MOBILE_BREAKPOINT}
        className={'p-5'}
      >
        <Row>
          <Stub {...props} />
          <Col
          {...{[format.MOBILE_BREAKPOINT as string]: poportions.space}}
          style={{
            minHeight: '50px'
          }}
          />
          <Body {...props} />
        </Row>
        <MediaQuery minWidth={format.MOBILE_BREAKPOINT_PIXELS}>
          {/* Desktop */}
          <Perforation position={'top'} />
          <Perforation position={'bottom'} />
        </MediaQuery>
        <MediaQuery maxWidth={format.MOBILE_BREAKPOINT_PIXELS}>
          {/* Mobile */}
          <Perforation position={'left'} />
          <Perforation position={'right'} />
        </MediaQuery>
      </TicketContainer>
    </FollowMouse>
  )
}

export default Ticket