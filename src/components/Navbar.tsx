import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import color from '../constants/colors'
import ArrowButton from './ArrowButton'
import React from 'react';
import format from '../constants/format'

export type Section = {
  id: string;
  title: string;
}

export type MyNavBarProps = {
  sections: Section[];
  activeSection: number;
}

const MyNavbar = (props: MyNavBarProps) => (
  <Navbar
    expand="lg"
    variant='dark'
    style={{
      position: 'sticky',
      top: '-1px',
      backgroundColor: color.BACKGROUND,
    }}
  >
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav id="navbar">
        { 
          props.sections.map((section, index) => (
            <Nav.Link 
              href={`#${section.id}`}
              className={`${index === 0 ? '' : 'mx-2'}`}
            >
              <ArrowButton
                // Up if section passed, Down if section is below, and Left if current section
                direction={
                  index >= props.activeSection 
                    ? index === props.activeSection 
                      ? 'e' 
                      : 's'
                    : 'n'
                }
                active={index === props.activeSection}
              >
                {section.title}
              </ArrowButton>
            </Nav.Link>
          ))
        }
      </Nav>
      </Navbar.Collapse>
  </Navbar>
)

export default MyNavbar