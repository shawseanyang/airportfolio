import { Col, Stack } from "react-bootstrap";
import Bold from "../../typography/Bold";
import Subtitle from "../../typography/Subtitle";
import AirplaneRange, { AirplaneRangeProps } from "../AirplaneRange";
import BarcodeButton, { BarcodeButtonProps } from "../BarcodeButton";
import { poportions  } from "./Ticket";

export type StubProps = {
  title: string;
  subtitle: string;
  range: AirplaneRangeProps;
  link?: BarcodeButtonProps;
}

const Stub = (props: StubProps) => (
  <Col xs={poportions.stub}>
    <Stack gap={4}>
      <Subtitle>{props.title}</Subtitle>
      <Bold>{props.subtitle}</Bold>
      <AirplaneRange 
        {...props.range}
      />
      {console.log(props.link)}
      {props.link && <BarcodeButton {...props.link} />}
    </Stack>
  </Col>
);

export default Stub