import styled from 'styled-components';
import Text from './Text';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`;

const FlexItem = styled.div`
  margin: 0;
  padding: 0;
`

const Justified = (props: {text: string}) => (
  <FlexContainer>
    {props.text.split('').map((c, i) => (
      <FlexItem key={i}>
        <Text>{c}</Text>
      </FlexItem>
    ))}
  </FlexContainer>
)

export default Justified