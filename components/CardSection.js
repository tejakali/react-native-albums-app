
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const CardSection = (props) => {


    return (<View style = {styles.CardSectionContainer}>

           {props.children}

    </View>);

}


const styles = StyleSheet.create({

    CardSectionContainer : {
    
        borderWidth : 1,

<<<<<<< HEAD
         borderColor : '#ffd3d3',
=======
         borderColor : '#afafaf',
>>>>>>> 6044fb5f6c414a776a6d90add3b2451fd4547771

        marginTop : 3,

        marginLeft : 3,
        marginRight : 3,
        marginBottom : 3,
        flexDirection : 'row',
        alignItems: 'center',
        paddingTop : 3,
        paddingBottom : 3,
        paddingLeft : 3,
<<<<<<< HEAD
        paddingRight : 3,
        backgroundColor : '#a35353'
=======
        paddingRight : 3
>>>>>>> 6044fb5f6c414a776a6d90add3b2451fd4547771



    }



});

export default CardSection;