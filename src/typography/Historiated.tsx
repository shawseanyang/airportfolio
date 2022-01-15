import { fontSize } from '../constants/fonts';
import Title from './Title';

const Historiated: React.FC = ({children}) => (
  <Title>
    <span style={{
      fontSize: fontSize.HISTORIATED,
    }}>
      {children}
    </span>
  </Title>
);
export default Historiated;