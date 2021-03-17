import React from 'react'
import SearchBar from './Components/SearchBar/SearchBar'
import SearchResults from './Components/SearchResults/SearchResults'
import Playlist from './Components/Playlist/Playlist'
import Spotify from './util/Spotify'

import './App.css';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      searchResults: [],
      playlistName: 'baobao-playlist',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  // Updates the name of the Playlist
  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    });
  }

  // Adds track from Search Results to Playlist
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    // if (tracks.find(savedTrack => savedTrack.id === track.id)) {
    //  return;
    //  this.setState(prevState => ({
    //   playlistTracks: [...prevState.playlistTracks, track]
    // }));
  //  }
   tracks.push(track);
   this.setState({playlistTracks: tracks})
 }

 // Removes track from Playlist by filtering out track id from playlistTracks
 removeTrack(track){ 
  // this.setState({
  //   playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
  // });
     let tracks = this.state.playlistTracks;
     tracks = tracks.filter(currentTracks => currentTracks.id !== track.id)
     this.setState({playlistTracks:tracks})   
    }

 // Updates the name of the Playlist
 updatePlaylistName(name){
     this.setState({
      playlistName:name
    })  
 }

 // Sends search term request to spotify and returns results of search in the search results panel
 search(term){
  Spotify.search(term).then(searchResults=>{
    this.setState({searchResults: searchResults})
  }) 
}

  // Saves playlist name and tracks to user's account
 savePlaylist(){
   const trackURIs = this.state.playlistTracks.map(track=>track.uri)
   Spotify.savePlaylist(this.state.playlistName,trackURIs).then(()=>{
     this.setState({
      playlistName:'New PlayList',
      playlistTracks: []
     })
   })
 }


  render(){
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
       <SearchBar 
           onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onRemove= {this.removeTrack}
              onNameChange = {this.updatePlaylistName}
              onSave={this.savePlaylist}
              /> 
        </div>
      </div>
    </div>
  );
  }
  }
  
  export default App;
  