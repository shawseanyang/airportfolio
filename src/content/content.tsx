import { BlockAndProps } from '../content/types';
import BigTextBlock, { BigTextBlockProps } from '../components/BigTextBlock';
import TicketsBlock, { TicketsBlockProps } from '../components/TicketsBlock';
import { SectionProps } from '../components/Section';
import SymbolStudioShowcase from '../media/symbolstudio/showcase.png'
import OshKoshMe from '../media/oshkosh/me.jpg';
import OshKoshClass from '../media/oshkosh/class.jpg';
import OshKoshPlane from '../media/oshkosh/plane.jpg';
import ThreeToTwoDataPanelOpen from '../media/awshackathon/3to2_data_panel_open.png';
import LandingPage from '../media/awshackathon/Landing Page.png';
import VariableChangeDemo from '../media/awshackathon/Variable Change Demo.gif';
import UncdfCountry from '../media/uncdf/country.png';
import UncdfMap from '../media/uncdf/map.png';
import UncdfMetric from '../media/uncdf/metric.png';
import TitleImage from '../components/Ticket/TitleImage';
import GoogleLogo from '../media/titles/google.png';
import AmazonLogo from '../media/titles/amazon.png';
import NasaLogo from '../media/titles/nasa.png';
import HarvardLogo from '../media/titles/harvard.png';
import T4SGLogo from '../media/titles/t4sg.png';

export type ContentProps = {
  refs: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>;
  activeLink: number;
}

const BULLET_POINT = '•';

// Content:
/*
EDUCATION
Harvard University, Graduate School of Engineering – Computer Science, M.S.	AUG 2022-MAY 2024


GPA: 4.0	Relevant coursework:	Grad-level Distributed Systems CS262	Grad-level Human-Computer Interaction CS279
Harvard University, Harvard College – Computer Science, B.A.		AUG 2020-MAY 2024

GPA: 3.93	Relevant coursework:	Systems Programming CS61	Differential Privacy w/ inventor Prof Dwork CS129

WORK EXPERIENCE
Google, Core – Software Engineer Intern – Sunnyvale, CA	MAY-AUG 2023

Improving traceability in Conduit (Google’s primary global data processing engine) to reduce debugging time for Ads, Workspace, Youtube, Search, Analytics, & Assistant.
Creating a prototype (C++) for Conduit’s most detailed tracing system to date, measuring bottlenecks, and finding solutions to handle the greater volume as a result of the higher level of detail.
Google, Shopping – Software Engineer Intern – Googleplex, Mountain View, CA	MAY-AUG 2022

Reduced storage by half by leveraging a new format to store historical product names that minimized duplicate data.
Designed a new algorithm to populate the historical product names with greater efficiency.
Built a new processor (C++) to analyze 4 billion+ product listings multiple times daily for product name changes.
Amazon – Software Engineer Intern – Seattle, WA	MAY-AUG 2021

Built a web interface (React, Typescript) + AWS backend (Java) providing millisecond access to 50 million+ transactions
Enabled accountants to diagnose issues in Amazon’s general ledger independently.
Alleviated my team of engineers from helping accountants debug the same problems on their transactions every day.
NASA – STEM in Earth Science (SEES) Research Intern – Austin, TX	APR-JUL 2019

Quantified recent wildfire impact from 35,000 acres of satellite imagery, analyzed results (Python), presented conclusions to NASA coordinators, and used the results to advise local landowners on data-driven steps to recovery.
Freelance Tutoring – 1:1 Computer Science Tutor – Virtual	APR 2023-PRESENT

Teaching 2 college students CS 2 hrs/week with custom curricula to clarify concepts, practice coding, & give guidance.
Sourced students by posting on mailing lists and postering around Harvard in areas trafficked by students and visitors.
HARVARD-AFFILIATED PROJECTS
SymbolStudio – CS 279 (Human-Computer Interaction) Semester Project	AUG-DEC 2022

Investigated how AI-generated images can help illustrators brainstorm concepts traditionally difficult to combine.
Built a web prototype ↗ (React, Typescript), ran a 10-person user study, and synthesized the results into a paper.
United Nations, through Harvard Tech for Social Good ↗ – Senior Software Engineer	AUG-DEC 2021

Led a 5-student team to build a custom dashboard solution (Typescript, AWS) to centralize the UN’s financial health data.
Interfaced with the client (UN), architected the software, provided project accountability, and established team practices.
AWARDS
1st Place in AWS Data Exchange Hackathon ↗ – out of 1,345 participants	JUNE 2020
Built the Health Vulnerability Mapper ↗, which maps real-time COVID data against social vulnerability metrics from the CDC to visualize the disproportionate impact of the disease on different communities.
SKILLS
Languages:	experienced in C++ | Typescript/Javascript | Python | Java  | HTML/CSS	capable in SQL | OCaml | Bash | GraphQL
Technologies:	experienced in React | NodeJS | AWS EC2/S3/etc | protobufs | Figma	capable in Angular

Soft skills:	engaging relationships to overcome obstacles together | talking to clients for specs & pain points | managing & communicating progress | tasteful user interfaces | explaining technical concepts | comfortable with complexity
*/

const ticketSections: SectionProps[] = 
  [
    // {
    //   id: 'experience',
    //   title: 'Experience',
    //   entries: [
    //     {
    //       ticket: {
    //         title: {
    //           src: GoogleLogo,
    //         },
    //         keyValuePairs: {
    //           pairs: [
    //             {
    //               key: 'Title',
    //               value: 'Software Engineering Intern',
    //             },
    //             {
    //               key: 'Location',
    //               value: 'Sunnyvale, CA',
    //             },
    //             {
    //               key: 'Department',
    //               value: 'Core',
    //             }
    //           ]
    //         },
    //         dateRange: {
    //           start: new Date('2021-05-24'),
    //           end: new Date('2021-08-13'),
    //         },
    //       },
    //       bulletPoints: [
    //         'Improving traceability in Conduit (Google\'s primary global data processing engine) to reduce debugging time for Ads, Workspace, Youtube, Search, Analytics, & Assistant.',
    //         'Creating a prototype (C++) for our most detailed tracing system to date, measuring bottlenecks, and finding solutions to handle the greater volume as a result of the higher level of detail.',
    //       ]
    //     },
    //     {
    //       ticket: {
    //         title: {
    //           src: GoogleLogo,
    //         },
    //         keyValuePairs: {
    //           pairs: [
    //             {
    //               key: 'Title',
    //               value: 'Software Engineering Intern',
    //             },
    //             {
    //               key: 'Location',
    //               value: 'Sunnyvale, CA',
    //             },
    //             {
    //               key: 'Department',
    //               value: 'Core',
    //             }
    //           ]
    //         },
    //         dateRange: {
    //           start: new Date('2021-05-24'),
    //           end: new Date('2021-08-13'),
    //         },
    //       },
    //       bulletPoints: [
    //         'Improving traceability in Conduit (Google\'s primary global data processing engine) to reduce debugging time for Ads, Workspace, Youtube, Search, Analytics, & Assistant.',
    //         'Creating a prototype (C++) for our most detailed tracing system to date, measuring bottlenecks, and finding solutions to handle the greater volume as a result of the higher level of detail.',
    //       ]
    //     }
    //   ]
    // },
    // {
    //   id: 'projects',
    //   title: 'Projects',
    //   entries: [
    //     {
    //       ticket: {
    //         title: {
    //           src: GoogleLogo,
    //         },
    //         keyValuePairs: {
    //           pairs: [
    //             {
    //               key: 'Title',
    //               value: 'Software Engineering Intern',
    //             },
    //             {
    //               key: 'Location',
    //               value: 'Sunnyvale, CA',
    //             },
    //             {
    //               key: 'Department',
    //               value: 'Core',
    //             }
    //           ]
    //         },
    //         dateRange: {
    //           start: new Date('2021-05-24'),
    //           end: new Date('2021-08-13'),
    //         },
    //         barcode: {
    //           displayText: 'Link to Project',
    //           url: 'https://www.google.com',
    //         }
    //       },
    //       bulletPoints: [
    //         'Improving traceability in Conduit (Google\'s primary global data processing engine) to reduce debugging time for Ads, Workspace, Youtube, Search, Analytics, & Assistant.',
    //         'Creating a prototype (C++) for our most detailed tracing system to date, measuring bottlenecks, and finding solutions to handle the greater volume as a result of the higher level of detail.',
    //       ],
    //       imageUrl: 'https://minimalistphotographyawards.com/wp-content/uploads/2020/08/Emerson_Laura_BluePlanet6.jpg'
    //     },
    //     {
    //       ticket: {
    //         title: {
    //           src: GoogleLogo,
    //         },
    //         keyValuePairs: {
    //           pairs: [
    //             {
    //               key: 'Title',
    //               value: 'Software Engineering Intern',
    //             },
    //             {
    //               key: 'Location',
    //               value: 'Sunnyvale, CA',
    //             },
    //             {
    //               key: 'Department',
    //               value: 'Core',
    //             }
    //           ]
    //         },
    //         dateRange: {
    //           start: new Date('2021-05-24'),
    //           end: new Date('2021-08-13'),
    //         },
    //       },
    //       bulletPoints: [
    //         'Improving traceability in Conduit (Google\'s primary global data processing engine) to reduce debugging time for Ads, Workspace, Youtube, Search, Analytics, & Assistant.',
    //         'Creating a prototype (C++) for our most detailed tracing system to date, measuring bottlenecks, and finding solutions to handle the greater volume as a result of the higher level of detail.',
    //       ]
    //     }
    //   ]
    // }
    {
      id: 'education',
      title: 'Education',
      entries: [
        {
          ticket: {
            title: {
              src: HarvardLogo,
            },
            keyValuePairs: {
              pairs: [
                {
                  key: 'Degree',
                  value: 'M.S. Computer Science',
                },
                {
                  key: 'Location',
                  value: 'Cambridge, MA',
                },
                {
                  key: 'GPA',
                  value: '4.0',
                },
              ]
            },
            dateRange: {
              start: new Date('2022-08-01'),
              end: new Date('2024-05-01'),
            },
          },
          // TODO: add more content here
          bulletPoints: [
            'Relevant Coursework:',
            `${BULLET_POINT} Grad-level Distributed Systems CS262`,
            `${BULLET_POINT} Grad-level Human-Computer Interaction CS279`,
          ]
        },
        {
          ticket: {
            title: {
              src: HarvardLogo,
            },
            keyValuePairs: {
              pairs: [
                {
                  key: 'Degree',
                  value: 'B.A. Computer Science',
                },
                {
                  key: 'Location',
                  value: 'Cambridge, MA',
                },
                {
                  key: 'GPA',
                  value: '3.93',
                },
              ]
            },
            dateRange: {
              start: new Date('2020-08-01'),
              end: new Date('2024-05-01'),
            },
          },
          // TODO: add more content here
          bulletPoints: [
            'Relevant Coursework:',
            `${BULLET_POINT} Systems Programming CS61`,
            `${BULLET_POINT} Differential Privacy w/ inventor Prof Dwork CS129`,
          ]
        }
      ]
    },
    {
      id: 'experience',
      title: 'Experience',
      entries: [
        {
          ticket: {
            title: {
              src: GoogleLogo,
            },
            keyValuePairs: {
              pairs: [
                {
                  key: 'Title',
                  value: 'Software Engineer Intern',
                },
                {
                  key: 'Location',
                  value: 'Sunnyvale, CA',
                },
                {
                  key: 'Department',
                  value: 'Core',
                }
              ]
            },
            dateRange: {
              start: new Date('2023-05-01'),
              end: new Date('2023-08-01'),
            },
          },
          bulletPoints: [
            'Improving traceability in Conduit (Google\'s primary global data processing engine) to reduce debugging time for Ads, Workspace, Youtube, Search, Analytics, & Assistant.',
            'Creating a prototype (C++) for our most detailed tracing system to date, measuring bottlenecks, and finding solutions to handle the greater volume as a result of the higher level of detail.',
          ]
        },
        {
          ticket: {
            title: {
              src: GoogleLogo,
            },
            keyValuePairs: {
              pairs: [
                {
                  key: 'Title',
                  value: 'Software Engineer Intern',
                },
                {
                  key: 'Location',
                  value: 'Mountain View, CA',
                },
                {
                  key: 'Department',
                  value: 'Shopping',
                }
              ]
            },
            dateRange: {
              start: new Date('2022-05-01'),
              end: new Date('2022-08-01'),
            },
          },
          bulletPoints: [
            'Reduced storage by half by leveraging a new format to store historical product names that minimized duplicate data.',
            'Designed a new algorithm to populate the historical product names with greater efficiency.',
            'Built a new processor (C++) to analyze 4 billion+ product listings multiple times daily for product name changes.',
          ]
        },
        {
          ticket: {
            title: {
              src: AmazonLogo,
            },
            keyValuePairs: {
              pairs: [
                {
                  key: 'Title',
                  value: 'Software Development Engineer Intern',
                },
                {
                  key: 'Location',
                  value: 'Seattle, WA',
                },
              ],
            },
            dateRange: {
              start: new Date('2021-05-01'),
              end: new Date('2021-08-01'),
            },
          },
          bulletPoints: [
            'Built a web interface (React, Typescript) + AWS backend (Java) providing millisecond access to 50 million+ transactions',
            'Enabled accountants to diagnose issues in Amazon’s general ledger independently.',
            'Alleviated my team of engineers from helping accountants debug the same problems on their transactions every day.',
          ]
        },
        {
          ticket: {
            title: {
              src: NasaLogo,
            },
            keyValuePairs: {
              pairs: [
                {
                  key: 'Title',
                  value: 'Research Intern',
                },
                {
                  key: 'Program',
                  value: 'STEM in Earth Science (SEES)'
                },
                {
                  key: 'Location',
                  value: 'Austin, TX',
                },
              ],
            },
            dateRange: {
              start: new Date('2019-04-01'),
              end: new Date('2019-07-01'),
            },
          },
          bulletPoints: [
            'Quantified recent wildfire impact from 35,000 acres of satellite imagery, analyzed results (Python), presented conclusions to NASA coordinators, and used the results to advise local landowners on data-driven steps to recovery.',
          ]
        }
      ],
    },
  ];




export const NUMBER_OF_SECTIONS = ticketSections.length;

const Content = (props: ContentProps) => {

  return [
    (
      <TicketsBlock
        sections={ticketSections}
        refs={props.refs}
      />
    )
  ]
}

export default Content;