import WindowScene from './scenes/WindowScene'
import styled from 'styled-components';
import color from './constants/colors';
import Stack from 'react-bootstrap/Stack';
import Title from './typography/Title';
import Highlight from './typography/Highlight';
import Container from 'react-bootstrap/Container';
import Navbar from './components/Navbar';
import useScrollSpy from 'react-use-scrollspy';
import { useRef } from 'react';
import SectionHeader from './components/SectionHeader';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ticket from './components/Ticket';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${color.BACKGROUND};
  z-index:-1;
`;

const Sections:React.FC = ({children}) => (
  <Container>
  <Row>
  <Col />
  <Col xs='12' xl='9'>
  <Stack gap={5}>
    {children}
  </Stack>
  </Col>
  <Col />
  </Row>
  </Container>
);

const Section = Stack

const sections = [
  {id: 'edu', title: 'Edu'},
  {id: 'work', title: 'Work'},
  {id: 'projects', title: 'Projects'},
  {id: 'skills', title: 'Skills'},
  {id: 'connecting-flights', title: 'Connecting Flights'},
]

function App() {

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  });

  return (
    <>
      <Background />
      <WindowScene />
      <Sections>
        <Section gap={3}>
          <Title>
            Hi! I'm Sean, and this is my <Highlight overrideFont={false}>Airportfolio</Highlight>
          </Title>
        </Section>
        <Navbar sections={sections} activeSection={activeSection}/>
        {
          sections.map((section, index) => (
            <Section key={section.id} ref={sectionRefs[index]} id={section.id} gap={3}>
              <SectionHeader>{section.title}</SectionHeader>
              <Ticket />
            </Section>
          ))
        }
      </Sections>
    </>
  );
}

export default App;
