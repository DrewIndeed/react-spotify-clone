import React from 'react'
import './Body.css';
import Header from './Header';

function Body( props ) {
    return (
        <div className="body">
            <Header spotify={props.spotify}></Header>
            <div className="body__info">
                <img src="https://assets.website-files.com/5c1426cc1ac48f15ca9c8e22/5ee167c942a25f251fb308fa_discover%20weekly.jpg" alt="discovery thumbnail" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>Description...</p>
                </div>
            </div>
        </div>
    )
}

export default Body
