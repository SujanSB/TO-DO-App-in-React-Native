import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 

export default function Datas({item,pressHandler}){

const [sakkesi,setsakkesi]=useState(["white","navy"])
const [Done,setDone]=useState('')

const Sakkiyo =()=>{
    setsakkesi(["cyan","black"])
    console.log("sakkiyo")
    setDone(
    <AntDesign name="checkcircle" size={16} color="cyan" />

    )
}


return(
    <TouchableOpacity 
    onLongPress={()=>pressHandler(item.no)}
    onPress={()=>Sakkiyo()}
    >
        <Text  style={{
        color:sakkesi[0],
        padding:18,
        paddingLeft:8,
        marginTop:3,
        fontSize:16,
        borderWidth:0.5,
        borderRadius:10,
        backgroundColor:sakkesi[1],
        
        }} >
        @{item.title} 
    <Text style={styles.paxiko}>{Done}
    </Text>
        </Text>
    </TouchableOpacity>
)


}
const styles = StyleSheet.create({
    paxiko:{
        marginLeft:30,
    }
})