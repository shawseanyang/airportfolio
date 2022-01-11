import { font, fontSize } from '../constants/fonts';

const Bold:React.FC = ({ children }) => (
  <span style={{
    fontFamily: font.BODY,
    fontWeight: 'bold',
    fontSize: fontSize.BODY,
  }}>
    {children}
  </span>
);

export default Bold
