import Window from '../components/Window'
import SkyImage from '../media/sky.jpg'
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';

const InteriorWall = styled.div`
  background-color: #0A213A;
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`

const SkyImageComponent = styled.div`
  width: 287px;
  height: 404px;
  background-image: url(${SkyImage});
  z-index:-1;
  position:absolute;
  top:0;
  left:0;
  border-radius:200px;
  background-size: cover;
`

const Stacker = styled.div`
  position:relative;
`

const Animation = styled.div`
  height:100vh;
`

function progressToShadePercentage(progress: number) {
  return 60 - progress * 40
}

const WindowScene = () => {
  return (
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="100%"
        pin
      >
        {(progress: number) => (
          <InteriorWall>
            <Stacker>
              <Window shadePercentage={progressToShadePercentage(progress)} />
              <SkyImageComponent />
            </Stacker>
          </InteriorWall>
        )}
      </Scene>
      <Animation />
    </Controller>
  )
}

export default WindowScene