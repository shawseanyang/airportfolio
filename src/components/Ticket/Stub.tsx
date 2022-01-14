import { Col, Stack } from "react-bootstrap";
import Bold from "../../typography/Bold";
import Subtitle from "../../typography/Subtitle";
import AirplaneRange, { AirplaneRangeProps } from "../AirplaneRange";
import BarcodeButton, { BarcodeButtonProps } from "../BarcodeButton";
import { poportions  } from "./Ticket";
import format from "../../constants/format";

export type StubProps = {
  title: string;
  subtitle?: string;
  range?: AirplaneRangeProps;
  link?: BarcodeButtonProps;
}

const Stub = (props: StubProps) => (
  <Col {...{[format.MOBILE_BREAKPOINT as string]: poportions.stub}}>
    <Stack gap={4}>
      <Subtitle>{props.title}</Subtitle>
      {props.subtitle && <Bold>{props.subtitle}</Bold>}
      {props.range && <AirplaneRange 
        {...props.range}
      />}
      {props.link && <BarcodeButton {...props.link} />}
    </Stack>
  </Col>
);

export default Stub