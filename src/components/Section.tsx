import Ticket, { ParsableTicketProps } from './Ticket/Ticket'
import SectionHeader, { SectionHeaderProps } from './SectionHeader'
import Stack from 'react-bootstrap/Stack'
import { forwardRef } from 'react'
import Parser from '../typography/Parser'
import EmailTicket, { EmailTicketProps, isEmailTicketProps } from './EmailTicket'

export type SectionProps = {
  id: string;
  tickets: (ParsableTicketProps | EmailTicketProps)[];
} & SectionHeaderProps;

const Section = forwardRef((props: SectionProps, ref) => (
  <Stack key={props.id} ref={ref as React.Ref<HTMLSpanElement>} id={props.id} gap={5} className={'my-4'}>
      <SectionHeader {...props}/>
      {props.tickets.map((ticket, index) => (
          isEmailTicketProps(ticket) 
          ? (
            <EmailTicket key={index} {...ticket} />
          )
          : (
            <Ticket {...ticket} key={index}>
              <Parser text={ticket.text} />
            </Ticket>
          )
      ))}
    </Stack>
))

export default Section