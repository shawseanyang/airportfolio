import useMouse from "@react-hook/mouse-position";
import format from "../constants/format";
import { useRef } from "react";

const DAMPENING_FACTOR = 0.05;

const FollowMouse: React.FC = ({children}) => {

  const ref = useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  return (
    <div
      ref={ref}
      style={{
        transition: `${format.TRANSITION_DURATION}s`,
        transform:
          `${
              // no need to translate if mouse is not in viewport
              mouse.x && mouse.y && mouse.elementWidth && mouse.elementHeight
              // do not animate if device is touch-based
              && !mouse.isTouch
                ? `translate(
                    ${(mouse.x - mouse.elementWidth / 2) * DAMPENING_FACTOR}px,
                    ${(mouse.y - mouse.elementHeight / 2) * DAMPENING_FACTOR}px
                  )`
                : `translate(0, 0)`
            }
          `
      }}
    >
      {children}
    </div>
  )
};
export default FollowMouse;