import React from 'react'
import './Body.css';
import Header from './Header';

function Body( props ) {
    return (
        <div className="body">
            <Header spotify={props.spotify}></Header>
        </div>
    )
}

export default Body
