

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
        backgroundColor : '#a35353',
        justifyContent : "center",
        alignItems : "center",
        borderBottomWidth : 2,
        borderColor : '#ffdddd',
        elevation : 2,
        position: 'relative'
    },

    title : {

        fontSize : 20,
        fontWeight : '900',
        color : '#ffeaea'
    }
})

export default Header;