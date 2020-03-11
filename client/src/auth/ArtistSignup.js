import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';


import { registerArtist } from '../actions/authActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
// import 'mdbreact/dist/css/mdb.css';


class ArtistSignup extends Component {
    constructor() {
        super()
        
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    componentDidMount() {
        // if (this.props.auth.isAuthenticated) {
        //     this.props.history.push('/employee')
        // }
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const newArtist = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password, 
            password2: this.state.password2
        };
        this.props.registerArtist(newArtist, this.props.history)
        // this.props.history.push("/admin")
    }

    render() {
        return (
          <div>
            <div className='signup_btn1'><a href='/artist'><h1 className='signup_artist'>artist</h1></a></div> 
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
                <MDBInput onChange={this.handleChange} label="Your name" group id="name" type="name" validate error="wrong" success="right" />
                <MDBInput onChange={this.handleChange} label="Your email" group id="email" type="email" validate error="wrong" success="right" />
                <MDBInput onChange={this.handleChange} label="Your password" group id="password" type="password" validate containerClass="mb-0" />
                <MDBInput onChange={this.handleChange} label="Confirmation" group id="password2" type="password2" validate containerClass="mb-0" />
                
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
            <div className='signup_btn2'></div> 
        </div>
        )
    }
}

ArtistSignup.propTypes = {
    registerArtist: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})



export default connect(mapStateToProps, { registerArtist })(withRouter(ArtistSignup))



























