import React, { Component } from 'react';
import ArtistForm from './ArtistForm.js'
import kelly3 from '../images/kelly3.png'
import music from '../images/music.mp3'


import AudioPlayer from 'react-h5-audio-player';

import Card from 'react-bootstrap/Card'
import {Button} from 'reactstrap';
import { connect } from 'react-redux'
// import { logoutArtist } from '../actions/authActions'




class ArtistDashboard extends Component {

    render() { console.log(this.props.auth, this.props.artist)



        const artist = this.props.auth ? 
        <Card className="card border-0" >
        <Card.Img className='beats_dashboard_image' variant="top" src={kelly3}/>
        <Card.Title className='card_name_dashboard'><br></br>{this.props.artist.name}</Card.Title> 
            <small className="text-muted">uploaded 3 mins ago <i class="far fa-user fa-2px"></i>  </small>
            
            <div className='beats_dashboard_links'>  
                <a className="beats_dashboard_spotify" href={this.props.artist.spotify}><i class="fab fa-spotify fa-2x"></i></a><i class="fab fa-instagram fa-2x"></i>
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
         : <ArtistForm/>

        return (
            <div>
            <div className='beats_title_bar'>
                    <div className='beats_todays_beats'>
                        <div className='beats_dashboard_btn2'>
                        <a href='/artist'><h1 className='artists_name_header'>{this.props.artist.name}</h1></a>
                    </div>
                </div>
            </div> 

            <div className='artist_button_container'>
            <Button className='edit_info' href="/artist/edit/photo">change photo</Button>
            <Button className='add_beat' href="/artist/edit/beat">upload beat</Button>
            <Button className='edit_photo' href="/artist/edit">edit profile</Button>
            </div>
            <div className='artists_card'>
                {artist}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuthenticated,
        artist: state.auth.artist,
    }
}

export default connect(mapStateToProps)(ArtistDashboard);