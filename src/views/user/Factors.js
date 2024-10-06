
import React, {useState,useContext,useEffect,useRef} from 'react';
import {ActivityIndicator, Dimensions,FlatList,Image,ImageBackground, StyleSheet,Text,TextInput,TouchableOpacity,View, BackHandler, ScrollView,StatusBar,Animated, } from "react-native";
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
import { baseUrl,imageUrl } from "../../components/Addresses";
import { JDate ,JTime} from '../../components/JDate';
import { Subfactors } from '../../components/Subfactors';
const   width=Dimensions.get("window").width;
const   height=Dimensions.get("window").height;


const Factors = () => {

    const animationController=useRef(new Animated.Value(0)).current;
    const [data,setdata]=useState([])

    const [radio,setradio]=useState(false)
    const [radioStates, setRadioStates] = useState([]);
    const navigation=useNavigation()
    const [messages,setmessages]=useState('')
    const {request} = usefetchuser('factor/list')
   
    const [isLoading, setIsLoading] = useState(true)
 
    const [isActive, setIsActive] = useState(false);




    ////////////////////////////////////////

    const [itemStates, setItemStates] = useState([]);

//   useEffect(() => {
//     // Initialize itemStates based on the length of the data array
//     setItemStates(new Array(data.length).fill(false));
//   }, [data]);

  const toggleListItem1 = (index) => {


     

    const newStates = [...itemStates];
    newStates[index] = !newStates[index];
    setItemStates(newStates);
    
  };

//////////////////////////////////////////////////////////



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




///////////////////////////////////////////////////////////////////////
    const setAPI = () => {
        return new Promise(async (resolve, reject) => {
          try {
    
            setIsLoading(true);
            const res = await request();
      
             console.log('---dashboard/factors----->', res.data);
      
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
    

//////////////////////////////////////


const toggleListItem=()=>{
    
    const config={
      duration:300,
      toValue:isActive? 0 : 1,
      useNativeDriver:true
    };
    Animated.timing(animationController,config).start();
    setIsActive(!isActive)
 
 
  }


  const    arrowTransform=animationController.interpolate(
    {
      inputRange:[0, 1],
      outputRange:["0deg", "180deg"]
    })

////////////////////////////////////////////////////////////////////////////////////////




  





  return (
<View style={[s``,{backgroundColor:"#fff",flex:1}]}>


{/* header */}
<Headernew/>


{/* scrollview */}

<Text  style={{alignSelf:"center",fontWeight:"bold",fontSize:RFValue(24),marginVertical:"2%"}}>لیست فاکتورها</Text>
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
             <Text style={Styles.textdate}>{item.register.factor_id} </Text>
             <Text style={Styles.textdate}>
                شناسه فاکتور
              </Text>
  </View>


  <View style={Styles.parentdatestaetend}>
                 <Text style={Styles.textdate}> {JDate(item.publish_date)} </Text>
                 <Text style={Styles.textdate}>
تاریخ صدور فاکتورها                 </Text>
 
             </View>


             <View style={Styles.parentdatestaetend}>
             <Text></Text>
             {item.register.payment ==="accept" &&  <Text style={[Styles.textdate,{color:"#f00"}]}> پرداخت شده</Text>  }
          
             </View>

             <TouchableOpacity  
          
             
          //style={Styles.submitpakege}
          
      //  onPress={toggleListItem}
      onPress={() => toggleListItem1(i)}
    
          style={{width:width-50,backgroundColor:"#fff",marginVertical:"6%",
          alignItems:"center",
          justifyContent:"space-around",
          flexDirection:"row-reverse",
          padding:10,
          borderRadius:20,
          borderWidth:1,
          borderColor:"#eee",
         
         
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 15,
          },
          shadowOpacity: 0.55,
          shadowRadius: 14.78,
      
          elevation: 5,
         
         
         
         }}
          
          
          
          >
             <Text style={[Styles.texsubmitpakege,{fontSize:RFValue(20)}]}> جزئیات </Text>
                    
<Animated.View  style={{transform:[{rotateZ:arrowTransform}]}}>
     < MaterialIcons    name="keyboard-arrow-down" size={28} color="#000"/>
     </Animated.View>

         </TouchableOpacity>
         


       {/* {isActive? <>


         
<Subfactors     userid={item.user_id}  packname={item.register.package.name}/>
          

</>
:
null}
      */}


{itemStates[i] ? (
                    <Subfactors id={item.id} packname={item.register.package.name} />
                  ) : null}
             
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

export  {Factors}







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
        backgroundColor:'#e2e2e2',
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
        width:'90%',
      //  backgroundColor:"#f00",
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
  
  
  
  