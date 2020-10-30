import React ,{useState,useEffect}from 'react';
import { StyleSheet, View,FlatList,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { AsyncStorage } from "react-native";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header'
import Datas from './components/Datas'
import AddTodo from './components/AddTodo'

export default function App() {
  const arr =[];
  const [todos,setTodo]=useState([
    { title:"Read a Book in each 2 week",no:'1'},
    { title:"Finish 20 Days Teaching JS",no:'2'},
    { title:"Finishing React Native",no:'3'},
    { title:"Getting Internship on React",no:'4'},
  ])




  // const pressHandleler=(no)=>{
  //   setTodo((prevTodos)=>{
  //     return prevTodos.filter(todo =>todo.no !=no)
  //   })
  // }

  


  // const submitHandler=(text)=>{
  
  //   if(text.length >3 ){
  //     setTodo((prevTodos)=>{
  //       return [{title:text,no:Math.random().toString()},...prevTodos];

  //     });
  //   }
  //   else{
  //       Alert.alert('OOPS !','Criteria is not Fulfilled',[{text:'Try Again'}])
  //   }
     
  // }


  const submitHandler = async (text) => {
    if(text.length >3 ){

    arr.push({ text: text, no: Math.random().toString() });
    await AsyncStorage.setItem("mylist", JSON.stringify(arr));
    let value = JSON.parse(await AsyncStorage.getItem("mylist"));
    console.log("type of value is ",typeof value)
    setTodo([value]);               
  }
  else{
    Alert.alert('OOPS !','Criteria is not Fulfilled',[{text:'Try Again'}])
}
    console.log(value);
  };

  useEffect(() => {  
    // async function fetchData(){
      
    //   let value = JSON.parse(await AsyncStorage.getItem("mylist"));
    //   setTodo([value]);       
      
    //   {
    //     if (arr != null) {
    //       arr = value;
    //     }
    //   }
    // }fetchData()


  console.log(typeof value)    
    console.log("kei hudaixa hai")

     },[todos]);

     const pressHandler = async (no) => {
      console.log(no);
      let hataTodo = todos.filter ((e)=> {
        return e.no !== no;
      });
      AsyncStorage.setItem("mylist", JSON.stringify(hataTodo));
     
      setTodo([hataTodo])
      arr = hataTodo;
    };



  return (
    <TouchableWithoutFeedback  onPress={()=>{
      Keyboard.dismiss()}}
     >
    <View style={styles.container}>
     <Header/>
     <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
           
          data={todos}
          keyExtractor={(item)=>item.no}
          renderItem={({item})=>(
            <Datas item={item} arr={arr} pressHandler={pressHandler} />
          )}
          /> 
        </View>
     </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:30,

  },
  list:{
    marginTop:20,
  }
});
