import { font, fontSize } from '../constants/fonts';

const Caps: React.FC = ({ children }) => (
  <span style={{
    fontFamily: font.BODY,
    textTransform: 'uppercase',
    fontSize: fontSize.BODY,
  }}>
    {children}
  </span>
);

export default Caps