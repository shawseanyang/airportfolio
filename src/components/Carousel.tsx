import { useState } from "react";
import { Col, Stack } from "react-bootstrap";
import styled from "styled-components";
import color from "../constants/colors";
import format, { poportions } from "../constants/format";
import FollowMouse from "./FollowMouse";

export type CarouselProps = {
  carouselImageSources: string[]
};

export function isCarouselProps(props: any): props is CarouselProps {
  return props.carouselImageSources !== undefined;
}

const ScrollContainer = styled.div`
  overflow-x: scroll;
  padding-bottom: 20px;
  &::-webkit-scrollbar {
    background: ${color.BACKGROUND};
  }
`

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  overflow: visible;
  height: 300px;
  transform: scale(0.97);
`

const ImageColumn = styled(Col)`
  height: 100%;
`

type ImageProps = {
  source: string;
}
const Image = (props: ImageProps) => {

  const [tilt] = useState<number>((Math.random() * format.MAX_TILT * 2) - format.MAX_TILT);
  const [isHover, setHover] = useState<boolean>(false);
  
  return (
    <ImageColumn xs={11} {...{[format.MOBILE_BREAKPOINT as string]: poportions.body}}>
      <img
        src={props.source}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          borderRadius: format.BORDER_RADIUS,
          transform: `rotate(${isHover ? tilt : -tilt}deg)`,
          transition: `${format.TRANSITION_DURATION}s`,
        }}
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)}
      />
    </ImageColumn>
  );
};

const Carousel = (props: CarouselProps) => (
  <ScrollContainer>
    <CarouselContainer>
      <Col xs={0} {...{[format.MOBILE_BREAKPOINT as string]: poportions.stub + poportions.space}} />
      <Stack gap={4} direction="horizontal">
        {props.carouselImageSources.map((imageSource, index) => (
            <Image key={index} source={imageSource} />
        ))}
      </Stack>
    </CarouselContainer>
  </ScrollContainer>
)
export default Carousel;