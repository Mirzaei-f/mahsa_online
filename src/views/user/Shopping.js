
import React, {useState,useContext,useEffect} from 'react';
import {ActivityIndicator, Dimensions,FlatList,Image,ImageBackground, StyleSheet,Text,TextInput,TouchableOpacity,View, BackHandler, ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { s } from "react-native-wind";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Headernew} from "../../components/Headernew"
import contact from "../../assets/images/contact.jpg"
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Reanimated from 'react-native-reanimated';
import { usefetchuser } from '../../components/usefetchuser';
import { JDate, JTime } from '../../components/JDate';
import { Video } from '../../components/Video';
const   width=Dimensions.get("window").width;
const   height=Dimensions.get("window").height;

import moment from 'jalali-moment'

//const moment = require('jalali-moment');

const now = moment();
const formattedDate = now.format('jYYYY/jM/jD');

const Shopping = ( props) => {


  const { id,price,status } = props.route.params;

  const navigation=useNavigation()

  // packagescreen







  useEffect(() => {
    const backAction =async () => {
       // navigation.navigate("dashboard")
        navigation.navigate("user",{screen:"dashboard"})
        return true;
    };

    const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
    );

    return () => backHandler.remove();
}, []);





  return (
    

<View  style={styles.container} >

<Headernew/>


<ScrollView>

    <View    style={styles.container2}    >
     

 
    <View  style={styles.viewbutton}>
  <TouchableOpacity    style={[{backgroundColor:"#f00",},styles.button]} >
    <Text   style={styles.txtbutton}>انصراف</Text>
  </TouchableOpacity>



  <TouchableOpacity     style={[{backgroundColor:"#00C800",},styles.button]}>
    <Text style={styles.txtbutton} >پرداخت </Text>
  </TouchableOpacity>

</View>



<View   style={styles.main}>



     <View     style={[styles.row,{borderBottomColor:"#f00", borderBottomWidth:1,}]}   >
        <Text  style={[styles.txt,{ color:"#000",}]}> آنلاین</Text>
         <Text  style={[styles.txt,{fontWeight:"bold",color:"#000"}]}>نوع پرداخت</Text>

       </View>


     <View    style={[styles.row,{borderBottomColor:"#f00", borderBottomWidth:1,}]} >
                <Text style={[styles.txt,{ color:"#000",}]}  >{`${ price}  (تومان)`} </Text>
                   <Text     style={[styles.txt,{fontWeight:"bold",color:"#000"}]}> قیمت </Text>

  </View>

  <View      style={[styles.row,{borderBottomColor:"#f00", borderBottomWidth:1,}]}>
  <Text  style={[styles.txt,{ color:"#00f",}]}>{status} </Text>
  <Text   style={[styles.txt,{fontWeight:"bold",color:"#000"}]}> وضعیت پرداخت   </Text>

  </View>

  <View    style={[styles.row]}>
  <Text    style={[styles.txt,{ color:"#000",}]}>{formattedDate}</Text>
  <Text      style={[styles.txt,{fontWeight:"bold",color:"#000"}]}>تاریخ صدور فاکتور</Text>
  
  </View>


</View> 






</View>

</ScrollView>

</View>

 
  )
}

export  {Shopping}







const styles=StyleSheet.create({



  container:{
    flex:1,
      backgroundColor:"#fff",
    alignItems:"center",
   justifyContent:"center"
  },
  container2:{
    width:width>576?width:width/1.1, 
height:width>576?height*1.5:height/1.5,

  // backgroundColor:"#00f",
    alignItems:"center",
    justifyContent:"space-around",
  },
  main:{
   width:width>576?width/1.1:width/1.2, 
height:width>576?height/1.1:height/2.3,

alignItems:"center",
justifyContent:"space-around",

  
  top:width>576? "1%": "1%",

borderRadius:20,
   backgroundColor:"#fff",
shadowColor: "#f00",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 12,

  },
   
row:{
  width:"95%",
  height:"22%", 
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between",
},
txt:{
 
  fontSize:RFValue(16)
},

viewbutton:{
 //backgroundColor:"#f0f",
  width:width>576?width/1.1:width/1.2, 
  height:width>576?height/3:height/6,
  top:width>576? "0%": "1%",
  flexDirection:"row",
alignItems:"flex-end",
justifyContent:"flex-end"
},
button:{
  width:width>576?width/4:width/3,
height:width>576?height/6:height/13,
margin:"2%",

alignItems:"center",
justifyContent:"center",
borderRadius:20
},


txtbutton:{
 
  fontSize:RFValue(24),
  color:"#fff",
  fontWeight:"bold"
},

  
  })
  
  
  
  