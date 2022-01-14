import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import color from '../constants/colors';
import Title from '../typography/Title';
import format from '../constants/format';
import Bold from '../typography/Bold';

const Header = styled(Col)`
  background-color: ${color.HIGHLIGHT};
  border-radius: ${format.BORDER_RADIUS}px;
  border-top-right-radius: 0;
`
const Ghost = Col

export type SectionHeaderProps = {
  title: string;
  subtitle?: string;
}

const SectionHeader = (props: SectionHeaderProps) => (
  <Container fluid={format.MOBILE_BREAKPOINT} className={'px-3'}>
  <Row>
      <Header lg='6' className='px-4 p-2'>
        <Title>{props.title}</Title>
        {props.subtitle && <><br /><Bold>({props.subtitle})</Bold></>}
      </Header>
      <Ghost />
  </Row>
  </Container>
)

export default SectionHeader