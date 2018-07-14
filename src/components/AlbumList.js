import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from '../components/AlbumDetail';
import axios from 'axios';

class AlbumList extends Component {

    constructor(props) {
        super(props);
        this.state = { albums: [] };
    }   

    UNSAFE_componentWillMount() {
        // execute as soon as component mount to the screen
        //console.log('component will mount in the album list');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
      
    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>);
    }

    render() {
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>      
        );
    }
}


export default AlbumList;