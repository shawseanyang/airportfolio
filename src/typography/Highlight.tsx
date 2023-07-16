import color from '../constants/colors';

const Highlight:React.FC = ({ children }) => (
  <span
    style={{
      color: color.HIGHLIGHT,
    }}>
      {children}
  </span>
);

export default Highlight