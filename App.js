import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumsList';

export default class App extends React.Component {
  render() {
    
    return (
      <ScrollView style={styles.container}>
<<<<<<< HEAD
        <Header title = "Taylor Swift Albums"/>
=======
        <Header title = "Albums !"/>
>>>>>>> 6044fb5f6c414a776a6d90add3b2451fd4547771
        <AlbumList />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD

    backgroundColor : "#ffe2e2"
  },
});
=======
  
  },
});
>>>>>>> 6044fb5f6c414a776a6d90add3b2451fd4547771
