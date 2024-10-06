
import React, {useState,useContext,useEffect} from 'react';
import {ActivityIndicator, Dimensions,FlatList,Image,ImageBackground, StyleSheet,Text,TextInput,TouchableOpacity,View, BackHandler, ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { s } from "react-native-wind";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Headernew } from '../../components/Headernew';
import About from "../../assets/images/about.jpg"


const   width=Dimensions.get("window").width;
const   height=Dimensions.get("window").height;


const Aboutus = () => {

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
    {/* ScrollView */}
       <ScrollView>
         <View style={Styles.ScrollViewcontainer}>

      
<View style={Styles.viewmain}>
<Text style={Styles.txtabout}>درباره ما </Text>
</View>

        {/* img */}
<View style={Styles.viewimg}>
<Image  source={About} style={Styles.img}/>
<Text  style={Styles.txtmahsa}>مهسا میرزایی</Text>
    <Text  style={Styles.txt} >
توضیحات مربوط به خانم میرزایی و سابقه فعالیت ،مربی گری ،مدارک و عنوان های قهرمانی کسب شده توسط ایشان که باید از خودشان گرفته شود. این متن بصورت تست در اینجا تایپ شده تا قالب کار تهیه بشه.
 </Text>
</View>

</View>
</ScrollView>
    </View>
  )
}

export { Aboutus}



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
  
  txtabout:{
    textAlign:"center",
fontSize:RFValue(25),
fontWeight:"bold",
color:"#000"
  },
  viewmain2:{
    width:width>576?"90%":"90%",
      height:width>576?height*1.5:height/1.3,alignItems:"center",justifyContent:"space-around",
    
     // backgroundColor:"#ff0",
      borderColor:"#5220BD",borderWidth:2,borderRadius:20,
  },
  
  viewimg:{
    width:width>576?"90%":"90%",
    height:width>576?height*1.4:height/1.5,alignItems:"center",justifyContent:"space-around",
 
    //backgroundColor:"#ff0",
    borderColor:"#5220BD",borderWidth:2,borderRadius:20,
    
  },
  img:{
    width:width>576?"90%":"90%",
  resizeMode:"contain"
    
  },

txtmahsa:{
  fontSize:RFValue(25),
fontWeight:"bold",
color:"#000"
},

txt:{
  
  fontSize:RFValue(14),
  // fontWeight:"bold",
  alignSelf:'center',
textAlign:"center",
   color:"#000"
},

  })