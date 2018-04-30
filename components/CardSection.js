
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

         borderColor : '#afafaf',

        marginTop : 3,

        marginLeft : 3,
        marginRight : 3,
        marginBottom : 3,
        flexDirection : 'row',
        alignItems: 'center',
        paddingTop : 3,
        paddingBottom : 3,
        paddingLeft : 3,
        paddingRight : 3



    }



});

export default CardSection;