import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import kelly from '../images/kelly.png'

// import AudioPlayer from "react-h5-audio-player";
import AudioPlayer from 'react-modular-audio-player';
import music from '../images/music.mp3'

class Beats extends Component {

 
    render() {

        let playlist = [
            {
                src: {music},
                title: "titty",
                artist: "tittyboy"
            }
        ]
 
        return (
            <div>
                <div className='beat_cards'>
                <Card>
                    <Card.Img className='image' variant="top" src={kelly} />
                    <Card.Body>
                    <Card.Title>persons name    <i class="far fa-user fa-2px"></i></Card.Title> 
                    <Card.Text> 
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <AudioPlayer audioFiles={playlist} /> 
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                
 
            </div>
            </div>
        );
    }
}

export default Beats;