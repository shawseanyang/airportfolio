import SectionHeader, { SectionHeaderProps } from './SectionHeader'
import Stack from 'react-bootstrap/Stack'
import { forwardRef } from 'react'
import Entry, { EntryProps } from './Entry'

export type SectionProps = {
  id: string;
  entries: (EntryProps)[];
} & SectionHeaderProps;

const Section = forwardRef((props: SectionProps, ref) => (
  <Stack key={props.id} ref={ref as React.Ref<HTMLSpanElement>} id={props.id} gap={5} className={'my-4'}>
      <SectionHeader {...props}/>
      {props.entries.map((entry, index) => (
        <Entry {...entry} key={index} />
      ))}
    </Stack>
))

export default Section