import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';







class Footer extends Component {

    render() {
        return (
            <div className='bottom'>
                <Nav className='botton_nav'>
                    <NavItem className='footer_column1'><br></br>
                        beattreeMKT
                        <NavLink className='footer_link' href="#">privacy</NavLink>
                        <NavLink className='footer_link' href="#">terms and conditions</NavLink>
                    </NavItem>

                    <NavItem className='footer_column2'><br></br>
                        artists
                        <NavLink className='footer_link' href="#">services</NavLink>
                        <NavLink className='footer_link' href="#">partners</NavLink>
                    </NavItem>

                    <NavItem className='footer_column3'><br></br>
                        producers
                        <NavLink className='footer_link' href="#">services</NavLink>
                        <NavLink className='footer_link' href="#">partners</NavLink>
                    </NavItem>

                    <NavItem className='footer_column4'><br></br>
                        follow us 
                        <NavLink className='footer_link' href="#">instagram</NavLink>
                        <NavLink className='footer_link' href="#">spotify</NavLink>
                    </NavItem>

                    <NavItem className='footer_column2'><br></br>
                        @2020 beattreeMKT, inc. All rights reserved.
                        
                    </NavItem>
                </Nav>
            </div>
        );
    };
};

export default Footer;