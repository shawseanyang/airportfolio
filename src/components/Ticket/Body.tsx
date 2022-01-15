import { Col, Stack } from "react-bootstrap";
import { poportions } from "../../constants/format";
import format from "../../constants/format";

export type BodyProps = {
  children: React.ReactNode;
  includeStack?: boolean;
}

const Body = ({children, includeStack = true}: BodyProps) => (
  <Col {...{[format.MOBILE_BREAKPOINT as string]: poportions.body}}>
    {
      includeStack ? 
        <Stack gap={3}>
          {children}
        </Stack>
      : children
    }
  </Col>
);

export default Body