import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import color from '../constants/colors';
import Title from '../typography/Title';
import format from '../constants/format';

const Header = styled(Col)`
  background-color: ${color.HIGHLIGHT};
  border-radius: ${format.BORDER_RADIUS}px;
  border-top-right-radius: 0;
`
const Ghost = Col

const SectionHeader: React.FC = ({children}) => (
  <Container>
  <Row>
      <Header sm='true' md='5' className='px-4 p-2'><Title>{children}</Title></Header>
      <Ghost />
  </Row>
  </Container>
)

export default SectionHeader