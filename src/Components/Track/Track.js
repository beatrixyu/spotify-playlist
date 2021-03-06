import React from 'react'
import './Track.css'

class Track extends React.Component {

      constructor(props){
        super(props)
        this.addTrack = this.addTrack.bind(this)
        this.removeTrack = this.removeTrack.bind(this)

      }

// Renders either a + or a - link to add or remove tracks from playlist.
 renderAction() {
    if(this.props.onRemove){
    return <button 
            className="Track-action"
            onClick={this.removeTrack} > - </button>
     } else {
    return <button 
            className="Track-action" 
            onClick={this.addTrack}> + </button>
     }
 }
// Adds this.props.track as an argument to the addTrack method in App.js
  addTrack(){
    this.props.onAdd(this.props.track)
  }

// Adds this.props.track as an argument to the removeTrack method in App.js
  removeTrack(){
     this.props.onRemove(this.props.track)
    }

render(){
    return(
        <div className="Track">
          <div className="Track-information">
            <h3>{this.props.track.name}</h3>
            <p>{this.props.track.artist} | {this.props.track.album}</p>
          </div>
          {this.renderAction()}
        </div>    
        )
        } 
      }

export default Track