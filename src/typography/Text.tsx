import { font, fontSize } from '../constants/fonts';
import color from '../constants/colors';
import { Component } from 'react';
import Bold from './Bold';

class Text extends Component {
  render() {
    const { children } = this.props;
    return (
      <span style={{
        fontFamily: font.BODY,
        fontSize: fontSize.BODY,
        color: color.MAIN,
      }}>
        <Bold>
          {children}
        </Bold>
      </span>
    );
  }
}

export default Text