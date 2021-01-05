import './sidebar.css';
import React from 'react';
import logo


class Sidebar extends React.Component{
    render() {
        return(
            <div className='sidebar'>
                <img src={'%PUBLIC_URL%/logo192.png'}/>
            </div>
        )
    }
}

export default Sidebar
