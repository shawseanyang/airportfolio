import { Col, Row } from "react-bootstrap";
import Ticket, { TicketProps } from "./Ticket/Ticket"
import format, { proportions } from "../constants/format";
import Text from "../typography/Text";

export type EntryProps = {
  ticket: TicketProps;
  bulletPoints: string[];
}

const Entry = (props: EntryProps) => {
  return (
    <Row>
      <Col {...{[format.MOBILE_BREAKPOINT as string]: proportions.TICKET}}>
        <Ticket {...props.ticket} />
      </Col>
      <Col {...{[format.MOBILE_BREAKPOINT as string]: proportions.SPACE}} />
      <Col {...{[format.MOBILE_BREAKPOINT as string]: proportions.BULLETS}}>
        {props.bulletPoints.map((bulletPoint, index) => (
          <Text key={index}>{bulletPoint}</Text>
        ))}
      </Col>
    </Row>
  )
}

export default Entry;