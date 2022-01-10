import {ReactComponent as Frame} from '../media/window_frame.svg';
import styled from 'styled-components';

const MAX_SHADE_HEIGHT = 372
const HANDLE_OFFSET = 70

const SVGContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

const PositionRelative = styled.div`
  position: relative;
`

type ShadeProps = {
  shadePercentage: number
}

const Shade = (props: ShadeProps) => {

  const shadePixelPosition = shadePercentToPixels(props.shadePercentage)
  const handlePixelPosition = shadePixelPosition + HANDLE_OFFSET

  return (
    <SVGContainer>
      <svg width="287" height={shadePixelPosition} viewBox={`0 0 287 ${shadePixelPosition}`}>
        <defs>
          <clipPath id="clip-path">
            <rect id="Cut" width="287" height={shadePixelPosition} transform="translate(3213 132)" fill="#163253"/>
          </clipPath>
        </defs>
        <g id="Shade_and_Handle" data-name="Shade and Handle" transform="translate(-332 -100)">
          <g id="Shade" transform="translate(-2881 -32)" clip-path="url(#clip-path)">
            <rect id="Shade-2" data-name="Shade" width="242" height="341" rx="105" transform="translate(3235 163)" fill="#163253"/>
          </g>
          <path id="Handle" d="M0,0H109a0,0,0,0,1,0,0V0A11,11,0,0,1,98,11H11A11,11,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform={`translate(421 ${handlePixelPosition})`} fill="#214269"/>
        </g>
      </svg>
    </SVGContainer>
  )
}

type WindowProps = {
  shadePercentage: number
}

function shadePercentToPixels(shadePercentage: number) {
  return shadePercentage * (MAX_SHADE_HEIGHT / 100)
}

const Window = (props: WindowProps) =>
  <PositionRelative>
    <Frame />
    <Shade shadePercentage={props.shadePercentage} />
  </PositionRelative>

export default Window;
