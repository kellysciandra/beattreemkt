import React, {Component} from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';
import { logoutArtist } from '../actions/authActions'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class SignedInLinks extends Component {


    logout = (event) => {
        event.preventDefault()
        this.props.logoutArtist()
        console.log('logged_out')
        window.location.reload();
    }

    render() {
    return (
        <div>  
                <Nav navbar>
                <NavItem>
                    <NavLink href='/artist' className='link'>my/page</NavLink>
                    <NavLink href='/beats' className='link'>beats</NavLink> 
                    <NavLink href='/' onClick={this.logout} className='link'>logout</NavLink> 
                </NavItem>
                </Nav>
        </div>
    );
  }
}




export default withRouter(connect(null, {logoutArtist})(SignedInLinks));







