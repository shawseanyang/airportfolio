import Text from './Text';
import styled from 'styled-components';
import Bold from './Bold';

const Capped = styled.span`
  text-transform: uppercase;
`;

const Caps:React.FC = ({ children }) => (
  <Capped>
      <Text>
        {children}
      </Text>
  </Capped>
);

export default Caps