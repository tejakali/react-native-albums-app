

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
<<<<<<< HEAD
        backgroundColor : '#a35353',
        justifyContent : "center",
        alignItems : "center",
        borderBottomWidth : 2,
        borderColor : '#ffdddd',
=======
        backgroundColor : '#F8F8F8',
        justifyContent : "center",
        alignItems : "center",
        borderBottomWidth : 1 ,
        borderColor : '#d6d6d6',
>>>>>>> 6044fb5f6c414a776a6d90add3b2451fd4547771
        elevation : 2,
        position: 'relative'
    },

    title : {

        fontSize : 20,
<<<<<<< HEAD
        fontWeight : '900',
        color : '#ffeaea'
=======
        fontWeight : '900'
>>>>>>> 6044fb5f6c414a776a6d90add3b2451fd4547771
    }
})

export default Header;