import { Stack } from "react-bootstrap";

export type KeyValuePair = {
  key: string;
  value: string;
}

export type KeyValuePairsProps = {
  pairs: KeyValuePair[];
};

// creates a stack of stacks, where the inner stacks have two elements, one for the key and one for the value
// of props.length is 0, then render nothing
// else render:
// <Stack>
//   {props.map((pair, index) => (
//     <Stack key={index}>
//       {/* TODO: change to typographic components */}
//       <p>{pair.key}</p>
//       <p>{pair.value}</p>
//     </Stack>
//   ))}
// </Stack>
const KeyValuePairs = (props: KeyValuePairsProps) => (
  props.pairs.length > 0
    ? <Stack>
      {props.pairs.map((pair, index) => (
        <Stack key={index}>
          {/* TODO: change to typographic components */}
          <p>{pair.key}</p>
          <p>{pair.value}</p>
        </Stack>
      ))}
    </Stack>
    : null
);

export default KeyValuePairs;