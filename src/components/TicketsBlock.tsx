import { createRef } from "react"
import Section, { SectionProps } from "./Section"

export type TicketsBlockProps = {
  sections: SectionProps[];
  refs: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>;
}

const TicketsBlock: React.FC<TicketsBlockProps> = (props) => 
{
  const tempRefs:React.RefObject<unknown>[] = []
  const rendered = (
    <>
      {props.sections.map((section, index) => {
        return (
          <Section {...section} key={section.id} ref={props.refs.current[index]}/>
        )
      })}
    </>
  )
  return rendered;
}

export default TicketsBlock