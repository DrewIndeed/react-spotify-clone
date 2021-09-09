import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c5d3a02e-03d7-4de5-b5db-150eefb4e21a/20.jpg"
          alt="current song album logo"
        />
        <div className="footer__songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green"></ShuffleIcon>
        <SkipPreviousIcon className="footer__icon"></SkipPreviousIcon>
        <PlayCircleOutlineIcon
          fontSize="large"
          className="footer__icon"
        ></PlayCircleOutlineIcon>
        <SkipNextIcon className="footer__icon"></SkipNextIcon>
        <RepeatIcon className="footer__green"></RepeatIcon>
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon></PlaylistPlayIcon>
          </Grid>
          <Grid item>
            <VolumeDownIcon></VolumeDownIcon>
          </Grid>
          <Grid item xs>
            <Slider></Slider>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
