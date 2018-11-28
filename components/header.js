import React from 'react';
import {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar dark color="dark" expand="md" fixed="top">
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <NavbarBrand href="/">
          <img src="/static/logo.png" />
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Docs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                API
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                Roadmap
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                <i className="fab fa-github fa-lg"></i>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
