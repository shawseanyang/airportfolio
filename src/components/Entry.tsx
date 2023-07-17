import { Row } from "react-bootstrap";
import Ticket, { TicketProps } from "./Ticket/Ticket"

export type EntryProps = {
  ticket: TicketProps;
  bulletPoints: string[];
}

const Entry = (props: EntryProps) => {
  return (
    <Row>
      <Ticket {...props.ticket} />
      {props.bulletPoints.map((bulletPoint, index) => (
        <p key={index}>{bulletPoint}</p>
      ))}
    </Row>
  )
}

export default Entry;