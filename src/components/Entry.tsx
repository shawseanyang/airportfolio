import { Col, Container, Row, Stack } from "react-bootstrap";
import Ticket, { TicketProps } from "./Ticket/Ticket"
import format, { proportions } from "../constants/format";
import Text from "../typography/Text";
import styled from "styled-components";
import RandomRotation from "./RandomRotation";
import BagTag from "./BagTag";
import MidHighlight from "../typography/MidHighlight";

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
  gap: ${format.SPACING_VMAX}vmax;
  @media (max-width: ${format.MOBILE_BREAKPOINT_PIXELS}px) {
    padding: 0 50px;
  }
`

const Image = (props: {src: string}) => (
  <RandomRotation>
    <img src={props.src} alt={props.src} style={{
      maxWidth: '80%',
      maxHeight: '300px',
      borderRadius: format.BORDER_RADIUS,
      filter: format.DROP_SHADOW,
    }}/>
  </RandomRotation>
)

const TicketColumn = styled(Col)`
  min-width: fit-content;
`

const InBetweenSpace = styled(Col)`
  min-height: ${format.SPACING_VMAX}vmax;
`

const EndingSpace = styled(Col)`
  min-height: ${format.SPACING_VMAX}vmax;
`

const Entry = (props: EntryProps) => {
  return (
    <Container>
      <Row>
        <Col/>
        <TicketColumn {...{[format.MOBILE_BREAKPOINT as string]: proportions.TICKET}}>
          <Ticket {...props.ticket} />
        </TicketColumn>
        <InBetweenSpace {...{[format.MOBILE_BREAKPOINT as string]: proportions.SPACE}}/>
        <Content {...{[format.MOBILE_BREAKPOINT as string]: proportions.BODY}}>
          <BagTag>
            <MidHighlight>
              <Stack gap={2}>
                {props.bulletPoints.map((bulletPoint, index) => (
                    <p>{bulletPoint}</p>
                ))}
              </Stack>
            </MidHighlight>
          </BagTag>
          { props.imageUrl && <Image src={props.imageUrl} />}
        </Content>
        <EndingSpace/>
      </Row>
    </Container>
  )
}

export default Entry;