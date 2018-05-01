

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



const Card = (props) => {

    return (<View style = {styles.CardContainer}>
                {props.children}
       </View>);


}


const styles = StyleSheet.create({

    CardContainer : {
        borderWidth : 1,
        borderColor : '#a35353',
        marginTop : 20,
        marginBottom : 20,
        marginLeft : 5,
        marginRight : 5,
        elevation : 2,
        backgroundColor : '#f7c5c5'
   
    }



});

export default Card;