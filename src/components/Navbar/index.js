import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStylesComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo as={Link} to="/">
          <div style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </div>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink as={Link} to="/">Home</NavLink>
          <NavLink as={Link} to="/skills">Skills</NavLink>
          <NavLink as={Link} to="/experience">Experience</NavLink>
          <NavLink as={Link} to="/projects">Projects</NavLink>
          <NavLink as={Link} to="/education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink as={Link} to="/" onClick={() => setIsOpen(false)}>About</MobileLink>
            <MobileLink as={Link} to="/skills" onClick={() => setIsOpen(false)}>Skills</MobileLink>
            <MobileLink as={Link} to="/experience" onClick={() => setIsOpen(false)}>Experience</MobileLink>
            <MobileLink as={Link} to="/projects" onClick={() => setIsOpen(false)}>Projects</MobileLink>
            <MobileLink as={Link} to="/education" onClick={() => setIsOpen(false)}>Education</MobileLink>
            <GitHubButton
              style={{
                padding: '10px 16px',
                background: theme.primary,
                color: 'white',
                width: 'max-content'
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
