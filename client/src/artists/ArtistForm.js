import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editArtist } from "../actions/authActions";

import { withRouter } from 'react-router-dom'
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

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
        [event.target.name]: event.target.value
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
    }



    render() {

      const { spotify_url, instagram_url, image, beat, software, genre, bio} = this.state
      return (
        <div>
          <div className='form_btn1'><a href='/artist'><h1 className='form_header'>please complete your profile</h1></a></div>      
        <div className='signup_form2'>
        <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>any information you'd like to provide</Label>
        </FormGroup>

        <FormGroup>
          <Label for="exampleUrl">Spotify URL</Label>
          <Input
            type="url"
            name="spotify_url"
            id="exampleUrl"
            placeholder="link to spotify"
            value={spotify_url}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="instagram_url">Instagram URL</Label>
          <Input
             type="url"
            name="instagram_url"
            id="exampleNumber"
            placeholder="link to instagram"
            value={instagram_url}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="software">Most Used Software</Label>
          <Input
            type="search"
            name="software"
            id="exampleSearch"
            placeholder="most used software"
            value={software}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSearch">Genre/Style</Label>
          <Input
            type="search"
            name="genre"
            id="exampleSearch"
            placeholder="please pick one"
            value={genre}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Bio</Label>
          <Input type="textarea" name="bio" id="exampleText" value={bio}  onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Image</Label>
          <Input type="file" name="image" id="exampleFile" value={image}  onChange={this.handleChange} />
          <FormText color="muted">
            Image is everything.  Please upload one.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Track</Label>
          <Input type="file" name="beat" id="exampleFile" value={beat}  onChange={this.handleChange} />
          <FormText color="muted">
            Track must be in .wav or .mp3 format
          </FormText>
        </FormGroup>

        <Button>Submit</Button>
        </Form>
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
















