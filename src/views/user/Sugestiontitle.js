
import React, {useState,useContext,useEffect} from 'react';
import {ActivityIndicator, Dimensions,FlatList,Image,ImageBackground, StyleSheet,Text,TextInput,TouchableOpacity,View, BackHandler, ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { s } from "react-native-wind";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { usefetchuser } from '../../components/usefetchuser';


const   width=Dimensions.get("window").width;
const   height=Dimensions.get("window").height;


const Sugestiontitle = () => {


    const [data,setdata]=useState([])
    const [messages,setmessages]=useState('')

     const navigation=useNavigation()
     const {request} = usefetchuser('dashboard/home')
   


    const setAPI=()=>{
        request().then(res=>{
    
            console.log('---dashboard/home--faq--->',res.data.faq)
    
            if(res.error == true){
              Alert.alert(res.message)
           
            }
            else{
                if(res.data.faq == []  || res.data.faq  == undefined|| typeof res.data.faq == 'undefined'){
                    setmessages(' مطلبی  برای نمایش وجود ندارد')
                }else {
                
                    setdata(res.data.faq)
    
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
     
<ScrollView>
     <View  style={Styles.titlecontainer}>

       <Text    style={Styles.txt}>
      {/* اعلانات */}
       </Text>
     </View>
 
 {
     data ==[] ? <ActivityIndicator size={50} style={{ flex: 1, }}/> 
     : 
     data.map((item,i)=>{

        console.log("data[i].belong====>",data[i].belong)



         return(
 


    <TouchableOpacity       
    
    
    onPress={()=>{navigation.navigate("answer",{id:item.id})}}
    style={Styles.pakegmahsa} key={i}>
  
           <Text style={Styles.txtquestion}>{item.question}</Text>
            {/* <Text style={Styles.txtanswer}>{item.answer}</Text> */}
               
       </TouchableOpacity>
 
            )
        })
   
    }
            
 </ScrollView>

  )
}

export {Sugestiontitle}





const Styles=StyleSheet.create({
   
  titlecontainer:{
width:'100%',
alignItems:'center',
justifyContent:'flex-end',
//borderRadius:20,
  },
  txt:{
    color:'#000',fontSize:RFValue(22),
    fontWeight:"bold",
   marginVertical:'5%',
    
  },
   
    pakegmahsa:{
        //backgroundColor:'#e3e3e3',
        backgroundColor:'#fff',
      //backgroundColor:'#f5f5f5',
      //backgroundColor:'#8AAEE0',
        borderRadius:20,
        width:'93%',
        alignSelf: 'center',
        flexDirection:'column',
        alignItems:'center',
       justifyContent:'center',
    
        marginBottom:"2%",
        paddingRight:10,
        paddingLeft:10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        elevation: 22,

    },
   txtquestion:{
    color:'#000',fontSize:RFValue(16),
    //fontWeight:"bold",
    marginVertical:'5%',
    alignSelf:'center',
    textAlign:"center"
   },
  
  txtanswer:{
    color:'#000',fontSize:RFValue(12),
    //fontWeight:"bold",
    marginVertical:'5%',
    alignSelf:'flex-end',
    textAlign:"center"
  }
  
  })
  