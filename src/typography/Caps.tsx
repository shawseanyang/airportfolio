import Text from './Text';
import styled from 'styled-components';
import Bold from './Bold';

const Capped = styled.span`
  text-transform: uppercase;
`;

const Caps:React.FC = ({ children }) => (
  <Capped>
    <Bold>
      <Text>
        {children}
      </Text>
    </Bold>
  </Capped>
);

export default Caps