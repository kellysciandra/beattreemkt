import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

import kelly from '../images/kelly.png'
import kelly3 from '../images/kelly3.png'
import joy from '../images/joy.png'

// import AudioPlayer from "react-h5-audio-player";
import AudioPlayer from 'react-modular-audio-player';
import music from '../images/music.mp3'

class BeatsDashboard extends Component {

 
    render() {
        let playlist = [
            {
                src: {music},
                title: "titty",
                artist: "tittyboy"
            }
        ]
        return (
            <div className='beats_dashboard_container'>
                <h1 className='beats_dashboard_header'></h1>
                <div className='beats_cards_dashboard'>
                <Card className="card border-0" >
                    <Card.Img className='image_dashboard' variant="top" src={kelly} />
                    <Card.Title className='card_name_dashboard'>kellynobody</Card.Title> 
                    <div className='beats_dashboard_spotify'>
                    <a href="https://www.instagram.com/beattreemkt/"><i class="fab fa-spotify fa-2x"></i></a>
                    <i class="fab fa-instagram fa-2x"></i>
                    <Card.Body></Card.Body>
                        </div>
                    <AudioPlayer audioFiles={playlist} /> 
                    <small className="text-muted">uploaded 3 mins ago  </small>
                    <i class="far fa-user fa-2px"></i>
                    </Card.Body>
                   
                </Card>

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

             </div>
            </div>
        );
    }
}

export default BeatsDashboard;