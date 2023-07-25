import format from "../constants/format";
import { getRandomRotationDegree } from "../utils/rotate";

const RandomRotation: React.FC = ({children}) => (
  <div style={{
    transform: `rotate(${getRandomRotationDegree()}deg)`,
    transition: `${format.TRANSITION_DURATION}s`
  }}>
    {children}
  </div>
);
export default RandomRotation;