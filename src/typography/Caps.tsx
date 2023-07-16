import styled from 'styled-components';

const Capped = styled.span`
  text-transform: uppercase;
`;

const Caps:React.FC = ({ children }) => (
  <Capped>
    {children}
  </Capped>
);

export default Caps