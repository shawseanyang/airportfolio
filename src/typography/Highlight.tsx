import { font, fontSize } from '../constants/fonts';
import color from '../constants/colors';

export type HighlightProps = {
  children: React.ReactNode,
  overrideFont?: boolean,
}

const Highlight = ({
    children,
    overrideFont = true,
  }: HighlightProps) => (
  <span style={{
    color: color.HIGHLIGHT,
    fontFamily: overrideFont ? font.BODY : 'inherit',
    fontSize: overrideFont ? fontSize.BODY : 'inherit',
  }}>
    {children}
  </span>
);

export default Highlight