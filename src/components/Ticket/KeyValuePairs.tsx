import { Stack } from "react-bootstrap";

export type KeyValuePair = {
  key: string;
  value: string;
}

export type KeyValuePairsProps = KeyValuePair[];

// creates a stack of stacks, where the inner stacks have two elements, one for the key and one for the value
const KeyValuePairs = (props: KeyValuePairsProps) => (
  <Stack gap={1}>
    {props.map((pair, index) => (
      <Stack key={index} direction={'horizontal'} gap={1}>
        {/* TODO: change to typographic components */}
        <p>{pair.key}</p>
        <p>{pair.value}</p>
      </Stack>
    ))}
  </Stack>
);

export default KeyValuePairs;