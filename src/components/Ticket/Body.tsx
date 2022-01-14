import { Col, Stack } from "react-bootstrap";
import { poportions } from "./Ticket";

export type BodyProps = {
  children: React.ReactNode;
}

const Body = (props: BodyProps) => (
  <Col xs={poportions.body}>
    <Stack gap={3}>
      {props.children}
    </Stack>
  </Col>
);

export default Body