import React, { Component } from 'react';
import Beats from '../beats/Beats.js'
import { connect } from 'react-redux';



class Dashboard extends Component {


    render() { console.log(this.props.artist)
  
        return (
            <div className='homepage'>
                <div className='btn_container'>
                <div className='dash_btn1'>
                <a href='/artist'><h1 className='artist'>artist</h1></a>
                </div>
                <div className='dash_btn2'>
                </div>
                </div>
                <div className='btn_container2'>     
                 <div className='dash_btn3'>
                 <a href='/producer'><h1 className='artist'>producer</h1></a>
                </div>
                <div className='dash_btn4'>
                </div>
                </div>
                <div className='btn_container3'>
                    <a href="https://www.instagram.com/beattreemkt/"><i class="fab fa-spotify fa-5x"></i></a><i class="fab fa-instagram fa-5x"></i>
                </div>
                <div className='beat_container'>
                <Beats />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => { 
    return {
      artist: state.auth.artist,
      auth: state.auth.isAuthenticated
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
    
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)




