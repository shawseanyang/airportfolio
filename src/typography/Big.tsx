import { fontSize } from '../constants/fonts';

const Big:React.FC = ({ children }) => (
  <span
    style={{
      fontSize: fontSize.BIG,
    }}>
      {children}
  </span>
);

export default Big