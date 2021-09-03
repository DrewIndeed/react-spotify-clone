import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./Components/Spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) setToken(_token);
  }, [token]);

  console.log(token);
  return (
    <div className="App">{token ? <h1>I am logged in</h1> : <Login />}</div>
  );
}

export default App;
