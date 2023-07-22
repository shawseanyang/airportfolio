import { useState } from 'react';
import SplitFlapDisplay, {NUMERIC} from 'react-split-flap-display'
import styled from 'styled-components';

const SlipFlap = () => {

  const OverrideBootstrapDefault = styled.div`
  & * {
    box-sizing: initial !important;
  }
  `

  return (
    <OverrideBootstrapDefault>
      <SplitFlapDisplay
        background='#000000'
        borderColor='#dddddd'
        borderWidth='1px'
        characterSet={NUMERIC}
        characterWidth='1em'
        fontSize='2em'
        minLength={5}
        padDirection='left'
        step={200}
        textColor='#dddddd'
        value='94103'
        withSound={false}
      />
    </OverrideBootstrapDefault>
  )
}
export default SlipFlap;