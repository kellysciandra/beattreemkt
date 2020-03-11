import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';


import { loginArtist } from "../actions/authActions";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
// import 'mdbreact/dist/css/mdb.css';


class ArtistLogin extends Component {
    constructor() {
        super()
        
        this.state = {
            email: "",
            password: "",
            errors: {}
        }
    }

    componentDidMount() {
      // If logged in and user navigates to Login page, should redirect them to dashboard
      if (this.props.auth.isAuthenticated) {
        this.props.history.push("/artist");
      }
    }
  
    componentWillReceiveProps(nextProps) {
      if (nextProps.auth.isAuthenticated) {
        this.props.history.push("/artist");
      }
  
      if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }

    handleChange = event => {

        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = e => {
      e.preventDefault();
  
      const artistData = {
        email: this.state.email,
        password: this.state.password
      };

      console.log(artistData)

      this.props.loginArtist(artistData);
    };

    render() {
        return (
            <div className="signup_form">

    <MDBContainer>
        <MDBRow>
          <MDBCol md="8">
            <MDBCard>
                <MDBCardBody  className="mx-4">
              <div className="text-center">
              <h3 className="mb-5">
              <strong>sign/up</strong>
              </h3>
              </div>
               
                <MDBInput onChange={this.handleChange} label="Your email" group id="email" type="email" validate error="wrong" success="right" />
                <MDBInput onChange={this.handleChange} label="Your password" group id="password" type="password" validate containerClass="mb-0" />
               
                
              <p className="font-small blue-text d-flex justify-content-end pb-3"> Forgot <a href="#!" className="blue-text ml-1"> Password? </a></p>
              
              <div className="text-center mb-3">
                <MDBBtn onClick={this.handleSubmit} type="submit" gradient="blue" rounded className="btn-block z-depth-1a"> sign/up </MDBBtn>
              </div>
              
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or sign/up with: </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn type="button" color="white" rounded className="mr-md-3 z-depth-1a">
                <MDBIcon fab icon="facebook-f" className="blue-text text-center" /></MDBBtn>
                <MDBBtn type="button" color="white" rounded className="mr-md-3 z-depth-1a">
                <MDBIcon fab icon="twitter" className="blue-text" /> </MDBBtn>
                <MDBBtn type="button" color="white" rounded className="z-depth-1a">
                <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
                </MDBCardBody>
                <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end"> Already a member?<a href="#!" className="blue-text ml-1"> sign/in</a></p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

            </div>
        )
    }
}

ArtistLogin.propTypes = {
    loginArtist: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})



export default connect(mapStateToProps, { loginArtist })(withRouter(ArtistLogin))



























