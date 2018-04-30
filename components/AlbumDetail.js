
import React from 'react';
import { StyleSheet, Text, View,Image,Button,Linking ,TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';



const AlbumDetail = (props) => {

 
    console.log(props.album.image);

    

    return(<Card>
           
<CardSection>
  

   <Image style={{ width : 100 , height : 100 , borderRadius : 100}} 
          source={{uri: props.album.image}} >
       </Image>
       <View style = {styles.CardSectionTitle}>
          <Text>Album Name : {props.album.title}</Text>
          <Text>Album Artist : {props.album.artist}</Text>
       </View>
    </CardSection>
       
    <CardSection>
    <Image style = {{ width : '100%' , height : 250 }}
          source={{uri: props.album.thumbnail_image}}>
          </Image>
    </CardSection>

       
     <CardSection >
         <View style = {styles.CardSectionButtonContainer}  >
          <TouchableOpacity style = {styles.CardSectionButton} onPress= {() => Linking.openURL(props.album.url)}><Text>BUY NOW</Text></TouchableOpacity>
         </View>
    
    </CardSection>

    </Card>);
}


const styles = StyleSheet.create({

    CardSectionTitle : {
      
   
        flex: 1,
       justifyContent : 'center',
        alignItems : 'center',
  

    },
    CardSectionButtonContainer : {
        flex : 1,
         
          alignItems : 'center',
          justifyContent : 'center',
          padding : 5
    },
    CardSectionButton : {
   
       backgroundColor : 'red',
      
      
       width : '100%',
       padding : 8,
       alignItems : 'center'


    }


});



export default AlbumDetail;