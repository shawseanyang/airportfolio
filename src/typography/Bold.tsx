import styled from 'styled-components';
import { font, fontSize } from '../constants/fonts';
import color from '../constants/colors';

const Boldened = styled.span`
  font-weight: bold;
`;

export type BoldProps = {
  children: React.ReactNode,
  overrideColor?: boolean,
  overrideFont?: boolean,
}

const Bold = ({children, overrideColor=true, overrideFont=true}: BoldProps) => (
  <Boldened>
    {
      overrideColor && overrideFont 
      ?
        children
      :
        overrideColor && !overrideFont
        ?
          <span style={{color: color.MAIN}}>
            {children}
          </span>
        :
          !overrideColor && overrideFont
            ?
            <span style={{fontFamily: font.BODY, fontSize: fontSize.BODY}}>
              {children}
            </span>
            :
            <span>
              {children}
            </span>
    }
  </Boldened>
);

export default Bold
