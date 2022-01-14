import Stack from 'react-bootstrap/Stack';
import Title from '../typography/Title';
import Parser from '../typography/Parser';

export type BigTextBlockProps = {
  text: string;
}

const BigTextBlock = (props: BigTextBlockProps) => (
  <Stack gap={3}>
    <Title>
      <Parser text={props.text} />
    </Title>
  </Stack>
)

export default BigTextBlock