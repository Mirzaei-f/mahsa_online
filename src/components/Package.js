
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
import { Headernew } from './Headernew';
import {RFValue} from "react-native-responsive-fontsize";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { usefetchuser } from './usefetchuser';
import { ActivityIndicator } from 'react-native-paper';
import { JDate ,JTime} from './JDate';
//import Carousel from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image' //for show gif

import { baseUrl,imageUrl } from "./Addresses";
const   width=Dimensions.get("window").width;
const   height=Dimensions.get("window").height;
//const imgurl="https://mahsaonlin.com/upload/package/"
const Package = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data,setdata]=useState([])
  const navigation=useNavigation()
  const [messages,setmessages]=useState('')
  const {request} = usefetchuser('dashboard/home')


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


  const setAPI = () => {
    return new Promise(async (resolve, reject) => {
      try {
        setIsLoading(true);
        const res = await request();
  
        // console.log('---dashboard/home----->', res.data.package);
  
        if (res.error) {
          Alert.alert(res.message);
          reject(res.message);
        } else {
          if (
            !res.data.package ||
            res.data.package === undefined ||
            typeof res.data.package === 'undefined'
          ) {
            setmessages(' پکیج ای برای نمایش وجود ندارد');
            resolve('No package available for display');
          } else {

            const filteredData = res.data.package.filter(item => item.preview==="1");
            console.log("filteredData1111111111111111111111111111111",filteredData)
          setdata(filteredData);
            
            resolve(filteredData);
            ///setdata(res.data.package);
           // resolve(res.data.package);
            setIsLoading(false);
          }
        }
      } catch (error) {
        console.error('An error occurred:', error);
  
        // Log the full error response for further investigation
        console.error('Full error response:', error.response);
  
        // Handle the error appropriately, e.g., show an error message to the user
        reject(error);
        setIsLoading(false);
      }
    });
  };
  




useFocusEffect(
  React.useCallback(()=>{
     setAPI()

  },[])
)


//////////////////////////////////////////////////////////////////////




  return (
    
    <View    style={{flex:1,backgroundColor:"#fff",}}>  

    <Headernew/>  

    < View style={{marginVertical:"2%"}}     >
    <Text     style={Styles.txt}>پکیج های مهسا آنلاین </Text>
    </View>
     
    



{/*  */}


{isLoading ? (
  <ActivityIndicator size={40} color="#00f" style={{ flex: 1 }} />
) : (

<ScrollView>
 
 {
     data ==[] ? <ActivityIndicator size={50} style={{
         flex: 1,
     }}/> : data.map((item,i)=>{
         return(
 
             <View style={Styles.pakegmahsa} key={i}>






{(item.poster !== "n/a" && item.poster !== null && item.poster !== undefined) &&
                    <Image
                        style={{ width:"100%", height:width>576?height*2:height/1.9,marginBottom:"2%",overflow:"hidden" }}
                        source={{ uri: `${baseUrl}${imageUrl}${item.poster}` }}
                      
                       // resizeMode={FastImage.resizeMode.contain}
                    />}
             
 
             <Text style={{color:'#000',fontSize:RFValue(18),fontWeight:"bold",marginVertical:'5%',alignSelf:'center'}}>{item.name}</Text>
 
           
            
           
                 <Text style={{color:'#f00',fontSize:RFValue(15),fontWeight:"bold",marginVertical:'2%',alignSelf:'center'}}>{`${item.discount}  تومان`} </Text>
                 
 
          
 
             <TouchableOpacity  
             onPress={()=>{navigation.navigate("packagescreen",{id:item.id})}}
             
              style={Styles.submitpakege}>
                 <Text style={Styles.texsubmitpakege}>  ثبت نام 
                  </Text>
 
             </TouchableOpacity>
             </View>
         )
     })
 } 
 

 </ScrollView>


)}


{/*  */}



    </View>
  )
}

export  {Package}




const styles={



    
txt:{

    fontSize:RFValue(22),
    fontWeight:"bold",
    color:"#000",
  
    
    }
    
}






const Styles=StyleSheet.create({
  container:{
      flex:1,
      
      backgroundColor:'#5221BD'
  },



   
  txt:{

    fontSize:RFValue(20),
    fontWeight:"bold",
    color:"#000",
    alignSelf:"center"
  
    
    },


  parents:{
      width: '80%',
      
      backgroundColor:' #F5F5F5',
    
      alignSelf:'center',
      height:(Dimensions.get('window').height /100 )*25,
      marginVertical:'2%',
      borderRadius:10
  },

  titlearticle:{
      color:'black',
      fontSize:RFValue(14),
      alignSelf:'flex-end',
      marginHorizontal:'5%',
      marginVertical:'4%'
  },

  header:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      height:(Dimensions.get('window').height /100 )*7,
      backgroundColor:'white'
  },
  logo:{
      width:50,
      height:50
  },
  Viewalert:{
      width: '100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'flex-end',
      backgroundColor: '#5220BD',
      borderRadius:5,
      marginVertical:'2%',

  },
  textalert:{
      color:'white',
      fontSize:RFValue(12),
      width:'95%',
      marginVertical:'1%'
  },
  mainparentalert:{
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width:'95%',
      alignSelf:'center',
  },
  parentoptions:{
      width: '100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginVertical:'3%'
  },
  options:{
      borderRadius:10,
      borderColor:'#5220BD',
      borderWidth:2,
      width:'45%',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      height:(Dimensions.get('window').height /100 )*12,
      backgroundColor:'white'
  },
  pakegmahsa:{
      //backgroundColor:'#733AF3',
    backgroundColor:'#fff',
    //backgroundColor:'#8AAEE0',
      borderRadius:10,
      borderWidth:2,
      borderColor:"#00f",
      width:'90%',
      alignSelf: 'center',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      marginVertical:'3%'
  },
  txtpakegs:{
      color:'#fff',fontSize:RFValue(19),fontWeight:'bold',marginVertical:'5%',alignSelf:'center'
  },
  parentdatestaetend:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      width:'95%',
  },
  textdate:{
      color:'#fff',fontSize:RFValue(12),marginVertical:'2%',alignSelf:'center'
  },
  submitpakege:{
      width:'95%',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:8,
    
     backgroundColor:"#00f",
     
    
      marginVertical:'2%'
  }
,texsubmitpakege:{
      color:'#fff',fontSize:RFValue(16),marginVertical:'2%',alignSelf:'center'

  },
  needs:{
      width:'95%',
      backgroundColor:'white',
      alignSelf:'center'
  },
  parentneeds:{
      width: '100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginVertical:'5%'
  },
  neddoption:{
      borderRadius:10,
      width:'45%',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'white'
  },
newArticle:{
  width:'95%',
  backgroundColor:'white',
  alignSelf:'center',
  marginVertical:"3%"
},
imagenewArticle:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-around',
  width:'100%',
  marginVertical:'3%'
},

maintex:{
  width:'90%',
  alignSelf:'center',
  marginVertical:'10%'

},
childArticle:{
  borderColor:'#5220BD',
  borderWidth:2,
  borderRadius:10,
  width:'95%',
  alignSelf:'center',
  marginVertical:'4%'

},
containu:{
  color:'#5220BD',
  fontSize:RFValue(14),
  alignSelf:'flex-end',
  marginHorizontal:'5%',
  marginVertical:'4%'
},


})



