import { Row } from "react-bootstrap";
import Ticket, { TicketProps } from "./Ticket/Ticket"

export type EntryProps = {
  ticketProps: TicketProps;
  bulletPoints: string[];
}

const Entry = (props: EntryProps) => {
  return (
    <Row>
      <Ticket {...props.ticketProps}>
        {/* TODO: remove once Ticket is refactored to not take children */}
      </Ticket>
      {props.bulletPoints.map((bulletPoint, index) => (
        <p key={index}>{bulletPoint}</p>
      ))}
    </Row>
  )
}

export default Entry;