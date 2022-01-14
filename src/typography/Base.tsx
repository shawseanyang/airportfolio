import styled from 'styled-components';
import color from '../constants/colors';

const BaseStyles = styled.span`
  color: ${color.MAIN};
`;

const Bold:React.FC = ({ children }) => (
  <BaseStyles>
    {children}
  </BaseStyles>
);

export default Bold
