import React from 'react'
import './Body.css';
import Header from './Header';
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
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

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle"></PlayCircleFilledIcon>
                    <FavoriteIcon fontSize="large"></FavoriteIcon>
                    <MoreHorizIcon></MoreHorizIcon>
                </div>
                <div className="songs_list">

                </div>
            </div>
        </div>
    )
}

export default Body
