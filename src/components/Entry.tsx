import { Col, Row, Stack } from "react-bootstrap";
import Ticket, { TicketProps } from "./Ticket/Ticket"
import format, { proportions } from "../constants/format";
import Text from "../typography/Text";
import styled from "styled-components";

export type EntryProps = {
  ticket: TicketProps;
  bulletPoints: string[];
}

const BulletPoints = styled(Col)`
  display: flex;
  align-items: center;
`

const Entry = (props: EntryProps) => {
  return (
    <Row>
      <Col {...{[format.MOBILE_BREAKPOINT as string]: proportions.LEFT_MARGINS}} />
      <Col {...{[format.MOBILE_BREAKPOINT as string]: proportions.TICKET}}>
        <Ticket {...props.ticket} />
      </Col>
      <Col {...{[format.MOBILE_BREAKPOINT as string]: proportions.SPACE}} />
      <BulletPoints {...{[format.MOBILE_BREAKPOINT as string]: proportions.BULLETS}}>
        <Text>
          <ul>
            <Stack gap={3}>
              {props.bulletPoints.map((bulletPoint, index) => (
                <li key={index}>
                  {bulletPoint}
                </li>
              ))}
            </Stack>
          </ul>
        </Text>
      </BulletPoints>
      <Col {...{[format.MOBILE_BREAKPOINT as string]: proportions.RIGHT_MARGINS}}/>
    </Row>
  )
}

export default Entry;