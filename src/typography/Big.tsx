import Text from './Text';
import { fontSize } from '../constants/fonts';

const Big:React.FC = ({ children }) => (
  <span
    style={{
      fontSize: fontSize.BIG,
    }}>
    <Text>
      {children}
    </Text>
  </span>
);

export default Big