import Highlight from './Highlight';
import Text from './Text';
import JsxParser from 'react-jsx-parser'

// Parses plaintext into JSX
// *text* produces Highlight
// new line produces new line

export type ParserProps = {
  text: string;
}

function parseHighlights(text: string) {
  return text.replace(
    /\*(.*?)\*/gi,
    '<Highlight>$1</Highlight>'
  );
}

function parseNewlines(text: string) {
  return text.split("\n").reduce((prev, line) => (
      `${prev}<Text>${line}</Text>`
  ));
}

const Parser = (props: ParserProps) => (
  <JsxParser
    components={{Highlight, Text}}
    renderInWrapper={false}
    jsx={
      parseHighlights(
        parseNewlines(props.text)
      )
    }
  />
);

export default Parser