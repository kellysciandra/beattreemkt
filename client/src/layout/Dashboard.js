import React, { Component } from 'react';
import Beats from '../beats/Beats.js'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1 className='recent_uploads'>recent uploads</h1>
                <Beats />
                <Beats />
                <Beats />
            </div>
        );
    }
}

export default Dashboard;