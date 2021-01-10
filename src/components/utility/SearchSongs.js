import React, { Component } from 'react';
import { connect } from 'react-redux';
import yt_api_key from 'config/ytConfig'
import { addSongToRoom } from '../../store/actions/addSongAction'
import axios from 'axios'


class SearchSongs extends Component {
    state = {
        text: '',
        searchResults: {
            items: []
        },
        roomId: this.props.id,
        song: [],
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        }) 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({searchResults: {items: []}})
        axios.get(`https://www.googleapis.com/youtube/v3/search?maxResults=10&relevanceLanguage=en&regionCode=AU&topicId=/m/04rlf&part=snippet&q=${this.state.text}&key=${yt_api_key}`)
        .then((result) => {
          result.data.items.map((item) => {
   
                if(item.id.videoId !== undefined) {
                    // safe useful data
                    item.variablesId = item.id.videoId;
                    item.variablesTitle = item.snippet.title;
                    item.variablesThumbnail = item.snippet.thumbnails.medium.url;
                        
                    // return data to state
                    return this.setState({
                        searchResults: {
                            items: [
                                ...this.state.searchResults.items,
                                item
                            ]
                        }
                    })
                }
                else {
                    return null
                }
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }

    componentDidMount() {
        this.setState({
            song: this.props.queue.queues.song
        })
    } 


   

    addSongToRoom = () => {
        console.log(this.state.song);
      //  addSongToRoom(this.state.songs)
        this.props.addSongToRoom(this.state.song, this.state.roomId, this.props.queue);
        

    }

    render() {
        
        const  addSongToState = (song) => {
            
            this.setState({
                song: {
                    ...this.state.song,
                    [song.id.videoId]: {
                        id: song.id.videoId,
                        image: song.snippet.thumbnails.medium.url ,
                        title:song.snippet.title
                        
                    }
                }   
            
            })

      
            
        }
        console.log(this.state);
        let addBtn = this.state.searchResults.items.length > 0 ? <button className="btn deep-orange accent-2" onClick={this.addSongToRoom}>Tilføj</button> : null;
        return (
            <div className="SearchSongs">
                <div className="searchsongs-input">
                    <input type="text" id="text" className="mr-3" onChange={this.handleChange} placeholder="Skriv sang titel her" />
                    <button className="btn" onClick={this.handleSubmit}><i className="fas fa-search"></i> Søg</button>
                </div>
                <div className="song-results mt-1">

                {this.state.searchResults.items && this.state.searchResults.items.map(item => {
                        return (
                            <div className="card blue-grey darken-1 songs" onClick={() => addSongToState(item)}>
                                <div className="card-content">
                                    <img src={item.variablesThumbnail} alt="" />
                                </div>
                                <div className="card-action">
                                    <p className="white-text truncate">{item.variablesTitle}</p>
                                </div>
                            </div>             
                        )
                    })}

            </div>
            {addBtn}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSongToRoom: (roomId ,song, author) => dispatch(addSongToRoom(roomId ,song, author))
    }
}

export default connect(null, mapDispatchToProps)(SearchSongs);