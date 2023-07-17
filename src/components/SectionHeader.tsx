import styled from "styled-components";
import { font, fontSize } from "../constants/fonts";
import color from "../constants/colors";

export type SectionHeaderProps = {
  title: string;
}

// Pixels to shift the section header down into the content by (allows the tickets to overlap onto the section header).
const DOWN_SHIFT = 100;

// Pixels to shift the section header up into the content above.
const UP_SHIFT = 100;

// TODO: fix.
// Counteracting a weird bug where all the content is shifted to the left a little.
const RIGHT_SHIFT = 10;

// The background of the section header, shifted down by DOWN_SHIFT
const Background = styled.div`
  background: ${color.BACKGROUND};
  position:relative;
  height: 200px;
  top: ${DOWN_SHIFT}px;
  width: 100%;
  right: -${RIGHT_SHIFT}px;
`

// To cover up the space left by the Background after its down-shifted
const CoverUp = styled.div`
  background: ${color.BACKGROUND};
  height: ${DOWN_SHIFT + UP_SHIFT}px;
  width: 100%;
  position: absolute;
  top: -${UP_SHIFT}px;
  right: -${RIGHT_SHIFT}px;
  z-index: -1;
`

const Title = styled.span`
  font-size: ${fontSize.SECTION_HEADER}px;
  font-weight: bold;
  font-family: ${font.TITLE};
  color: ${color.FOREGROUND};
  line-height: 1;
  position: absolute;
  bottom: -29px;
  left: -15px;
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