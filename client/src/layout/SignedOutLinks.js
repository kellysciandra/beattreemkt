import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';


const SignedOutLinks = (props) => { 


  return (
    <div>  
            <Nav navbar>
              <NavItem>
              <NavLink href="/signup/" className='link'>sign/up</NavLink> 
              <NavLink href="/login/" className='link'>sign/in</NavLink> 
              <NavLink href="/" className='link'>home</NavLink>
              </NavItem>
            </Nav>
    </div>
  );
}



export default SignedOutLinks;







