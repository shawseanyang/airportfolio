import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import color from '../constants/colors'
import ArrowButton from './ArrowButton'
import React from 'react';
import format from '../constants/format'

export type Link = {
  url: string;
  displayText: string;
}

export type NavBarProps = {
  links: Link[];
  activeLink: number;
}

const MyNavbar = (props: NavBarProps) => (
  <Navbar
    expand="lg"
    variant='dark'
    style={{
      position: 'sticky',
      top: '-1px',
      backgroundColor: color.BACKGROUND,
      zIndex: format.MAX_Z_INDEX,
      width: '100%',
    }}
  >
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav id="navbar">
        { 
          props.links.map((link, index) => (
            <Nav.Link 
              href={`#${link.url}`}
            >
              <ArrowButton
                // Up if section passed, Down if section is below, and Left if current section
                direction={
                  index >= props.activeLink 
                    ? index === props.activeLink 
                      ? 'w' 
                      : 's'
                    : 'n'
                }
                active={index === props.activeLink}
              >
                {link.displayText}
              </ArrowButton>
            </Nav.Link>
          ))
        }
      </Nav>
      </Navbar.Collapse>
  </Navbar>
)

export default MyNavbar