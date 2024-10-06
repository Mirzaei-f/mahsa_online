
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

import tamasbamoshaver from "../../assets/images/tamasbamoshaver.jpg"
import tamasbamahsa from "../../assets/images/tamasbamahsa.jpg"
import analyzeticket from "../../assets/images/analyze-ticket.jpg"

const   width=Dimensions.get("window").width;
const   height=Dimensions.get("window").height;

const Messanger = () => {

    const navigation=useNavigation()


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
    <View    style={[s``,{backgroundColor:"#fff",flex:1}]} >


      <Headernew      />

      <ScrollView>

        <View   style={styles.viewsubheader}>
        <Text   style={{fontSize:RFValue(24),fontWeight:"bold",color:"#000"}}  > پیام رسان مهسا آنلاین</Text>
        </View>
   

  

<View  style={styles.viewscrollview}>


<TouchableOpacity  onPress={()=>navigation.navigate("user",{screen:'question'})}  style={styles.button}  >



<Image  source={tamasbamoshaver} style={{width:140,height:140}}/>
        <Text   style={styles.txt} >   تماس با مشاور تغذیه  </Text>




</TouchableOpacity>



<TouchableOpacity    style={styles.button}   >



<Image  source={tamasbamahsa} style={{width:140,height:140,borderRadius:70}}/>
        <Text   style={styles.txt} >  تماس با مهسا آنلاین </Text>



</TouchableOpacity>


<TouchableOpacity    style={styles.button}  >


<Image  source={analyzeticket} style={{width:140,height:140,borderRadius:70}}/>
        <Text   style={styles.txt} > آنالیز بدنی</Text>


</TouchableOpacity>



</View>


   </ScrollView>





    </View>
  )
}

export { Messanger}




const styles=StyleSheet.create({
viewsubheader:{
    //backgroundColor:"#f0f",
    width: width,
height:width>576?height/7:height/13,
alignItems:"center",
justifyContent:"center",
},

    viewscrollview:{
        //backgroundColor:"#0ff",
        width:width,
        height:width>576?height*2.2:height*1.1,
        alignItems:"center",
        justifyContent:"space-around"
    },
    
    
    button:{
    
        backgroundColor:"#fff",width:"90%",
        height:width>576?height/1.5:height/3,
        alignItems:"center",
        justifyContent:"space-around",
        borderWidth:2,
        borderColor:"#733AF3",
        borderRadius:20,
    },
    
    txt:{
    
    fontSize:RFValue(22),
    fontWeight:"bold",
    color:"#000"
    
    }
    
    
    })
    