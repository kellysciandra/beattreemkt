import React, { Component } from 'react';
import ArtistForm from './ArtistForm.js'
import kelly from '../images/kelly.png'
import AudioPlayer from 'react-modular-audio-player';
import music from '../images/music.mp3'
import { Card, CardBody, Button, CardTitle, CardText, CardImg, CardLink, CardFooter} from 'reactstrap';

class ArtistDashboard extends Component {
    render() {

        // if artist isn't signed in render <ArtistForm/>
        // else render homepage 

        let playlist = [
            {
                src: {music},
                title: "titty",
                artist: "tittyboy"
            }
        ]

        return (
            <div>
         
                <Card className='artist_card'>
                <CardImg top width="100%" src={kelly} alt="Card image cap" />
                <CardBody>
                <CardTitle>Artist Name</CardTitle>
                <CardText>Artist Genre</CardText>
                <CardText>Artist Software</CardText>
                <CardText>Artist Hardware</CardText>
                <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
                <CardLink href="#">edit profile</CardLink>
                <CardLink href="#">add a beat</CardLink>
                </CardBody>
                </Card>

                <h1>beats</h1>
                <CardFooter className='artist_profile_beat'><AudioPlayer audioFiles={playlist} /> </CardFooter>
                <CardFooter className='artist_profile_beat'><AudioPlayer audioFiles={playlist} /> </CardFooter>
                <CardFooter className='artist_profile_beat'><AudioPlayer audioFiles={playlist} /> </CardFooter>
            </div>
        );
    }
}

export default ArtistDashboard;