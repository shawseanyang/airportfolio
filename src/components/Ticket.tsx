import Container from 'react-bootstrap/Container';
import color from '../constants/colors';
import format from '../constants/format';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Ticket = () => (
  <Container>
  <Row>
  <Col
    style={{
      height: '400px',
      backgroundColor: color.FOREGROUND,
      borderRadius: format.BORDER_RADIUS,
    }}
  >

  </Col>
  </Row>
  </Container>
)

export default Ticket