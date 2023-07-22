import { font, fontSize } from '../constants/fonts';
import color from '../constants/colors';
import { Component } from 'react';

class Text extends Component {
  render() {
    const { children } = this.props;
    return (
      <span style={{
        fontFamily: font.BODY,
        fontSize: fontSize.BODY,
        color: color.MAIN,
      }}>
        {children}
      </span>
    );
  }
}

export default Text