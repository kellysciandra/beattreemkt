import React, { Component } from 'react';
import ArtistForm from './ArtistForm.js'
import kelly from '../images/kelly.png'
import AudioPlayer from 'react-modular-audio-player';
// import music from '../images/music.mp3'
import { Card, CardBody, CardTitle, CardText, CardImg, CardLink, CardFooter, Button} from 'reactstrap';
import { connect } from 'react-redux'
// import { logoutArtist } from '../actions/authActions'

class ArtistDashboard extends Component {

    render() { console.log(this.props)
        let playlist = [
            {
                src: '../images/music.mp3',
                title: "titty",
                artist: "tittyboy"
            }
        ]

        const artist = this.props.auth ? 
        <Card className='artist_card'>
        <CardImg top width="100%" src={kelly} alt="Card image cap" />
        <CardBody>
        <CardTitle>{this.props.artist.name}</CardTitle>
        <CardText>{this.props.artist.genre}</CardText>
        <CardText>{this.props.artist.software}</CardText>
        <CardText>{this.props.artist.hardware}</CardText>
        <CardText>
        <small className="text-muted">Last updated 3 mins ago</small>
        </CardText>
        </CardBody>
        <div className='profile_beat_container'>
        <div className='artist_beat_box'>
        <CardFooter className='artist_profile_beat'><AudioPlayer audioFiles={playlist} /></CardFooter>
        </div>
        <div className='artist_beat_box2'>
        <CardFooter className='artist_profile_beat'><AudioPlayer audioFiles={playlist} /> </CardFooter>
        </div>
        <div className='artist_beat_box3'>
        <CardFooter className='artist_profile_beat'><AudioPlayer audioFiles={playlist} /> </CardFooter>
        </div>
        </div>
        </Card>     
         : <ArtistForm/>

        return (
            <div className='artist_main'>
            {artist}
            <Button className='edit_artists_page' href="/artist/edit">edit profile</Button>
            <Button className='edit_beat_artist_page' href="/artist/edit/beat">add a beat</Button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuthenticated,
        artist: state.auth.artist
    }
}

export default connect(mapStateToProps)(ArtistDashboard);