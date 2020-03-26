import React, { Component } from 'react';
// import Beats from '../beats/Beats.js'
import { connect } from 'react-redux';



class Dashboard extends Component {


    render() { console.log(this.props.artist)
  
        return (
            <div className='homepage'>
                <div className='main_header'>
                    <marquee><h1 className='homepage_header'>BlahBlah BlahBlah BlahBlah BlahBlah  BlahBlah BlahBlah</h1></marquee>
                </div>

                <div className='homepage_container0'>
                <div className='dash_btn0'><a href='/beats'><h1 className='artist'>beats</h1></a></div>
                <div className='dash_btn01'></div>
                </div>

                <div className='homepage_container1'>
                <div className='dash_btn1'><a href='/login'><h1 className='artist'>artist</h1></a></div>
                <div className='dash_btn11'></div>
                </div>

                <div className='homepage_container2'>     
                 <div className='dash_btn2'><a href='/login'><h1 className='artist'>producer</h1></a></div>
                <div className='dash_btn22'></div>
                </div>

                <div className='beat_container'>
                {/* <Beats /> */}
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





