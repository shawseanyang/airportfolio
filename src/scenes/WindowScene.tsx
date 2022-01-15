import Window from '../components/Window'
import SkyImage from '../media/sky.jpg'
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import color from '../constants/colors';
import Title from '../typography/Title';
import interpolate from '../utils/interpolate';
import format from '../constants/format';

const InteriorWall = styled.div`
  background-color: ${color.BACKGROUND};
  width:calc(100vw + 1px);
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
`

const InsideSky = styled.div`
  width: 90%;
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
  
  @media (max-width: ${format.MOBILE_BREAKPOINT_PIXELS}px) {
    background-image: none;
    background: ${color.SKY_IMAGE_COLOR};  
  }
`

const OutsideSky = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${SkyImage});
  z-index:-1;
  position: fixed;
  left: 0;
  top:0;
  background-size: cover;
  visibility: hidden;
  background-attachment: initial;
`

const Stacker = styled.div`
  position:relative;
`

const FadeOut = styled.div`
  position:absolute;
  top:0;
  left:0;
  width: calc(100vw + 1px);
  height:100vh;
  background-color:${color.BACKGROUND};
  z-index:2;
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

const WindowScene = () => {
  return (
      <Scene
        triggerHook="onLeave"
        duration="3200vh"
        pin
      >
        {(progress: number) => (
          <div>
              <InteriorWall 
                style={{
                  opacity:
                    interpolate({
                      start: {x:0.3, y:1},
                      end: {x:0.45, y:0},
                    }, progress)
              }}
              >
                <Stacker 
                  style={{
                    width: `${
                      interpolate({
                        start: {x:0.15, y:25},
                        end: {x:0.3, y:100},
                      }, progress)
                    }%`
                  }}
                >
                  <Window 
                    shadePercentage={
                      interpolate({
                        start: {x:0, y:60},
                        end: {x:0.15, y:20},
                      }, progress)
                    }
                  />
                  <InsideSky />
                </Stacker>
              </InteriorWall>
              <CloudTitle
                opacity={
                  interpolate({
                    start: {x:0.45, y:0},
                    end: {x:0.6, y:1},
                  }, progress)
                }
                offset={
                  interpolate({
                    start: {x:0.45, y:50},
                    end: {x:0.6, y:0},
                  }, progress)
                }
              >
                Welcome Aboard.
              </CloudTitle>
              <FadeOut style={{
                opacity:
                  interpolate({
                    start: {x:0.8, y:0},
                    end: {x:1, y:1},
                  }, progress),
              }} />
              <OutsideSky style={{
                visibility: progress < 1 ? 'visible' : 'hidden',
              }}/>
            </div>
        )}
      </Scene>
  )
}

export default WindowScene