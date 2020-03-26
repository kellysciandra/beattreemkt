import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

import kelly from '../images/kelly.png'


// import AudioPlayer from "react-h5-audio-player";
import AudioPlayer from 'react-modular-audio-player';
import music from '../images/music.mp3'
import { connect } from 'react-redux';

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
                <h1 className='recent_uploads'>recent uploads</h1>
                <div className='beat_cards_right'>
                <Card className="card border-0" >
                    <Card.Img className='image' variant="top" src={kelly} />
                    <Card.Title className='card_name'>kellynobody</Card.Title> 
                    <Card.Body>
                    <AudioPlayer audioFiles={playlist} /> 
                    <small className="text-muted">uploaded 3 mins ago  </small>
                    <i class="far fa-user fa-2px"></i>
                    </Card.Body>
                </Card>
             </div>
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


export default connect(mapStateToProps)(Beats);











{/* <Card className="card border-0" >
<Card.Img className='image' variant="top" src={joy} />
<Card.Title className='card_name'>johnathon</Card.Title> 
<Card.Body>
<AudioPlayer audioFiles={playlist} /> 
<small className="text-muted">uploaded 3 mins ago  </small>
<i class="far fa-user fa-2px"></i>
</Card.Body>
</Card>

<Card className="card border-0" >
<Card.Img className='image' variant="top" src={kelly3} />
<Card.Title className='card_name'>lebbaby</Card.Title> 
<Card.Body>
<AudioPlayer  audioFiles={playlist} /> 
<small className="text-muted">uploaded 3 mins ago   </small>
<i class="far fa-user fa-2px"></i>
</Card.Body>
</Card> */}