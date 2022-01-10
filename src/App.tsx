import WindowScene from './scenes/WindowScene'
import styled from 'styled-components';
import color from './constants/colors';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${color.BACKGROUND};
  z-index:-1;
`;

const Big = styled.div`
  height: 100vh;
  color: white;
`

function App() {
  return (
    <>
      <Background />
      <WindowScene/>
      <Big>
        <div>REST OF THE WEBSITE</div>
      </Big>
    </>
  );
}

export default App;
