import Big from "./Big";
import Highlight from "./Highlight";

const BigHighlight:React.FC = ({ children }) => (
  <Big>
    <Highlight>
      {children}
    </Highlight>
  </Big>
);
export default BigHighlight;