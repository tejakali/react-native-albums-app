
import React from 'react';
import { StyleSheet, Text, View,Image,Button,Linking ,TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';



const AlbumDetail = (props) => {

 
<<<<<<< HEAD
    console.log(props.album);
=======
    console.log(props.album.image);
>>>>>>> 6044fb5f6c414a776a6d90add3b2451fd4547771

    

    return(<Card>
           
<CardSection>
  

   <Image style={{ width : 100 , height : 100 , borderRadius : 100}} 
          source={{uri: props.album.image}} >
       </Image>
       <View style = {styles.CardSectionTitle}>
<<<<<<< HEAD
          <View style = {styles.SubTitlesContainer}>
            <Text style = {styles.AlbumName}>Album Name : </Text>
            <Text style = {styles.AlbumArtist}>Album Artist : </Text>
          </View>
          <View style = {styles.SubTitlesContainer}>
          <Text style = {styles.AlbumName}>{props.album.title}</Text>
          <Text style = {styles.AlbumArtist}>{props.album.artist}</Text>
        </View>
=======
          <Text>Album Name : {props.album.title}</Text>
          <Text>Album Artist : {props.album.artist}</Text>
>>>>>>> 6044fb5f6c414a776a6d90add3b2451fd4547771
       </View>
    </CardSection>
       
    <CardSection>
    <Image style = {{ width : '100%' , height : 250 }}
          source={{uri: props.album.thumbnail_image}}>
          </Image>
    </CardSection>

       
     <CardSection >
         <View style = {styles.CardSectionButtonContainer}  >
<<<<<<< HEAD
          <TouchableOpacity style = {styles.CardSectionButton} onPress= {() =>
             Linking.openURL(props.album.url)}>
             <Text style = {styles.ButtonText}>BUY NOW</Text>
          </TouchableOpacity>
=======
          <TouchableOpacity style = {styles.CardSectionButton} onPress= {() => Linking.openURL(props.album.url)}><Text>BUY NOW</Text></TouchableOpacity>
>>>>>>> 6044fb5f6c414a776a6d90add3b2451fd4547771
         </View>
    
    </CardSection>

    </Card>);
}


const styles = StyleSheet.create({

    CardSectionTitle : {
      
   
        flex: 1,
       justifyContent : 'center',
        alignItems : 'center',
<<<<<<< HEAD
        flexDirection : 'row'
=======
>>>>>>> 6044fb5f6c414a776a6d90add3b2451fd4547771
  

    },
    CardSectionButtonContainer : {
        flex : 1,
         
          alignItems : 'center',
          justifyContent : 'center',
          padding : 5
    },
    CardSectionButton : {
   
<<<<<<< HEAD
       backgroundColor : '#f7c5c5',
=======
       backgroundColor : 'red',
      
      
>>>>>>> 6044fb5f6c414a776a6d90add3b2451fd4547771
       width : '100%',
       padding : 8,
       alignItems : 'center'


<<<<<<< HEAD
    },
    ButtonText : {
 
        color : '#6d0000',
        fontSize : 15,
        fontWeight : '600'

    },
    AlbumName : {

        fontSize : 15,
        fontWeight : '900',

        color : '#f4cbcb'

    



    },
    AlbumArtist : {

        fontSize : 15,
        fontWeight : '900',
        color : '#f4cbcb'

    },
    SubTitlesContainer : {

        flexDirection : 'column',
       
        marginRight : 5


    }



=======
    }


>>>>>>> 6044fb5f6c414a776a6d90add3b2451fd4547771
});



export default AlbumDetail;