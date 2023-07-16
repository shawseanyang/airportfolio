import Bold from "./Bold";
import Text from "./Text";
import Highlight from "./Highlight";

const BoldHighlight:React.FC = ({ children }) => (
  <Text>
    <Bold>
      <Highlight>
          {children}
      </Highlight>
    </Bold>
  </Text>
);
export default BoldHighlight;