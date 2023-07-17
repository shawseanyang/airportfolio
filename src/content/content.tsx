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

// TODO: figure out why adding in the content makes the page go completely blank

const ticketSections: SectionProps[] = 
  [
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
                  value: 'Software Engineering Intern',
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
              start: new Date('2021-05-24'),
              end: new Date('2021-08-13'),
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
                  value: 'Software Engineering Intern',
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
              start: new Date('2021-05-24'),
              end: new Date('2021-08-13'),
            },
          },
          bulletPoints: [
            'Improving traceability in Conduit (Google\'s primary global data processing engine) to reduce debugging time for Ads, Workspace, Youtube, Search, Analytics, & Assistant.',
            'Creating a prototype (C++) for our most detailed tracing system to date, measuring bottlenecks, and finding solutions to handle the greater volume as a result of the higher level of detail.',
          ]
        }
      ]
    },
    {
      id: 'projects',
      title: 'Projects',
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
                  value: 'Software Engineering Intern',
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
              start: new Date('2021-05-24'),
              end: new Date('2021-08-13'),
            },
            barcode: {
              displayText: 'Link to Project',
              url: 'https://www.google.com',
            }
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
                  value: 'Software Engineering Intern',
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
              start: new Date('2021-05-24'),
              end: new Date('2021-08-13'),
            },
          },
          bulletPoints: [
            'Improving traceability in Conduit (Google\'s primary global data processing engine) to reduce debugging time for Ads, Workspace, Youtube, Search, Analytics, & Assistant.',
            'Creating a prototype (C++) for our most detailed tracing system to date, measuring bottlenecks, and finding solutions to handle the greater volume as a result of the higher level of detail.',
          ]
        }
      ]
    }
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