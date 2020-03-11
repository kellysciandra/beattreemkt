import React, { Component } from 'react';
import Beats from '../beats/Beats.js'

class Dashboard extends Component {
    render() {
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
                    <i class="fab fa-spotify fa-5x"></i><i class="fab fa-instagram fa-5x"></i>
                </div>

                <div className='beat_container'>
                <Beats />
                </div>
            </div>
        );
    }
}

export default Dashboard;