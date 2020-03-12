import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand  } from 'reactstrap';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const NavBar = (props) => { console.log(props)
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const links = (props.artist.id) ? <SignedInLinks />
        : <SignedOutLinks />


  return (
    <div>  
      <Navbar className='nav' light>
        <NavbarToggler onClick={toggleNavbar} className='toggler'/>
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                {links}
              </NavItem>
            </Nav>
          </Collapse>
        <NavbarBrand href='/' className='brand_link'> beattreeMKT</NavbarBrand>   
      </Navbar>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    artist: state.auth.artist
  }
}


export default connect(mapStateToProps)(NavBar);







