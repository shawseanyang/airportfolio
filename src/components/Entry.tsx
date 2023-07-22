import { Col, Container, Row, Stack } from "react-bootstrap";
import Ticket, { TicketProps } from "./Ticket/Ticket"
import format, { proportions } from "../constants/format";
import Text from "../typography/Text";
import styled from "styled-components";
import { getRandomRotationDegree } from "../utils/rotate";

export type EntryProps = {
  ticket: TicketProps;
  bulletPoints: string[];
  imageUrl?: string;
}

const Content = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`

const Image = (props: {src: string}) => (
  <img src={props.src} alt={props.src} style={{
    maxWidth: '80%',
    maxHeight: '300px',
    borderRadius: format.BORDER_RADIUS,
    filter: format.DROP_SHADOW,
    transform: `rotate(${getRandomRotationDegree()}deg)`,
  }}/>
)

const Entry = (props: EntryProps) => {
  return (
    <Container>
      <Row>
        <Col/>
        <Col {...{[format.MOBILE_BREAKPOINT as string]: proportions.TICKET}} style={{
          minWidth: 'fit-content'
        }}>
          <Ticket {...props.ticket} />
        </Col>
        <Col {...{[format.MOBILE_BREAKPOINT as string]: proportions.SPACE}} style={{
          minHeight: '100px'
        }} />
        <Content {...{[format.MOBILE_BREAKPOINT as string]: proportions.BODY}}>
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
          { props.imageUrl && <Image src={props.imageUrl} />}
        </Content>
        <Col style={{
          minHeight: '100px'
        }} />
      </Row>
    </Container>
  )
}

export default Entry;