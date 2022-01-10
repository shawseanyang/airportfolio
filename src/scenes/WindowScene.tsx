import Window from '../components/Window'
import SkyImage from '../media/sky.jpg'
import { useState } from 'react'
import styled from 'styled-components';

const InteriorWall = styled.div`
  position:fixed;
  top:0;
  left:0;
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

const WindowScene = () => {
  const [shadePercentage, setShadePercentage] = useState(60)
  return (
    <>
      <InteriorWall>
        <Stacker>
          <Window shadePercentage={shadePercentage} />
          <SkyImageComponent />
        </Stacker>
      </InteriorWall>
    </>
  )
}

export default WindowScene