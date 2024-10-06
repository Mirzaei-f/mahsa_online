
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
import { Buttonview } from '../../components/Buttonview';
import { Need } from '../../components/Need'; 
import { Package } from '../../components/Package'; 
import { Headernew } from '../../components/Headernew';
import {RFValue} from "react-native-responsive-fontsize";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { usefetchuser } from '../../components/usefetchuser';
import { ActivityIndicator } from 'react-native-paper';
import { JDate ,JTime} from '../../components/JDate';
//import Carousel from 'react-native-snap-carousel';
import {Alanat} from '../../components/Alanat';

const   width=Dimensions.get("window").width;


const Dashboard = () => {


  const [data,setdata]=useState([])
  const navigation=useNavigation()
  const [messages,setmessages]=useState('')
  const {request} = usefetchuser('dashboard/home')
  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    const backAction = () => {
        Alert.alert('خارج شدن ', 'ایا میخواهید خارج شوید ', [
            {
                text: 'نه',
                onPress: () => null,
                style: 'cancel',
            },
            {text: 'بله', onPress: () => BackHandler.exitApp()},
        ]);
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
            //console.log("filteredData1111111111111111111111111111111",filteredData)
          setdata(filteredData);
              resolve(filteredData);
          //  setdata(res.data.package);
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
        setIsLoading(false);
      }
    });
  };
  

useFocusEffect(
  React.useCallback(()=>{
     setAPI()

  },[])
)



  return (
    <View style={[s``,{backgroundColor:"#fff",flex:1}]}>


{/* header */}
<Headernew/>


{/* scrollview */}


<ScrollView >


{/* Alanat */}

<Alanat/>


{/* buttons */}
 
<Buttonview />


{/* <Package /> */}



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
 
             <Text style={{color:'#fff',fontSize:RFValue(15),fontWeight:"bold",marginVertical:'5%',alignSelf:'center'}}>{item.name}</Text>
 
             <View style={Styles.parentdatestaetend}>
 



             
  </View>
             <View style={Styles.parentdatestaetend}>
             <Text style={Styles.textdate}>{JDate(item.start_register)} </Text>
             <Text style={Styles.textdate}>شروع ثبت نام 
              </Text>
  </View>
             <View style={Styles.parentdatestaetend}>
                 <Text style={Styles.textdate}> {JDate(item.end_register)} </Text>
                 <Text style={Styles.textdate}>پایان ثبت نام   
                 </Text>
 
             </View>
 
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
<Need/>




</ScrollView>


    </View>
  )
}

export  {Dashboard}





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
      backgroundColor:'#733AF3',
    //backgroundColor:'#f5f5f5',
    //backgroundColor:'#8AAEE0',
      borderRadius:10,
      width:'95%',
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



