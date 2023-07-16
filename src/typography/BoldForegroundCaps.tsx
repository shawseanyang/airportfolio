import Bold from "./Bold";
import Caps from "./Caps";
import Text from "./Text";
import Foreground from "./Foreground";

const BoldForegroundCaps:React.FC = ({ children }) => (
  <Text>
    <Bold>
      <Foreground>
        <Caps>
            {children}
        </Caps>
      </Foreground>
    </Bold>
  </Text>
);
export default BoldForegroundCaps;