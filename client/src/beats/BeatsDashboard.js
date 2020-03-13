import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

import kelly from '../images/kelly.png'
import kelly3 from '../images/kelly3.png'
import joy from '../images/joy.png'
// import TopArtists from '../artists/TopArtists.js'
// import TopProducers from '../producers/TopProducers.js'

// import AudioPlayer from "react-h5-audio-player";
import AudioPlayer from 'react-modular-audio-player';
import music from '../images/music.mp3'
import { connect } from 'react-redux';
import { fetchArtists } from "../actions/authActions";

class BeatsDashboard extends Component {

    componentDidMount = () => {
        this.props.fetchArtists()
    }

 
    render() { console.log(this.props.artists)
        let playlist = [
            {
                src: {music},
                title: "titty",
                artist: "tittyboy"
            }
        ]



        const artists = this.props.artists ? this.props.artists.map((artist) => 
            <Card className="card border-0" >
            <Card.Img className='beats_dashboard_image' variant="top" src={kelly} />
            <Card.Title className='card_name_dashboard'>{artist.name}</Card.Title> 
                <div className='beats_dashboard_links'>  
                    <a className="beats_dashboard_spotify" href={artist.spotify}><i class="fab fa-spotify fa-2x"></i></a><i class="fab fa-instagram fa-2x"></i>
                </div>
            <Card.Body>
                <AudioPlayer audioFiles={playlist} /> 
                <small className="text-muted">uploaded 3 mins ago  </small>
                <i class="far fa-user fa-2px"></i> 
            </Card.Body>
                <h1 className='bio_bar'>{artist.genre}</h1>
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

                <div className='beats_dashboard_container'>
                    <div className='beats_cards_dashboard'>
                    {artists}
                </div>
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





























{/* <Card className="card border-0" >
<Card.Img className='beats_dashboard_image' variant="top" src={kelly3} />
<Card.Title className='card_name_dashboard'>kellynobody</Card.Title> 
    <div className='beats_dashboard_links'>  
        <a className="beats_dashboard_spotify" href="https://www.instagram.com/beattreemkt/"><i class="fab fa-spotify fa-2x"></i></a><i class="fab fa-instagram fa-2x"></i>
    </div>
<Card.Body>
    <AudioPlayer audioFiles={playlist} /> 
    <small className="text-muted">uploaded 3 mins ago  </small>
    <i class="far fa-user fa-2px"></i>
</Card.Body>
    <h1 className='bio_bar'>RAP</h1>
</Card>

<Card className="card border-0" >
<Card.Img className='beats_dashboard_image' variant="top" src={joy} />
<Card.Title className='card_name_dashboard'>lebbaby</Card.Title> 
    <div className='beats_dashboard_links'>  
        <a className="beats_dashboard_spotify" href="https://www.instagram.com/beattreemkt/"><i class="fab fa-spotify fa-2x"></i></a><i class="fab fa-instagram fa-2x"></i>
    </div>
<Card.Body>
    <AudioPlayer audioFiles={playlist} /> 
    <small className="text-muted">uploaded 3 mins ago  </small>
    <i class="far fa-user fa-2px"></i>
</Card.Body>
    <h1 className='bio_bar'>JAZZ</h1>
</Card> */}


















// <div className='beats_top_producers'>
// <div className='beats_dashboard_btn3'>
// <a href='/artist'><h1 className='beats_top_producers_header'>top producers</h1></a>
//     {/* insert <TopProducers /> */}
//     <TopProducers />
// </div>
// </div>

// <div className='beats_top_artists'>
// <div className='beats_dashboard_btn1'>
// <a href='/artist'><h1 className='beats_top_artist_header'>top artists</h1></a>
//     {/* insert <TopArtists /> */}
//     <TopArtists/>
// </div>
// </div>