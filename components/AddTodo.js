import React, { useState } from 'react'
import { View,StyleSheet, TextInput,Text} from 'react-native';

export default function AddTodo({ submitHandler }){
    const[text,setText]=useState('')

    const changeHandler=(val)=>{
        setText(val)
        // console.log(text)
    }


    return(
        <View >
        <TextInput 
            style={styles.input}
            placeholder="Add todos....."
            onChangeText={changeHandler}
        />
        <View style={styles.vado} >
        <Text onPress={()=>submitHandler(text)}  style={styles.btn} >Add</Text>
        </View></View>
    )
}

const styles = StyleSheet.create({
    vado:{
        justifyContent: "center",
        alignItems: "center"
    },
    input:{
        marginBottom:10,
        paddingHorizontal:10,
        paddingVertical:8,
        borderBottomWidth:1,
        fontSize:16,
        borderBottomColor:'#F00'

    },
    btn:{
       backgroundColor:"black",
       fontSize: 18,
       fontWeight: '400',
       color: "#fff",
       textAlign:"center",
       padding:10,
       width:220,
       borderRadius:20,
       

    }
})