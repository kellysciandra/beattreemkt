import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, NavbarBrand  } from 'reactstrap';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>  
   
      <Navbar className='nav' light>
      <NavbarToggler onClick={toggleNavbar} className='toggler'/>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/signup/" className='link'>sign/up</NavLink>
              <NavLink href="/singin/" className='link'>sign/in</NavLink>
              <NavLink href="/" className='link'>home</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavLink href='signup' className='top_link1'>artist</NavLink>
        <NavLink href='signup' className='top_link2'>producer</NavLink> 
        <NavbarBrand href='signup' className='brand_link'>beattreeMKT</NavbarBrand>   
      </Navbar>


  
    </div>
  );
}

export default NavBar;