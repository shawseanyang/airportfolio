import { Col, Stack } from "react-bootstrap";
import { poportions } from "./Ticket";
import format from "../../constants/format";

export type BodyProps = {
  children: React.ReactNode;
}

const Body = (props: BodyProps) => (
  <Col {...{[format.MOBILE_BREAKPOINT as string]: poportions.body}}>
    <Stack gap={3}>
      {props.children}
    </Stack>
  </Col>
);

export default Body