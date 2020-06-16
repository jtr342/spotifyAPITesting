
import SpotifyWebApi from 'spotify-web-api-js';
const token = 
const spotify = new SpotifyWebApi();
spotifyApi.setAccessToken('<here_your_access_token>');
spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
    function (data) {
      console.log('Artist albums', data);
    },
    function (err) {
      console.error(err);
    }
  );