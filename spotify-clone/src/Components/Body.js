import React from 'react'
import './Body.css';
import Header from './Header';
import { useDataLayerValue } from "./DataLayer";

function Body(props) {
    const [{ norah_jones }] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotify={props.spotify}></Header>
            <div className="body__info">
                <img src={ norah_jones?.images[0].url } alt="discovery thumbnail" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{ norah_jones?.name }</h2>
                    <p>{ norah_jones?.description }</p>
                </div>
            </div>
        </div>
    )
}

export default Body
