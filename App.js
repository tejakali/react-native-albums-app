import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumsList';

export default class App extends React.Component {
  render() {
    
    return (
      <ScrollView style={styles.container}>
        <Header title = "Albums !"/>
        <AlbumList />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  
  },
});
