import React, {useState,useEffect, useContext} from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    TextInput,
    ScrollView,
    Image,BackHandler, Alert, FlatList, moment, unix, Animated, PermissionsAndroid

} from 'react-native';



import { s } from "react-native-wind";
import * as yup from "yup";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// import { Buttonview } from '../../components/Buttonview';
// import { Need } from '../../components/Need'; 
// import { Package } from '../../components/Package'; 



import {RFValue} from "react-native-responsive-fontsize";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Context } from '../../components/Context';
import { usefetchuser } from './usefetchuser';
import { ActivityIndicator } from 'react-native-paper';
import { JDate ,JTime} from './JDate';

const   width=Dimensions.get("window").width;
const   height=Dimensions.get("window").height;


const Alanat = () => {

    const [data,setdata]=useState([])
     const navigation=useNavigation()
     const [messages,setmessages]=useState('')
     const [isLoading, setIsLoading] = useState(true)
     const {request} = usefetchuser('dashboard/home')
   







    const setAPI=()=>{

      setIsLoading(true);
        request().then(res=>{
    
            console.log('---dashboard/home--hints--->',res.data.hints[0].type)
    
            if(res.error == true){
              Alert.alert(res.message)
              setIsLoading(false);
            }
            else{
                if(res.data.hints == []  || res.data.hints  == undefined|| typeof res.data.hints == 'undefined'){
                    setmessages(' پکیج ای برای نمایش وجود ندارد')
                    setIsLoading(false);
                }else {
                
                    setdata(res.data.hints)
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











  return (
   
   
      
<ScrollView>
  <View  style={Styles.container}>
    <Text    style={Styles.txtalanat}>
      اعلانات
    </Text>
  </View>



  
{isLoading ? (
  <ActivityIndicator size={40} color="#00f" style={{ flex: 1 }} />
) : (<>

 
 {
     data ==[] ? <ActivityIndicator size={50} style={{
         flex: 1,
     }}/> 
     : 
     data.map((item,i)=>{


        console.log("data[i].belong====>",data[i].belong)
         return(
 


    <View style={Styles.pakegmahsa} key={i}>
    {
    (data[i].belong=== "home page"  &&   data[i].type==="instant") &&(
<>
      <Text     style={Styles.txt1}>فوری</Text>


      
     <View   style={Styles.main}>

             <FontAwesome name={"bell"}    color="orange"  size={RFValue(14)}   />

                 <Text style={Styles.txt}> {item.title}</Text>
     </View>
      

</>
    )

   
               
 }
  </View>
 
            )
        })
   
    }


</>
)}
            
 </ScrollView>


    
  )
}

export      {Alanat}





const Styles=StyleSheet.create({
   



  container:{

//borderRadius:20,
width:'100%',
alignItems:'center',
justifyContent:'flex-end',


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
    //    marginVertical:'2%',
        //marginHorizontal:"6%",
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
    txtalanat:{

      color:'#000',fontSize:RFValue(20),
      fontWeight:"bold",
     marginVertical:'5%',
     marginHorizontal:"5%",
      alignSelf:'flex-end',
     // textAlign:"center"


    },
   

main:{
  flexDirection:"row-reverse",
alignItems:"flex-start",
padding:"2%"
},
  
  txt:{
    color:'#000',
    fontSize:RFValue(12),
      //fontWeight:"bold",
     // marginVertical:'2%',
      alignSelf:'flex-end',
      textAlign:"center",
  },
  

txt1:{
  color:'#f00',fontSize:RFValue(12),
      fontWeight:"bold",
      marginVertical:'2%',
      alignSelf:'flex-end',
      textAlign:"center"
}


  })
  
  
  
  