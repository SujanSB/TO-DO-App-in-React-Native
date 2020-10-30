import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native';

function Header() {
    return (
     <View style={styles.header}>
         <Text style={styles.title}>To Do List</Text>
     </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:15,
        backgroundColor:'#f7062a',
        // backgroundColor:'red',
       
    },
    title:{
        padding:20,
        fontSize:25,
        color:'#000',
        textAlign:"center"
        

    }
})



export default Header
