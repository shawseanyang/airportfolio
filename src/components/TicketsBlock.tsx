import { createRef } from "react"
import Section, { SectionProps } from "./Section"

export type TicketsBlockProps = {
  sections: SectionProps[];
  refs: React.RefObject<unknown>[];
  updateRefs: (refs: React.RefObject<unknown>[]) => void;
}

const TicketsBlock: React.FC<TicketsBlockProps> = (props) => 
{
  const tempRefs:React.RefObject<unknown>[] = []
  const rendered = (
    <>
      {props.sections.map((section, index) => {
        if (props.refs.length === 0) {
          const ref = createRef()
          tempRefs.push(ref)
          props.updateRefs(tempRefs);
          return (
            <Section {...section} key={section.id} ref={ref}/>
          )
        }
        return (
          <Section {...section} key={section.id} ref={props.refs[index]}/>
        )
      })}
    </>
  )
  return rendered;
}

export default TicketsBlock