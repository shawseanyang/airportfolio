import color from "../constants/colors";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import format from "../constants/format";
import Bold from "../typography/Bold";
import Underline from "../typography/Underline";

const FlexLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  transition: ${format.TRANSITION_DURATION}s;
  cursor: pointer;
  &:hover > * {
    color: ${color.HIGHLIGHT};
  }
`

const ButtonItself = styled.div`
  color: ${color.FOREGROUND};
  transition: ${format.TRANSITION_DURATION}s;
  border-radius: 0;
  background-color: ${color.BACKGROUND};
  height: 50px;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 50px;
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
  background-color: ${color.BACKGROUND};
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
    paddingLeft: props.paddingRight ? props.paddingRight : 4,
    paddingRight: props.paddingLeft ? props.paddingRight : 4,
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
    <Centering>
      <FlexLink href={props.url} target='_blank'>
        <BarcodeBar pixels={18} paddingRight={0}/>
        <BarcodeBar pixels={13}/>
        <BarcodeBar pixels={16}/>
        <BarcodeBar pixels={13}/>
        <BarcodeBar pixels={20}/>
        <BarcodeBar pixels={16}/>
        <ButtonItself>
        <Underline><Bold overrideColor={false}>{props.displayText}</Bold></Underline>
        </ButtonItself>
        <BarcodeBar pixels={13}/>
        <BarcodeBar pixels={11}/>
        <BarcodeBar pixels={20}/>
        <BarcodeBar pixels={13}/>
        <BarcodeBar pixels={16}/>
        <BarcodeBar pixels={12}/>
        <BarcodeBar pixels={11} paddingLeft={0}/>
      </FlexLink>
    </Centering>
);

export default BarcodeButton