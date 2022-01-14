import color from '../constants/colors';
import { font, fontSize } from '../constants/fonts';

const Subtitle: React.FC = ({children}) =>
  <span style={{
    fontFamily: font.TITLE,
    fontWeight: 'bold',
    fontSize: fontSize.SUBTITLE,
    color: color.MAIN,
    textTransform: 'uppercase',
  }}>
    {children}
  </span>

export default Subtitle