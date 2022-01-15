import { useState } from "react";
import { Form } from "react-bootstrap";
import color from "../constants/colors";
import { font, fontSize } from "../constants/fonts";
import Ticket from "./Ticket/Ticket";

export type EmailTicketProps = {
  email: string;
  placeholder: string;
}

export function isEmailTicketProps(props: any): props is EmailTicketProps {
  return props.email !== undefined && props.placeholder !== undefined;
}

const EmailTicket = (props: EmailTicketProps) => {

  const [input, setInput] = useState(props.placeholder);
  
  return (
    <Ticket
      title={'Airmail'}
      subtitle={'Send me a message via airmail (or I guess email)'}
      range={{
        start: 'YOU',
        end: 'ME'
      }}
      link={{
        url: `mailto:${props.email}?body=${input}`,
        displayText: 'Send'
      }}
      includeStack={false}
    >
      <Form.Control 
        as="textarea" 
        placeholder={props.placeholder}
        style={{
          height: '100%',
          fontFamily: font.BODY,
          fontSize: fontSize.BODY,
          backgroundColor: color.BACKGROUND,
          color: color.MAIN,
          border: 'none',
        }} 
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </Ticket>
  );
};
export default EmailTicket;