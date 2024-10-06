
import React, {useState,useContext,useEffect,useRef} from 'react';
import {ActivityIndicator, Dimensions,FlatList,Image,ImageBackground, StyleSheet,Text,TextInput,TouchableOpacity,View, BackHandler, ScrollView,StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { s } from "react-native-wind";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Headernew} from "../../components/Headernew"
import contact from "../../assets/images/contact.jpg"
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Reanimated, { StretchOutY } from 'react-native-reanimated';
import { usefetchuser } from '../../components/usefetchuser';

import { baseUrl,imageUrl } from "../../components/Addresses";

import { Video } from '../../components/Video';

import Video1 from    "react-native-video"
import Orientation from'react-native-orientation-locker';
const   width=Dimensions.get("window").width;
const   height=Dimensions.get("window").height;


const Packagescreen = (props) => {

    const navigation=useNavigation()
    const { id } = props.route.params;
    console.log("idpackage",id)
   // const regex = /^(<([^>]+)>)/ig;
   const regex = /<[^>]+>|<br>|&nbsp;/mgi;

    const [data, setdata] = useState([])
 
    
    const [isLoading, setIsLoading] = useState(true)
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [messages, setmessages] = useState('')

    const { request } = usefetchuser('dashboard/home')
    
    const [isFullScreen, setIsFullScreen] = useState(false);

  let [ScreenType, setScreenType] = useState("contain");





 

  
  const onVideoLoad = () => {
     setIsVideoLoaded(true);

  };
  const onFullScreen = () => {

    setIsFullScreen(!isFullScreen);
   
    if (ScreenType === 'contain') {
      setScreenType('stretch');
    //  Orientation.lockToPortrait();
    } else {
      setScreenType('contain');
     // Orientation.lockToLandscape();
    }
  };
////////////////////////////////////////////////////////////////////

 

/////////////////////////////////////////////////////////////////////////
    const setAPI=()=>{

      setIsLoading(true);
        request().then(res=>{
    
          console.log('---dashboard/homepackage----->',res.data.package[0].id)
    
            if(res.error == true){
              Alert.alert(res.message)
              setIsLoading(false);
            }
            else{
                if(res.data.package == []  || res.data.package  == undefined|| typeof res.data.package == 'undefined'){
                    setmessages(' پکیج ای برای نمایش وجود ندارد')
                    setIsLoading(false);
                }else {
                  const filteredData = res.data.package.filter(item =>   item.id=== id);
                    console.log("filteredData1111111111111111111111111111111",filteredData)
                   setdata(filteredData);

                
                   // setdata(res.data.package)
                   setIsLoading(false);
    
                }
            }
    
        })
    }
    
    
    
    
    
    
    
    
    useFocusEffect(
      React.useCallback(()=>{
         setAPI()
    
      },[])
    )
    
    



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
    <View style={[s``,{
        //backgroundColor:"#fff",
    flex:1, alignItems:"center",justifyContent:"center",}]}>
   {!isFullScreen && <Headernew />}
   {isFullScreen &&  <StatusBar hidden={true} />}
     
      
      
    

      {isLoading ? (
  <ActivityIndicator size={40} color="#00f" style={{ flex: 1 }} />
) : (



      <ScrollView>
{/*  

 <View     style={Styles.viewscrollview}>     */}



 {
     data ==[] ? <ActivityIndicator size={50} style={{
         flex: 1,
     }}/> : data.map((item,i)=>{
   `   ${baseUrl}${imageUrl}${item.video}`
   console.log(   " ${baseUrl}${imageUrl}${item.video}", `   ${baseUrl}${imageUrl}${item.video}`)
         return(
 
             <View style={[Styles.pakegmahsa,{
              width:isFullScreen ?width:width-50,
              marginVertical:isFullScreen ?0:'6%',
              borderWidth:isFullScreen?0:2,
              borderColor:isFullScreen?"#fff":"#00f",


             }]} key={i}>
{/*    
{
    (data[i].id=== id) &&
    
(<> */}




{!isFullScreen && <Text style={Styles.txttitle}>{item.name}</Text>}


{(item.video !== "n/a" && item.video !== null && item.video !== undefined) ?(
  <View style={{
    // width:isFullScreen ?width-100:300 ,
  
    // height:isFullScreen ?height:340 ,
  
  
  }}>



<Video1
// source={{ uri: 'https://www.w3schools.com/html/movie.mp4' }}

source={{ uri: `${baseUrl}${imageUrl}${item.video}` }}
  // style={Styles.video}
    style={{
      //width:isFullScreen ?width: 300 ,
     // aspectRatio:width>576? 16 / 9:1/1  ,
      //aspectRatio:width>576? 16 / 9:16 / 9  ,
    
   
      
   //  backgroundColor: '#000',
   //  height:isFullScreen ?height:300 ,
    width:300,
   height:200,
    }}

  
  //resizeMode={ScreenType}
  resizeMode={"contain"}
  controls={true}
  onLoad={onVideoLoad}

/>

{/* 
<TouchableOpacity onPress={onFullScreen} style={[Styles.fullScreenButton,{  top:isFullScreen ?"2%":"28%", right:isFullScreen ?"4%":"2%",}]}>
  <MaterialIcons name={isFullScreen ? 'fullscreen-exit' : 'fullscreen'} size={RFValue(30)} style={{ color: "#f00" }} />
</TouchableOpacity> */}
{/* 
{isVideoLoaded && (
                        // <TouchableOpacity onPress={onFullScreen} style={[Styles.fullScreenButton, { top: isFullScreen ? "2%" : "28%", right: isFullScreen ? "4%" : "2%" }]}>
                        //   <MaterialIcons name={isFullScreen ? 'fullscreen-exit' : 'fullscreen'} size={RFValue(30)} style={{ color: "#f00" }} />
                        // </TouchableOpacity>
                      )} */}


</View>
)
:

<>
{/* 
{(item.poster !== "n/a" && item.poster !== null && item.poster !== undefined) &&
                    <Image
                        style={{ width:"100%", height:width>576?height*2:height/1.9,marginBottom:"2%",overflow:"hidden" }}
                        source={{ uri: `${baseUrl}${imageUrl}${item.poster}` }}
                      
                       // resizeMode={FastImage.resizeMode.contain}
                    />}*/}
                   


{(!isFullScreen && item.poster !== "n/a" && item.poster !== null && item.poster !== undefined) && (
                    <Image
                      style={{ width: "100%", height: width > 576 ? height * 2 : height / 1.9, marginBottom: "2%", overflow: "hidden" }}
                      source={{ uri: `${baseUrl}${imageUrl}${item.poster}` }}
                    />
                  )}




</>
} 

{/* 
<View   >

<Text style={{
  fontSize:RFValue(14),color:"#000"
}}



>{item.description.replace(regex,"")}</Text>


</View> */}

{!isFullScreen && (
                    <View>
                      <Text style={{ fontSize: RFValue(14), color: "#000" }}>{item.description.replace(regex, "")}</Text>
                    </View>
                  )}



{/* 
<Text style={{fontSize:RFValue(22),fontWeight:"bold",color:"#000",marginVertical:"6%"}}>
قیمت پکیج </Text>

<View  style={{width:width>576?width/2:width/1.5,height:width>576?height/1.5:height/3,
backgroundColor:"#fff",
borderRadius:20,

alignItems:"center",justifyContent:"center",marginVertical:20,
shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,




}}>
  <Text    style={{fontSize:RFValue(22),fontWeight:"bold",color:"#f00",}}  >
 { ` ${item.discount}     تومان `} </Text>
  
</View>


<TouchableOpacity 

onPress={()=>{navigation.navigate("shopping",{id:item.id,price:item.discount,status:item.status})}}


style={{padding:20,backgroundColor:"#00C800",borderRadius:10,marginBottom:20}}>
  <Text style={{fontSize:RFValue(16),fontWeight:"bold",color:"#fff",}}>خرید پکیج </Text>
</TouchableOpacity> */}




{!isFullScreen && (
                    <>
                      <Text style={{ fontSize: RFValue(22), fontWeight: "bold", color: "#000", marginVertical: "6%" }}>قیمت پکیج </Text>

                      <View style={{ width: width > 576 ? width / 2 : width / 1.5, height: width > 576 ? height / 1.5 : height / 3, backgroundColor: "#fff", borderRadius: 20, alignItems: "center", justifyContent: "center", marginVertical: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 11 }, shadowOpacity: 0.55, shadowRadius: 14.78, elevation: 22 }}>
                        <Text style={{ fontSize: RFValue(22), fontWeight: "bold", color: "#f00" }}>{` ${item.discount} تومان `}</Text>
                      </View>

                      <TouchableOpacity onPress={() => { navigation.navigate("shopping", { id: item.id, price: item.discount, status: item.status }) }} style={{ padding: 20, backgroundColor: "#00C800", borderRadius: 10, marginBottom: 20 }}>
                        <Text style={{ fontSize: RFValue(16), fontWeight: "bold", color: "#fff" }}>خرید پکیج </Text>
                      </TouchableOpacity>
                    </>
                  )}




{/* </>) */}
    
    
    
               
 {/* } */}
 
             
             </View>
         )
     })
 } 
 
 {/* </View>  */}
 </ScrollView>




)}



    </View>
  )
}

export {Packagescreen}






const Styles=StyleSheet.create({



  video: {
    
    flex: 1,
    // width: '100%',
    // height: '100%',
    width:300,
    height:200,

  },
 
   fullScreenButton: {
     position: 'absolute',
     //top:90,
    //  right: 20,
    // zIndex: 3,
   },





   
  viewscrollview:{
    width:width-40,
    height:width>576?height*3.7:height*1.7,top:"2%",
backgroundColor:"#fff",
borderRadius:20,
shadowColor: "#000",
shadowOffset: {
  width: 0,
  height: 11,
},
shadowOpacity: 0.55,
shadowRadius: 14.78,
elevation: 22,
marginBottom:"10%"
  },
    pakegmahsa:{
      //  backgroundColor:'#733AF3',
      //backgroundColor:'#f5f5f5',
      //backgroundColor:'#8AAEE0',
        borderRadius:10,
        // borderWidth:isFullScreen?none:2,
        // borderColor:isFullScreen?none:"#00f",
       // width:width-50,
      // width:isFullScreen ?width:width-50,
        //height:width>576?height*3:height,
        alignSelf: 'center',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        //marginVertical:'6%'
    },
   txttitle:{
    color:'#000',
    fontSize:RFValue(20),
    //fontWeight:"bold",
    marginVertical:'5%',
    alignSelf:'center',
    textAlign:"center"
   },
  
  
  })
  
  //////////////////////////////////////////////////







  
  
  