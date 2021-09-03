import React from "react";
import "./Login.css";
import ContinueWith from "./ContinueWith";

function Login() {
  return (
    <div class="login">
      <div className="login__logo">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
          alt="spotify logo"
        />
      </div>
      <p>To continue, click Quick Log In.</p>
      <div className="buttons">
        <ContinueWith
          textColor="white"
          backgroundColor="#4267b2"
          textContent="CONTINUE WITH FACEBOOK"
          border="2px solid #4267b2"
          isSpecial
          belongTo="facebook"
        />
        <ContinueWith
          textColor="white"
          backgroundColor="black"
          textContent="CONTINUE WITH APPLE"
          border="2px solid black"
          isSpecial
          belongTo="apple"
        />
        <ContinueWith
          textColor="gray"
          backgroundColor="white"
          textContent="CONTINUE WITH GOOGLE"
          border="2px solid gray"
          belongTo="google"
        />
        <ContinueWith
          textColor="gray"
          backgroundColor="white"
          textContent="CONTINUE WITH PHONE NUMBER"
          border="2px solid gray"
          belongTo=""
        />
        <ContinueWith
          textColor="black"
          backgroundColor="#1cd562"
          textContent="QUICK LOG IN"
          border="2px solid #1cd562"
          belongTo="spotify"
          isSpecial
        />
      </div>
    </div>
  );
}

export default Login;
