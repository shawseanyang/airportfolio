import Big from "./Big";
import BoldHighlight from "./BoldHighlight";
import Caps from "./Caps";

const BigBoldCapsHighlight:React.FC = ({ children }) => (
  <Caps>
    <BoldHighlight>
      <Big>
        {children}
      </Big>
    </BoldHighlight>
  </Caps>
);
export default BigBoldCapsHighlight;