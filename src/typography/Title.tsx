import color from '../constants/colors';
import { font, fontSize } from '../constants/fonts';

type TitleProps = {
  children: React.ReactNode,
}

const Title = (props: TitleProps) =>
  <span style={{
    fontFamily: font.TITLE,
    fontWeight: 'bold',
    fontSize: fontSize.TITLE,
    color: color.MAIN,
  }}>
    {props.children}
  </span>

export default Title