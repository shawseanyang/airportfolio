import { BlockAndProps } from '../content/types';
import BigTextBlock, { BigTextBlockProps } from '../components/BigTextBlock';
import TicketsBlock, { TicketsBlockProps } from '../components/TicketsBlock';
import Navbar, { NavBarProps } from '../components/Navbar';
import { SectionProps } from '../components/Section';

export type ContentProps = {
  refs: React.RefObject<unknown>[];
  updateRefs: (refs: React.RefObject<unknown>[]) => void;
  activeLink: number;
}

const Content = (props: ContentProps) => {
  const ticketSections: SectionProps[] = 
  [
    {
      id: 'edu',
      title: 'Take Off',
      subtitle: 'Education',
      tickets: [
        {
          title: 'Harvard College',
          subtitle: 'Computer Science BA',
          text:
            `
            *Relevant Coursework*
            *CS:* 
            Systems Programming, Theoretical Computer Science, Data Structures and Algorithms
            *Math:* 
            Linear Algebra, Probability, Discrete Math
            `,
          range: {
            start: new Date('2020-08-01'),
            end: new Date('2024-05-01'),
          },
        },
      ]
    },
    {
      id: 'work',
      title: 'Cruise',
      subtitle: 'Work experience',
      tickets: [
        {
          title: 'Amazon',
          subtitle: 'Software Engineering Intern',
          text:
            `
            Launched a *large-scale web application* & accompanying Java *API* presenting accountants with the *processing status of 50 million+ journals* destined for the *general ledger* in the FinTech department, *streamlining month-close activities*
            Designed an efficient, *source-controlled*, *serverless*, and *scalable* architecture
            Delivered *code-reviewed*, *version-controlled* results under *agile* development
            *Optimized* complexdatabase *queries* to millisecondsand *eliminated cold starts* associated with serverless computing
            `,
          range: {
            start: new Date('2020-04-01'),
            end: new Date('2020-06-01'),
          },
          link: {
            url: 'https://www.amazon.com/',
            displayText: 'More',
          }
        },
        {
          title: 'NASA',
          subtitle: 'SEES Research Intern',
          text:
            `
            Quantified recent wildfire impact from *35,000 acres* of *satellite imagery* and analyzed results using *Python*
            Presented conclusions at UT Austin Center for Space Research to scientists, mentors, and *NASA coordinators*
            Advised local landowners on *data-driven steps to recovery*
            `,
          range: {
            start: new Date('2020-04-01'),
            end: new Date('2020-06-01'),
          }
        },
      ],
    },
    {
      id: 'projects',
      title: 'In-Flight Entertainment',
      subtitle: 'Projects',
      tickets: [
        {
          title: 'Airventure Oshkosh',
          subtitle: 'Student Pilot, RV-12 Builder',
          text:
            `
            *Built and flew* an *FAA-certified*, two-seater airplane with a team of students *1,000 miles* across the U.S. to the largest general aviation airshow in the country
            `,
          range: {
            start: new Date('2020-04-01'),
            end: new Date('2020-06-01'),
          }
        },
      ]
    },
    {
      id: 'skills',
      title: 'Meal Service',
      subtitle: 'Skills',
      tickets: [
        {
          title: 'Skills',
          text:
            `
            *Web:* HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, SQL, Python, Bash, Git, Docker, AWS
            *Software:* Microsoft Office, Adobe Creative Cloud, Adobe Illustrator, Adobe Photoshop
            *Hardware:* Arduino, Raspberry Pi, Raspberry Pi Zero, Raspberry Pi 3, Raspberry Pi 4, Raspberry Pi Zero W, Raspberry Pi Zero W
            *Cloud:* Google Cloud Platform, Amazon Web Services
            `,
            range: {
              start: 'WEB',
              end: 'CLOUD'
            }
        }
      ]
    },
    {
      id: 'contact',
      title: 'Connecting Flights',
      subtitle: 'Connect with me',
      tickets: [
        
      ]
    }
  ];

  const navLinks = ticketSections.map(({ id, title }) => { return { url: id, displayText: title }});

  return [
    (
      <BigTextBlock
      text="Hi! I'm Sean, and this is my *Airportfolio*"
      />
    ),
    (
      <Navbar
        links={navLinks}
        activeLink={props.activeLink}
      />
    ),
    (
      <TicketsBlock
        sections={ticketSections}
        refs={props.refs}
        updateRefs={props.updateRefs}
      />
    )
  ]
}

export default Content;