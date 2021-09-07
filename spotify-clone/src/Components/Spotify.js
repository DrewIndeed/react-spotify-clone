export const authEndPoint = 'https://accounts.spotify.com/authorize';

// client id:  0691dd4aa01640f6a0cae32ed821e4ce
// b3240436c04a43e1837176579d3f59f0
const redirectUri = 'http://localhost:3000';

const clientId = 'b3240436c04a43e1837176579d3f59f0';

const scope = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
}

export default function loginUrl() {
    return `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`;
}






