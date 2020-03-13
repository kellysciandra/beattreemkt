import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

//imports
import { editArtist } from "../actions/authActions";


import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
// import 'mdbreact/dist/css/mdb.css';


class ArtistForm extends Component {
    constructor() {
      super() 

      this.state = {
        artist_id: '',
        spotify_url: "",
        instagram_url: "",
        software: "",
        genre: "",
        bio: "",
        image: "",
        beat: ""
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
          this.setState({
              errors: nextProps.errors
          })
      }
    }


    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()

      const artistData = {
        _id: this.props.artist,
        spotify_url: this.state.spotify_url,
        instagram_url: this.state.instagram_url,
        software: this.state.software,
        genre: this.state.genre,
        bio: this.state.bio,
        image: this.state.image,
        beat: this.state.beat
      }
      this.props.editArtist(artistData)
      //this.props.history.push('./artist)
    }

    render() { 
      return (
        <div>
          <div className='form_btn1'><a href='/artist'><h1 className='form_header'>complete your profile</h1></a></div>      
            <div className='signup_form2'>
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="8">
                    <MDBCard>
                        <MDBCardBody  className="mx-4">
                      <div className="text-center"> <h3 className="mb-5"> <strong>sign/up</strong> </h3> </div>

                        <MDBInput onChange={this.handleChange} label="spotify_url" group id="spotify_url" type="spotify_url" validate error="wrong" success="right" />
                        <MDBInput onChange={this.handleChange} label="instagram_url" group id="instagram_url" type="instagram_url" validate error="wrong" success="right" />
                        <MDBInput onChange={this.handleChange} label="software" group id="software" type="software" validate containerClass="mb-0" />
                        <MDBInput onChange={this.handleChange} label="genre" group id="genre" type="genre" validate containerClass="mb-0" />
                        <MDBInput onChange={this.handleChange} label="bio" group id="bio" type="bio" validate containerClass="mb-0" />
                        <MDBInput onChange={this.handleChange} label="image" group id="image" type="file" validate containerClass="mb-0" />
                        <MDBInput onChange={this.handleChange} label="beat" group id="beat" type="file" validate containerClass="mb-0" />
                        
                      <div className="text-center mb-3">
                        <MDBBtn onClick={this.handleSubmit} type="submit" gradient="blue" rounded className="btn-block z-depth-1a"> edit profile </MDBBtn>
                      </div>

                        </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
          </div>
        <div className='form_btn2'></div> 
      </div>
      )
    }
}

  ArtistForm.propTypes = {
    editArtist: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    artist: state.auth.artist.id,
    auth: state.auth,
    errors: state.errors
  });



export default connect(mapStateToProps, { editArtist })(withRouter(ArtistForm))

