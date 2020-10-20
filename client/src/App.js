import React from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';
var request = require('request');
const spotify = new SpotifyWebApi();

class App extends Component {
  
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) spotify.setAccessToken(token);
    this.getNowPlaying();
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: {name: 'Not Checked', albumArt: ' '}
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }
  getNowPlaying(){
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: { 
              name: response.item.name, 
              albumArt: response.item.album.images[0].url
            }
        });
      })
  }
  getMostPlayed() {
    spotifyApi
      .getMyTopTracks()
      .then(
        function (data) {
          console.log('My Top Tracks', data);
        },
        function (err) {
          console.error(err);
        }
      );
  }
  render() {
    return (
      <div className="App">
        <a href='http://localhost:8888' > Login to Spotify </a>
      </div>
    );
  }
}


export default App;
