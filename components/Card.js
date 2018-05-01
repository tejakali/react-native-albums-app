

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
<<<<<<< HEAD
        borderColor : '#a35353',
=======
        borderColor : '#afafaf',
>>>>>>> 6044fb5f6c414a776a6d90add3b2451fd4547771
        marginTop : 20,
        marginBottom : 20,
        marginLeft : 5,
        marginRight : 5,
<<<<<<< HEAD
        elevation : 2,
        backgroundColor : '#f7c5c5'
=======
        elevation : 2
>>>>>>> 6044fb5f6c414a776a6d90add3b2451fd4547771
   
    }



});

export default Card;