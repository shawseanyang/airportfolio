import { font, fontSize } from '../constants/fonts';

const Bold = ({ children }) => (
  <span style={{
    fontFamily: font.BODY,
    textTransform: 'uppercase',
    fontSize: fontSize.BODY,
  }}>
    {children}
  </span>
);

export default Bold