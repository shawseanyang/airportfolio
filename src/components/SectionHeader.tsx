import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import color from '../constants/colors';
import Title from '../typography/Title';
import format from '../constants/format';
import Bold from '../typography/Bold';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Caps from '../typography/Caps';
import Historiated from '../typography/Historiated';

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
        <Stack direction='horizontal' gap={2}>
          <Historiated><FontAwesomeIcon icon={faArrowLeft} /></Historiated>
          <Historiated>{props.title[0]}</Historiated>
          <Stack gap={0} style={{justifyContent: 'center'}}>
            <Caps><Bold>{props.title.slice(1)}</Bold></Caps>
            <span style={{color: color.FOREGROUND}}>
              {props.subtitle && <Bold overrideColor={false}>{props.subtitle}</Bold>}
            </span>
          </Stack>
        </Stack>
      </Header>
      <Ghost />
  </Row>
  </Container>
)

export default SectionHeader