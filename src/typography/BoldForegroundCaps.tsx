import Bold from "./Bold";
import Caps from "./Caps";
import Text from "./Text";
import Foreground from "./Foreground";

const BoldForegroundCaps:React.FC = ({ children }) => (
  <Bold>
    <Foreground>
      <Caps>
        <Text>
          {children}
        </Text>
      </Caps>
    </Foreground>
  </Bold>
);
export default BoldForegroundCaps;