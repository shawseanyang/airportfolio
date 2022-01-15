import { Col, Row, Stack } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import color from '../constants/colors';
import format from '../constants/format';
import Title from '../typography/Title';
import Window from './Window';

const StyledSocialIcon = styled(SocialIcon)`
  cursor: pointer;
  transition: ${format.TRANSITION_DURATION}s;
  &:hover {
    transform: translate(0, -${format.PIXELS_TO_MOVE_ON_HOVER}px);
  }
`

const Footer = () => (
  <>
    <Stack gap={5}>
      <Row>
        <Col />
        <Col style={{display: 'flex', justifyContent: 'center'}}>
          <StyledSocialIcon 
            bgColor={color.HIGHLIGHT}
            network={'linkedin'}
            url={'https://www.linkedin.com/in/shaw-sean-yang/'}
          />
        </Col>
        <Col style={{display: 'flex', justifyContent: 'center'}}>
          <StyledSocialIcon 
            bgColor={color.HIGHLIGHT}
            network={'github'}
            url={'https://github.com/shawseanyang'}
          />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col />
        <Col 
          {...{[format.MOBILE_BREAKPOINT as string]: 10}}
          style={{
            textAlign: 'center'
          }}
        >
          <Title>Thanks for visiting, safe travels!</Title>
        </Col>
        <Col />
      </Row>
      <Row />
      <Row />
    </Stack>
  </>
);
export default Footer;