import { font, fontSize } from '../constants/fonts';
import color from '../constants/colors';

const Symbol: React.FC = ({children}) => (
  <span style={{
    fontFamily: font.BODY,
    fontSize: fontSize.BODY * 1,
    color: color.MAIN,
  }}>
    {children}
  </span>
)

export default Symbol