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
  width: 100%;
  height: 90%;
  background-image: url(${SkyImage});
  z-index:-1;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top:0;
  border-radius:500px;
  background-size: cover;
  background-attachment: fixed;
`

const Stacker = styled.div`
  position:relative;
`

const Animation = styled.div`
  height:100vh;
`

function progressToShadePercentage(progress: number) {
  return Math.max(60 - progress * 80, 20)
}

function progressToOpacity(progress: number) {
  return Math.min(1, 4.5 - progress * 5)
}

const WindowScene = () => {
  return (
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="300%"
        pin
      >
        {(progress: number) => (
          <InteriorWall>
            <Stacker style={{width: `${Math.max(20, 200 * progress - 40)}%`}}>
              <Window shadePercentage={progressToShadePercentage(progress)} opacity={progressToOpacity(progress)}/>
              <SkyImageComponent />
            </Stacker>
          </InteriorWall>
        )}
      </Scene>
    </Controller>
  )
}

export default WindowScene