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