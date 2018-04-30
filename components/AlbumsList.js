

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
class AlbumList extends React.Component{

    state = {

        albums : null
    }

    componentWillMount()
    {

        console.log("component is going to mount");

        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response) => (this.setState({ albums : response.data})));
       

    }

    componentDidMount()
    {
        console.log("hello world");
    }


    render()
    {
        console.log("component rendered");
      
        return(<View>
                   {
                        
                    this.state.albums && this.state.albums.map((album , index) => (<AlbumDetail key = {index} album = {album} />))
                   }


                </View>);


    }

}

export default AlbumList;
