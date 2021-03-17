import React from 'react'
import Track from '../Track/Track'
import './TrackList.css'

class TrackList extends React.Component {
    render(){
        let trackObj;
        if(this.props.tracks){
            trackObj=this.props.tracks.map(
                track=>{
                    return <Track 
                            track={track} 
                            key={track.id} 
                            onAdd={this.props.onAdd}
                            tracks={this.props.tracks}
                            onRemove={this.props.onRemove}
                            isRemoval= {this.props.isRemoval}
                            />
                            
                }
            )
        }
        console.log(this.props.tracks, this.props.isRemoval)


        return(
            <div className="TrackList" >
             {trackObj}
            </div>
              )
    }
    

}

export default TrackList