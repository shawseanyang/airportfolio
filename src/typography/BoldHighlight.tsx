import Bold from "./Bold";
import Text from "./Text";
import Highlight from "./Highlight";

const BoldHighlight:React.FC = ({ children }) => (
  <Bold>
    <Highlight>
        <Text>
          {children}
        </Text>
    </Highlight>
  </Bold>
);
export default BoldHighlight;