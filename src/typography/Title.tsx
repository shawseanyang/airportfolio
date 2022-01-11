import color from '../constants/colors';
import { font, fontSize } from '../constants/fonts';

const Title: React.FC = ({children}) =>
  <span style={{
    fontFamily: font.TITLE,
    fontWeight: 'bold',
    fontSize: fontSize.TITLE,
    color: color.MAIN,
  }}>
    {children}
  </span>

export default Title