

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


 const Header = (props) => {

    return (<View style = {styles.HeaderContainer}>

                <Text style = {styles.title}>{props.title}</Text>

              </View>);


}


const styles = StyleSheet.create({

    HeaderContainer : {

        height : 60,
        backgroundColor : '#F8F8F8',
        justifyContent : "center",
        alignItems : "center",
        borderBottomWidth : 1 ,
        borderColor : '#d6d6d6',
        elevation : 2,
        position: 'relative'
    },

    title : {

        fontSize : 20,
        fontWeight : '900'
    }
})

export default Header;