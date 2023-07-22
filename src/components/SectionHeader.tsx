import styled from "styled-components";
import { font, fontSize } from "../constants/fonts";
import color from "../constants/colors";
import format from "../constants/format";

export type SectionHeaderProps = {
  title: string;
}

// View-max units to shift the section header down into the content by (allows the tickets to overlap onto the section header).
const DOWN_SHIFT = 7;

// View-max units to shift the section header up into the content above.
export const UP_SHIFT = 7;

// The background of the section header, shifted down by DOWN_SHIFT
const Background = styled.div`
  background: ${color.BACKGROUND};
  position:relative;
  height: ${DOWN_SHIFT + UP_SHIFT}vmax;
  top: ${DOWN_SHIFT}vmax;
  width: 100%;
`

// To cover up the space left by the Background after its down-shifted
const CoverUp = styled.div`
  background: ${color.BACKGROUND};
  height: ${DOWN_SHIFT + UP_SHIFT}vmax;
  width: 100%;
  position: absolute;
  top: -${UP_SHIFT}vmax;
  z-index: -1;
`

const Title = styled.span`
  font-size: 15vw;
  font-weight: bold;
  font-family: ${font.TITLE};
  color: ${color.FOREGROUND};
  line-height: 1;
  position: absolute;
  bottom: -2.5vw;
  left: -1.5vw;
`

// A position-relative container for the cover up to anchor against
const Anchor = styled.div`
  position: relative;
`

const SectionHeader = (props: SectionHeaderProps) => (
  <Anchor>
    <CoverUp />
    <Background>
      <Title>
        {props.title}
      </Title>
    </Background>
  </Anchor>
)

export default SectionHeader