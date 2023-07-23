import SectionHeader, { SectionHeaderProps } from './SectionHeader'
import Stack from 'react-bootstrap/Stack'
import { forwardRef } from 'react'
import Entry, { EntryProps } from './Entry'
import styled from 'styled-components';

export type SectionProps = {
  id: string;
  entries: (EntryProps)[];
} & SectionHeaderProps;

const CustomGapStack = styled(Stack)`
  gap: 5rem !important;
`

const Section = forwardRef((props: SectionProps, ref) => (
  <Stack key={props.id} ref={ref as React.Ref<HTMLSpanElement>} id={props.id} gap={5}>
      <SectionHeader {...props}/>
      <CustomGapStack>
        {props.entries.map((entry, index) => (
          <Entry {...entry} key={index} />
        ))}
      </CustomGapStack>
    </Stack>
))

export default Section