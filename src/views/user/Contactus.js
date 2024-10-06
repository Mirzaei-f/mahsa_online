
import React, {useState,useContext,useEffect} from 'react';
import {ActivityIndicator, Dimensions,FlatList,Image,ImageBackground, StyleSheet,Text,TextInput,TouchableOpacity,View, BackHandler, ScrollView } from "react-native";
    
import { RFValue } from "react-native-responsive-fontsize";
import { s } from "react-native-wind";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Headernew } from '../../components/Headernew';
import contact from "../../assets/images/contact.jpg"
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


const   width=Dimensions.get("window").width;
const   height=Dimensions.get("window").height;


const Contactus = () => {

    const navigation=useNavigation()


    
    useEffect(() => {
        const backAction =async () => {
            navigation.navigate("dashboard")
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );
    
        return () => backHandler.remove();
    }, []);
    




  return (
    <View  style={Styles.container}>

      {/* header */}
    <Headernew/>
    


         {/*  ScrollView*/}

    <ScrollView>
    <View style={Styles.ScrollViewcontainer}>
    
          
    <View style={Styles.viewmain}>
    
    <Text style={Styles.txtcontact}>تماس با ما</Text>
    
    </View>
    
    
    <View style={Styles.viewmain2}>
          
          
          {/* img */}
      <View style={Styles.viewimg}>
      <Image source={contact} style={Styles.img}/>
      </View>
    
   

            {/* access */}


    <View  style={Styles.viewicons}>
    <Text  style={Styles.txt}>mahsaonlon@gmail.com</Text>
          <FontAwesome5 name={'envelope'} size={RFValue(28)} color={"#5220BD"}  style={Styles.icon}   />
    </View>



    <View  style={Styles.viewicons}>
    <Text  style={Styles.txt}> تهران - تهران    </Text>
           <MaterialIcons name={'location-on'} size={RFValue(28)} color={"#5220BD"} style={Styles.icon}   />
    </View>



    <View  style={Styles.viewicons}>
    <Text  style={Styles.txt}> 02191559045 </Text>
          
      <FontAwesome5 name={'phone-square'} size={RFValue(28)} color={"#5220BD"}  style={Styles.icon}   />

    </View>



    
    </View>
    
    </View>
    </ScrollView>
        </View>
  )
}

export  {Contactus}



const Styles=StyleSheet.create({

container:{
  flex:1,
  backgroundColor:"#fff",
  alignItems:"center",
  justifyContent:"space-around",
},
ScrollViewcontainer:{
  alignItems:"center",
  justifyContent:"center",
},

viewmain:{
  width:width,
       // backgroundColor:"#f0f",
 marginVertical:width>576?"2%":"5%",
},

txtcontact:{
  textAlign:"center",
    fontSize:RFValue(28),
    fontWeight:"bold",
    color:"#000"
},
viewmain2:{
  width:width>576?"90%":"90%",
  height:width>576?height*1.5:height/1.3,
    alignItems:"center",
    justifyContent:"space-around",
   // backgroundColor:"#ff0",
    borderColor:"#5220BD",borderWidth:2,borderRadius:20,
},

viewimg:{
 // backgroundColor:"#f0f",
  width:width>576?"95%":"95%",
    height:width>576?"65%":"45%",
},
img:{
  width:width>576?"100%":"100%",
  resizeMode:"contain"
  
},
viewicons:{
  flexDirection:"row",
  width:"90%",
  height:width>576?"10%":"10%",
 // backgroundColor:"#0ff",
  alignItems:"center",
  justifyContent:"flex-end",
 
},

icon:{

  margin:width>576?"2%":'4%',
  //  alignSelf:'flex-end'
},

txt:{
  fontSize:RFValue(18),
    fontWeight:"bold",
    color:"#000"
},




})