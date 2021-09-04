import React from 'react'
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";

function Player( {props} ) {
    return (
        <div className="player">
            <div className="player__body">
                {/* sidebar */}
                <Sidebar />
                {/* body */}
                <Body />
            </div>

            {/* footer */}
        </div>
    )
}

export default Player
