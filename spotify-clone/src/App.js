import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./Components/Spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./Components/Player";
import { useDataLayerValue } from "./Components/DataLayer"

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
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
    }
  }, [dispatch, token]);

  console.log(token);
  console.log(user);
  return (
    <div className="App">{token ?
      <Player /> :
      <Login />}</div>
  );
}

export default App;
