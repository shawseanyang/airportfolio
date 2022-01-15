import styled from 'styled-components';
import color from '../../constants/colors';
import format, { poportions } from '../../constants/format';

export type PerforationProps = {
  position: 'top' | 'bottom' | 'left' | 'right';
};

const PERFORATION_SIZE = 25;

const PerforationCircle = styled.div`
  height: ${PERFORATION_SIZE}px;
  width: ${PERFORATION_SIZE}px;
  border-radius: 50%;
  background-color: ${color.BACKGROUND};
  position: absolute;
`

const Perforation = (props: PerforationProps) => (
  <>
    {
      {
        'top': 
          <PerforationCircle style={{
            top: `-${PERFORATION_SIZE/2}px`,
            left: `${100 * ( poportions.stub + poportions.space / 2) / format.BOOTSTRAP_NUM_COLUMNS}%`
          }} />,
        'bottom': 
          <PerforationCircle style={{
            bottom: `-${PERFORATION_SIZE/2}px`,
            left: `${100 * ( poportions.stub + poportions.space / 2) / format.BOOTSTRAP_NUM_COLUMNS}%`
          }} />,
        'left': 
          <PerforationCircle style={{
            left: `-${PERFORATION_SIZE/2}px`,
            top: `${100 * ( poportions.stub + poportions.space / 2) / format.BOOTSTRAP_NUM_COLUMNS}%`
          }} />,
        'right': 
          <PerforationCircle style={{
            right: `-${PERFORATION_SIZE/2}px`,
            top: `${100 * ( poportions.stub + poportions.space / 2) / format.BOOTSTRAP_NUM_COLUMNS}%`
          }} />,
      }[props.position]
    }
  </>
);

export default Perforation