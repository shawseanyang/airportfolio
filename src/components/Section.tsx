import Ticket, { ParsableTicketProps } from './Ticket/Ticket'
import SectionHeader from './SectionHeader'
import Stack from 'react-bootstrap/Stack'
import { forwardRef } from 'react'
import Parser from '../typography/Parser'

export type SectionProps = {
  id: string;
  title: string;
  tickets: ParsableTicketProps[];
}

const Section = forwardRef((props: SectionProps, ref) => (
  <Stack key={props.id} ref={ref as React.Ref<HTMLSpanElement>} id={props.id} gap={5}>
      <SectionHeader>{props.title}</SectionHeader>
      {props.tickets.map((ticket, index) => (
        <Ticket {...ticket} key={index}>
          <Parser text={ticket.text} />
        </Ticket>
      ))}
    </Stack>
))

export default Section