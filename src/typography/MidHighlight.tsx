import color from '../constants/colors';

const MidHighlight:React.FC = ({ children }) => (
  <span
    style={{
      color: color.MID_HIGHLIGHT,
    }}>
      {children}
  </span>
);

export default MidHighlight