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
import { useState, RefObject, useRef } from 'react';
import Footer from './components/Footer';
import { Controller } from 'react-scrollmagic';

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
  const [refsPopulated, setRefsPopulated] = useState(false);

  function updateRefs(r: RefObject<unknown>[]) {
    if (!refsPopulated) {
      setRefs(r);
      setRefsPopulated(true);
    }
  }

  const activeLink = useScrollSpy({
    sectionElementRefs: refs as RefObject<HTMLElement>[],
    offsetPx: -80,
  });

  // Set background
  document.body.style.backgroundColor = color.BACKGROUND;

  return (
    <>
      <Controller>
        {/* ScrollMagic Controller must be the root element of the page, 
          which instructs it to attach to the page's scroll position */}
          <WindowScene />
          <Blocks>
            {
              Content({refs: refs, updateRefs: updateRefs, activeLink: activeLink})
                .map((block) => block)
            }
            <Footer />
          </Blocks>
      </Controller>
    </>
  );
}

export default App;
