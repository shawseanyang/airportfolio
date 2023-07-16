import Big from "./Big";
import BoldHighlight from "./BoldHighlight";

const BigBoldHighlight:React.FC = ({ children }) => (
  <Big>
    <BoldHighlight>
        {children}
    </BoldHighlight>
  </Big>
);
export default BigBoldHighlight;