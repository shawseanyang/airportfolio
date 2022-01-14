import WindowScene from './scenes/WindowScene'
import styled from 'styled-components';
import color from './constants/colors';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import useScrollSpy from 'react-use-scrollspy';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import format from './constants/format';
import Content from './content/content';
import { useState, RefObject } from 'react';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${color.BACKGROUND};
  z-index:-1;
`;

const Blocks:React.FC = ({children}) => (
  <Container fluid={format.MOBILE_BREAKPOINT}>
  <Row>
  <Col />
  <Col lg={9}>
    <Stack gap={5}>
      {children}
    </Stack>
  </Col>
  <Col />
</Row>
  </Container>
);

function App() {

  const [refs, setRefs] = useState<RefObject<unknown>[]>([]);

  function updateRefs(r: RefObject<unknown>[]) {
    setRefs(r);
  }

  const activeLink = useScrollSpy({
    sectionElementRefs: refs as RefObject<HTMLElement>[],
    offsetPx: -80,
  });

  return (
    <>
      {console.log(refs)}
      <Background />
      <WindowScene />
      <Blocks>
        {
          Content({refs: refs, updateRefs: updateRefs, activeLink: activeLink})
            .map((block) => block)
        }
      </Blocks>
    </>
  );
}

export default App;
