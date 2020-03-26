import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'


import kelly3 from '../images/kelly3.png'
import music from '../images/music.mp3'
// import TopArtists from '../artists/TopArtists.js'
// import TopProducers from '../producers/TopProducers.js'

import AudioPlayer from 'react-h5-audio-player';

import 'react-h5-audio-player/src/styles.scss' 

import { connect } from 'react-redux';
import { fetchArtists } from "../actions/authActions";

class BeatsDashboard extends Component {
    constructor() {
        super()
        
    }

    componentDidMount = () => {
        this.props.fetchArtists()
    }

    render() { 
        const artists = this.props.artists ? this.props.artists.map((artist) => 
            <Card className="card border-0" >
            <Card.Img className='beats_dashboard_image' variant="top" src={kelly3}/>
            <Card.Title className='card_name_dashboard'><br></br>{artist.name}</Card.Title> 
                <small className="text-muted">uploaded 3 mins ago <i class="far fa-user fa-2px"></i>  </small>
                
                <div className='beats_dashboard_links'>  
                    <a className="beats_dashboard_spotify" href={artist.spotify}><i class="fab fa-spotify fa-2x"></i></a><i class="fab fa-instagram fa-2x"></i>
                </div>
                
            <Card.Body>
            <div className='audio-player'>
            <AudioPlayer
                src={music}
                showJumpControls={false}
             />
            </div>
            </Card.Body>
                {/* <h1 className='bio_bar'>{artist.genre}</h1> */}
            </Card>
        ): <h1>loading artist</h1>

        
        return (
            <div>
                <div className='beats_title_bar'>
                    <div className='beats_todays_beats'>
                        <div className='beats_dashboard_btn2'>
                        <a href='/artist'><h1 className='beats_todays_beats_header'>today's beats</h1></a>
                        </div>
                    </div>
                </div>  
                <div className='beats_card'>
                {artists}
                </div>
        </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuthenticated, 
        artists: state.auth.artists
    }
}



export default connect(mapStateToProps, {fetchArtists})(BeatsDashboard);




