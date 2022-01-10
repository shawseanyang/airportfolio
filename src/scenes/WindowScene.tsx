import Window from '../components/Window'
import SkyImage from '../media/sky.jpg'
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import color from '../constants/colors';

const InteriorWall = styled.div`
  background-color: ${color.BACKGROUND};
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

const SkyImageComponent2 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${SkyImage});
  z-index:-1;
  position: fixed;
  left: 0;
  top:0;
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

type InterpolateSettings = {
  start: {
    x: number,
    y: number
  }
  end: {
    x: number,
    y: number
  }
}

function interpolate(s: InterpolateSettings, progress: number): number {
  const slope = (s.end.y - s.start.y) / (s.end.x - s.start.x)
  const intercept = s.start.y - slope * s.start.x
  const proposal = slope * progress + intercept
  const min = Math.min(s.start.y, s.end.y)
  const max = Math.max(s.start.y, s.end.y)
  return Math.max(min, Math.min(max, proposal))
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
          <InteriorWall 
            style={{
              opacity:
                interpolate({
                  start: {x:0.66, y:1},
                  end: {x:1, y:0},
                }, progress)
          }}
          >
            <Stacker 
              style={{
                width: `${
                  interpolate({
                    start: {x:0.33, y:25},
                    end: {x:0.66, y:100},
                  }, progress)
                }%`
              }}
            >
              <Window 
                shadePercentage={
                  interpolate({
                    start: {x:0, y:60},
                    end: {x:0.33, y:20},
                  }, progress)
                }
              />
              <SkyImageComponent />
            </Stacker>
          </InteriorWall>
        )}
      </Scene>
      <SkyImageComponent2 />
    </Controller>
  )
}

export default WindowScene