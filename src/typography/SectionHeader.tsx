import color from '../constants/colors';
import { font, fontSize } from '../constants/fonts';

const SectionHeader: React.FC = ({children}) =>
  <span style={{
    fontFamily: font.TITLE,
    fontWeight: 'bold',
    fontSize: fontSize.SECTION_HEADER,
    color: color.FOREGROUND,
  }}>
    {children}
  </span>

export default SectionHeader