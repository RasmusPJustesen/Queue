import React, { Component } from 'react'
import yt_api_key from 'config/ytConfig'
import axios from 'axios'
import { addSongToRoom } from '../../store/actions/addSongAction'
import { connect } from 'react-redux'

class SearchSongs extends Component {
    state = {
        text: '',
        searchResults: {
            items: []
        },
        songs: {},
        itemFocus: false
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
            //_.map(result.data.items, (item) => {
                //save useful data (item.snippet.title, item.snippet.thumbnails.medium.url, item.id.videoId) to state "searchResults: items"
                
                if(item.id.videoId !== undefined) {
                    
                    item.variablesId = item.id.videoId;
                    item.variablesTitle = item.snippet.title;
                    item.variablesThumbnail = item.snippet.thumbnails.medium.url;
                        
                    //console.log(item);

                    return this.setState({
                        searchResults: {
                            items: [
                                ...this.state.searchResults.items,
                                item
                            ]
                        }
                    })
                }
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }

    componentDidMount() {
        this.setState({
            songs: this.props.songs
        })
    } 

    addSongToState = (song) => {
        this.setState({
            songs: {
                ...this.state.songs,
                [song.id.videoId]: {
                    roomId: this.props.roomId,
                    song: song,
                    addedBy: this.props.profile.initials
                }
            }
        })
    }

    addSongToRoom = () => {
        this.props.addSongToRoom(this.state.songs)
    }

    render() {

        let addBtn = this.state.searchResults.items.length > 0 ? <button className="btn deep-orange accent-2" onClick={this.addSongToRoom}>Tilføj</button> : null;

        return (
            <div className="SearchSongs">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="text" className="mr-3" onChange={this.handleChange} placeholder="Skriv sang titel her" />
                    <button className="btn"><i className="fas fa-search"></i>Søg</button>
                </form>
                <div className="song-results mt-1">
                    {this.state.searchResults.items && this.state.searchResults.items.map(item => {
                        return (
                            <div className="card blue-grey darken-1 songs" onClick={() => this.addSongToState(item)}>
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