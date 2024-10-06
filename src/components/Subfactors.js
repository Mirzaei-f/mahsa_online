
import React, {useState,useContext,useEffect,useRef} from 'react';
import {ActivityIndicator, Dimensions,FlatList,Image,ImageBackground, StyleSheet,Text,TextInput,TouchableOpacity,View, BackHandler, ScrollView,StatusBar,Animated, } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { s } from "react-native-wind";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Reanimated from 'react-native-reanimated';
import { usefetchuser } from './usefetchuser';
import { baseUrl,imageUrl } from "./Addresses";
import { JDate ,JTime} from './JDate';
const   width=Dimensions.get("window").width;
const   height=Dimensions.get("window").height;

const Subfactors = ({id,packname}) => {



    console.log(",packname}===>",packname)
    const [data,setdata]=useState([])

    const navigation=useNavigation()
    const [messages,setmessages]=useState('')

    const { request} = usefetchuser('factor/detail')
    const [isLoading, setIsLoading] = useState(true)
 
    const [isActive, setIsActive] = useState(false);
/////////////////////////////////////////
const setAPI = () => {
    return new Promise(async (resolve, reject) => {
      try {

        setIsLoading(true);
        const res = await request({

            id:id,
        }
           
        );
  
         console.log('---dashboard/subfactors----->', res.data);
  
        if (res.error) {
          Alert.alert(res.message);
          reject(res.message);
        } else {
          if (
            !res.data ||
            res.data=== undefined ||
            typeof res.data === 'undefined'
          ) {
            setmessages(' پکیج ای برای نمایش وجود ندارد');
            resolve('No package available for display');
          } else {


           setdata(res.data);
          resolve(res.data);
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
        setIsLoading(false);
      }
    });
  };
  

useFocusEffect(
  React.useCallback(()=>{
     setAPI()

  },[])
)

////////////////////////




  return (
    <View style={[s``,{backgroundColor:"#c1c1c1",flex:1}]}>




    
    
    {/* scrollview */}
 

    <ScrollView >



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


<View style={Styles.parentdatestaetend}>
          
          {item.method ==="online" &&  <Text style={[Styles.textdate,{}]}>  آنلاین </Text>  } 
         
            <Text  style={Styles.textdate}>نوع پرداخت</Text>
         </View>



 
 <View style={Styles.parentdatestaetend}>
              <Text style={[Styles.textdate,{}]}>{packname} </Text>
             <Text style={Styles.textdate}>
              نام پکیج
              </Text>
  </View>


  <View style={Styles.parentdatestaetend}>
                 <Text style={[Styles.textdate,{color:"#f00"}]}> {item.amount} </Text> 
                 <Text style={Styles.textdate}>
قیمت              </Text>
 
             </View>
             <View style={Styles.parentdatestaetend}>
                 <Text style={[Styles.textdate,{color:"#f00"}]}> {JDate(item.update_date)} </Text> 
                 <Text style={Styles.textdate}>
آخرین تغییر          </Text>
 
             </View>


            
            
          
          

        


     
             
             </View>
         )
     })
 } 
 

 </ScrollView>


)}








</ScrollView>



    
    
        </View>
  )
}

export {Subfactors}






const Styles=StyleSheet.create({
    container:{
        flex:1,
        
        backgroundColor:'#5221BD'
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
        backgroundColor:'#fff',
      //backgroundColor:'#f5f5f5',
      //backgroundColor:'#8AAEE0',
        borderRadius:10,
        width:'95%',
        alignSelf: 'center',
        //flexDirection:'column',
        alignItems:'center',
      //  justifyContent:'space-around',
        marginVertical:'3%'
    },
    txtpakegs:{
        color:'#00',fontSize:RFValue(19),fontWeight:'bold',marginVertical:'5%',alignSelf:'center'
    },
    parentdatestaetend:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'80%',
       // backgroundColor:"#f00",
        marginVertical:"1%",
    },
    textdate:{
        color:'#000',fontSize:RFValue(14),marginVertical:'2%',alignSelf:'center'
    },
    submitpakege:{
        width:'95%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
      
       backgroundColor:"#fff",
       
      
        marginVertical:'2%'
    }
  ,texsubmitpakege:{
        color:'black',fontSize:RFValue(14),marginVertical:'2%',alignSelf:'center'
  
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
  
  
  
  