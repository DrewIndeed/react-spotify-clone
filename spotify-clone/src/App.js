import { useEffect } from "react";
import "./App.css";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./Components/Spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./Components/Player";
import { useDataLayerValue } from "./Components/DataLayer"

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.setAccessToken(_token);
      // get the user account
      spotify.getMe().then(user => {
        // show me the user
        console.log(user);

        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
    });
    }
  }, [dispatch, token, user]);

  // console.log("TOKENNNN");
  // console.log(token);
  // console.log("USERRRRR");
  // console.log(user);
  
  return (
    <div className="App">{token ?
      <Player spotify /> :
      <Login />}</div>
  );
}

export default App;
