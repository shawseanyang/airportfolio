import { BlockAndProps } from '../content/types';
import BigTextBlock, { BigTextBlockProps } from '../components/BigTextBlock';
import TicketsBlock, { TicketsBlockProps } from '../components/TicketsBlock';
import Navbar, { NavBarProps } from '../components/Navbar';
import { SectionProps } from '../components/Section';
import OshKoshMe from '../media/oshkosh/me.jpg';
import OshKoshClass from '../media/oshkosh/class.jpg';
import OshKoshPlane from '../media/oshkosh/plane.jpg';
import RevolveDemoEastCost from '../media/awshackathon/Revolve Demo East Coast.gif';
import ThreeToTwoDataPanelOpen from '../media/awshackathon/3to2_data_panel_open.png';
import LandingPage from '../media/awshackathon/Landing Page.png';
import VariableChangeDemo from '../media/awshackathon/Variable Change Demo.gif';
import UncdfCountry from '../media/uncdf/country.png';
import UncdfMap from '../media/uncdf/map.png';
import UncdfMetric from '../media/uncdf/metric.png';
import TitleImage from '../components/Ticket/TitleImage';
import AmazonLogo from '../media/titles/amazon.png';
import NasaLogo from '../media/titles/nasa.png';
import HarvardLogo from '../media/titles/harvard.png';
import T4SGLogo from '../media/titles/t4sg.png';

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
          title: <TitleImage src={HarvardLogo} />,
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
            start: new Date('2020/08/01'),
            end: new Date('2024/05/01'),
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
          title: <TitleImage src={AmazonLogo} />,
          subtitle: 'Software Engineering Intern',
          text:
            `
            Launched a *large-scale web application* & accompanying Java *API* presenting accountants with the *processing status of 50 million+ journals* destined for the *general ledger* in the FinTech department, *streamlining month-close activities*
            Designed an efficient, *source-controlled*, *serverless*, and *scalable* architecture
            Delivered *code-reviewed*, *version-controlled* results using *agile* development practices
            *Optimized* complex database *queries* to the milliseconds
            *Eliminated cold start times* associated with serverless computing
            `,
          range: {
            start: new Date('2021/05/01'),
            end: new Date('2021/08/01'),
          },
          link: {
            url: 'http://www.amazon.com',
            displayText: 'Amazon',
          }
        },
        {
          title: <TitleImage src={NasaLogo} />,
          subtitle: 'SEES Research Intern',
          text:
            `
            Quantified recent wildfire impact from *35,000 acres* of *satellite imagery* and analyzed results using *Python*
            Presented conclusions at UT Austin Center for Space Research to scientists, mentors, and *NASA coordinators*
            Advised local landowners on *data-driven steps to recovery*
            `,
          range: {
            start: new Date('2019/05/01'),
            end: new Date('2019/07/01'),
          },
          link: {
            url: 'http://www.tsgc.utexas.edu/sees-internship/',
            displayText: 'SEES',
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
          title: <TitleImage src={T4SGLogo} />,
          subtitle: 'Senior Software Engineer',
          text:
            `
              *Client: United Nations Capital Development Fund (UNCDF)*
              Lead development of a "*Financial Health Dashboard*" *aggregating statistics* from across UN data channels into one *human-friendly*, *centralized dashboard*
              Transformed project proposal into an *actionable* and *scalable architecture*
              Established *coding norms* to ensure *clean*, *maintainable*, & *reusable* code
              *Central point of accountability* for technical sphere of project as the lead engineer
            `,
          range: {
            start: new Date('2021/08/01'),
            end: new Date('2021/12/01'),
          },
          link: {
            url: 'https://socialgood.hcs.harvard.edu/',
            displayText: 'T4SG',
          }
        },
        {
          carouselImageSources: [
            UncdfCountry,
            UncdfMap,
            UncdfMetric,
          ]
        },
        {
          title: 'AWS Hackathon 1st Place',
          subtitle: 'Access & Equity: COVID-19 Health Vulnerability Mapper',
          text:
            `
              *1st out of 1367* in the *AWS Data Exchange Hackathon*
              Developed mapper that leverages *real-time COVID data* and the latest *social vulnerability* metrics from *CDC* to highlight relation between *disparity & disease*
              Employed *Mapbox*, *Node.js*, *D3.js*, AWS *Elastic Beanstalk*, *Lambda*, *S3*, *CloudWatch*, and *Data Exchange* to process 400,000 lines of new data each day
            `,
          range: {
            start: new Date('2020/07/01'),
            end: new Date('2020/09/01'),
          },
          link: {
            url: 'http://covid.shawsean.com',
            displayText: 'Demo',
          }
        },
        {
          carouselImageSources: [
            ThreeToTwoDataPanelOpen,
            LandingPage,
            RevolveDemoEastCost,
            VariableChangeDemo
          ]
        },
        {
          title: 'Bear Force One',
          subtitle: 'Student Pilot, RV-12 Builder',
          text:
            `
            *Built* an *FAA-certified*, *two-seater airplane* (Van's RV-12) with a team of students 
            Personally *flew it 1,000 miles* across the U.S. to the *largest general aviation airshow* in the country (Airventure Oshkosh)
            Specifically built the avionics, control system, wing-box, tail, and right-wing.
            `,
          range: {
            start: new Date('2020/04/01'),
            end: new Date('2020/06/01'),
          },
          link: {
            url: 'https://www.eaa.org/airventure',
            displayText: 'Oshkosh',
          }
        },
        {
          carouselImageSources: [
            OshKoshMe,
            OshKoshClass,
            OshKoshPlane
          ]
        },
        
      ],
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
            *Soft Skills:* Agile methods, Technical mentorship, Product management, UX, Wireframing,
            *Languages:* Javascript, Typescript, Java, Python, HTML, CSS, SQL, C++, Bash, GraphQL
            *Technical:* Source control, Code review, Multithreaded programming, Unit testing, CI/CD, Docker  
            *Frameworks:* React, Node, Express
            *AWS:* EC2, S3, Amplify, IAM, AppSync, Cognito, RDS, API Gateway, Elastic Beanstalk, CloudWatch
            *Google Cloud:* Firebase
            `,
        }
      ]
    },
    {
      id: 'contact',
      title: 'Connecting Flights',
      subtitle: 'Connect with me',
      tickets: [
        {
          email: 'shaw.sean.yang@gmail.com',
          placeholder: 'Your top secret message in the making...'
        }
      ]
    }
  ];

  const navLinks = ticketSections.map(({ id, title }) => { return { url: id, displayText: title }});

  return [
    (
      <BigTextBlock
      text="Hi! I'm Sean Yang, and this is my *Airportfolio*"
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