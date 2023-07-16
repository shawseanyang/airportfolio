import color from '../constants/colors';
import { Component } from 'react';

class Highlight extends Component {
  render() {
    const { children } = this.props;
    return (
      <span style={{
        color: color.HIGHLIGHT,
      }}>
        {children}
      </span>
    );
  }
}

export default Highlight