import color from "../constants/colors";
import styled from "styled-components";
import format from "../constants/format";
import { Stack } from "react-bootstrap";
import BoldHighlight from "../typography/BoldHighlight";
import BoldForegroundCaps from "../typography/BoldForegroundCaps";

const BarcodeContainer = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Centering = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  transition: ${format.TRANSITION_DURATION}s;
  &:hover {
    transform: translate(${format.PIXELS_TO_MOVE_ON_HOVER}px, 0);
  }
  scrollbar-color: ${color.FOREGROUND} ${color.FOREGROUND};
`

const BarcodeBarFill = styled.div`
  background-color: ${color.FOREGROUND};
  height: 100%;
`

export type BarcodeBarProps = {
  pixels: number;
  paddingRight?: number;
  paddingLeft?: number;
};
const BarcodeBar = (props: BarcodeBarProps) => (
  <div style={{
    width: props.pixels,
    height: 50,
    flexShrink: 0,
  }}>
    <BarcodeBarFill />
  </div>
);

export type BarcodeButtonProps = {
  url: string;
  displayText: string;
}

const BarcodeButton = (props: BarcodeButtonProps) => (
    <Stack gap={1} as={'a'} href={props.url} style={{
      textDecorationColor: color.FOREGROUND,
    }}>
      <BoldForegroundCaps>{props.displayText}</BoldForegroundCaps>
      <BarcodeContainer target='_blank'>
        <BarcodeBar pixels={7}/>
        <BarcodeBar pixels={9}/>
        <BarcodeBar pixels={5}/>
        <BarcodeBar pixels={6}/>
        <BarcodeBar pixels={5}/>
        <BarcodeBar pixels={2}/>
        <BarcodeBar pixels={7}/>
        <BarcodeBar pixels={9}/>
        <BarcodeBar pixels={5}/>
        <BarcodeBar pixels={3}/>
        <BarcodeBar pixels={7}/>
        <BarcodeBar pixels={3}/>
        <BarcodeBar pixels={8}/>
        <BarcodeBar pixels={6}/>
        <BarcodeBar pixels={2}/>
        <BarcodeBar pixels={9} paddingLeft={0}/>
      </BarcodeContainer>
    </Stack>
);

export default BarcodeButton