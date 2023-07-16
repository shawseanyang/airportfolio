import color from '../constants/colors';

const Foreground:React.FC = ({ children }) => (
  <span
    style={{
      color: color.FOREGROUND,
    }}>
      {children}
  </span>
);

export default Foreground