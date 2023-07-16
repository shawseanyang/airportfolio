import { BlockAndProps } from '../content/types';
import BigTextBlock, { BigTextBlockProps } from '../components/BigTextBlock';
import TicketsBlock, { TicketsBlockProps } from '../components/TicketsBlock';
import Navbar, { NavBarProps } from '../components/Navbar';
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
                  value: 'Mountain View, CA',
                }
              ]
            },
            dateRange: {
              start: new Date('2021-05-24'),
              end: new Date('2021-08-13'),
            },
            barcode: {
              url: 'https://www.linkedin.com/in/sean-yang-1b1b1b1b1/',
              displayText: 'LinkedIn',
            }
          },
          bulletPoints: [
            'This is some placeholder text for the first of many bullet points.',
            'Here is some more placeholder text for the second bullet point.',
            'This is the third bullet point.',
          ]
        }
      ]
    }
  ];

export const NUMBER_OF_SECTIONS = ticketSections.length;

const Content = (props: ContentProps) => {

  const navLinks = ticketSections.map(({ id, title }) => { return { url: id, displayText: title }});

  return [
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
      />
    )
  ]
}

export default Content;