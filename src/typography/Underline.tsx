import Text from './Text';
import styled from 'styled-components';
import { font, fontSize } from '../constants/fonts';
import color from '../constants/colors';

const Underlined = styled.span`
  text-decoration: underline !important;
`;

export type UnderlineProps = {
  children: React.ReactNode,
  overrideColor?: boolean,
  overrideFont?: boolean,
}

const Underline = ({children, overrideColor=false, overrideFont=false}: UnderlineProps) => (
  <Underlined>
    {
      overrideColor && overrideFont 
      ?
        <Text>
          {children}
        </Text>
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
  </Underlined>
);

export default Underline
