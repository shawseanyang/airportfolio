import Window from '../components/Window'
import SkyImage from '../media/sky.jpg'
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import color from '../constants/colors';
import Title from '../typography/Title';

const InteriorWall = styled.div`
  background-color: ${color.BACKGROUND};
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
`

const InsideSky = styled.div`
  width: 100%;
  height: 90%;
  background-image: url(${SkyImage});
  z-index:1;
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

const OutsideSky = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${SkyImage});
  z-index:-1;
  position: fixed;
  left: 0;
  top:0;
  background-size: cover;
  background-attachment: fixed;
  visibility: hidden;
`

const Stacker = styled.div`
  position:relative;
`

type CloudTitleProps = {
  children: React.ReactNode;
  opacity: number;
  offset: number;
}

const CloudTitle = (props: CloudTitleProps) => {
  return (
    <div style={{
      opacity: props.opacity,
      position: 'absolute',
      top: `calc(15% - ${props.offset}px)`,
      left: '15%',
    }}>
      <Title>
        {props.children}
      </Title>
    </div>
  )
}

const FadeOut = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:${color.BACKGROUND};
  z-index:2;
`

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
        duration="600%"
        pin
      >
        {(progress: number) => (
          <div>
              <InteriorWall 
                style={{
                  opacity:
                    interpolate({
                      start: {x:0.4, y:1},
                      end: {x:0.6, y:0},
                    }, progress)
              }}
              >
                <Stacker 
                  style={{
                    width: `${
                      interpolate({
                        start: {x:0.2, y:25},
                        end: {x:0.4, y:100},
                      }, progress)
                    }%`
                  }}
                >
                  <Window 
                    shadePercentage={
                      interpolate({
                        start: {x:0, y:60},
                        end: {x:0.2, y:20},
                      }, progress)
                    }
                  />
                  <InsideSky />
                </Stacker>
              </InteriorWall>
              <CloudTitle
                opacity={
                  interpolate({
                    start: {x:0.6, y:0},
                    end: {x:0.8, y:1},
                  }, progress)
                }
                offset={
                  interpolate({
                    start: {x:0.6, y:50},
                    end: {x:0.8, y:0},
                  }, progress)
                }
              >
                Welcome Aboard.
              </CloudTitle>
              <FadeOut style={{
                opacity:
                  interpolate({
                    start: {x:0.9, y:0},
                    end: {x:1, y:1},
                  }, progress),
              }} />
              <OutsideSky style={{
                visibility: progress < 1 ? 'visible' : 'hidden',
              }}/>
            </div>
        )}
      </Scene>
    </Controller>
  )
}

export default WindowScene