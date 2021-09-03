export const authEndPoint = 'https://accounts.spotify.com/authorize';

// client id:  0691dd4aa01640f6a0cae32ed821e4ce
const redirectUri = 'http://localhost:3000/';
const clientId = ' 0691dd4aa01640f6a0cae32ed821e4ce';

const scope = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndPoint}?cilent_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`;






