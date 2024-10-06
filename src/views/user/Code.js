// 




import React, {useState,useContext,useEffect} from 'react';
import {ActivityIndicator, Dimensions,FlatList,Image,ImageBackground, StyleSheet,Text,TextInput,TouchableOpacity,View, BackHandler } from "react-native";
    


import {Formik} from "formik";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from "@react-navigation/native";
import { useFetch } from "../../components/useFetch";
import { Context } from "../../components/Context";
//import Apptimestamp from './timestamp/Apptimestamp';

import { RFValue } from "react-native-responsive-fontsize";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from "yup";
import Mahsa from "../../assets/images/logomahsa2.jpg";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


//import { Metrix } from "@metrixorg/react-native-plugin";




const   width=Dimensions.get("window").width;


// const validation = yup.object().shape({
//     code: yup.string().required('لطفا کد تایید خود را وارد کنید '),
// })

const Code = (props) => {
 

 const {request}=useFetch('register/verify')
 const {request:requestv}=useFetch('register/resend-code')
 
const {phone}=props.route.params
 const [pass,setpass]=useState('')
 const [err,seterr]=useState('')
 const navigation=useNavigation()
 const [starttimer, setstarttimer] = useState(false);
 const [state,setstate]=useState({number:35})

 
 const mycode=()=>{
    requestv({
            mobile:phone
            //mobile:"09379661534"
        }).then(response => {
            console.log(response)
        })
    }

    
useEffect(()=>{
 setInterval(()=>{
          setstate(old=>({number: old.number - 1}))
      },1000)
  
  },[starttimer])
  
  
    useEffect(() => {
        const backAction =() => {

                navigation.navigate('login')

            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);
   
    
    
    const setasync = async (key, value) => {
        await AsyncStorage.setItem(key, value)
        console.log(value);
    }
   
        const Removeauth = async (key) => {
              
          try {
              await AsyncStorage.removeItem(key);
              
      navigation.navigate('login')
              return console.log("removed");
      
          } catch (error) {
              console.error("error ", error);
          }
      }
      
          
const Exit=()=>{
    Removeauth('auth');
    //navigation.navigate("Splash")
    
  }     

    return (

<View style={[s``,{backgroundColor:"#fff",flex:1}]}>





<View style={{height:width>576?"16%":"8%",
         //backgroundColor:"#ff0",
         flexDirection:"row-reverse",borderBottomWidth:2,
         borderBottomColor:"#0ff"
         }}>
         <TouchableOpacity>
       <FontAwesome style={[s` mt-3` ,{padding: 5,marginHorizontal:"3%",} ]} name="bars" size={28} color="#4D1BB8" />
        </TouchableOpacity>

        </View> 

             {/* body */}
        <View style={{height:width>576?"80%":"90%",
        //backgroundColor:"#0f0"
      }}>

<View style={{height:width>576?"12%":"20%",
         //backgroundColor:"#f0f",
         justifyContent:"center",alignItems:"center"}}>
        <Text    style={s` text-gray-900  text-center text-3xl font-bold`}>
وارد کردن کد تایید   </Text> 
        </View>  

                  {/*  */}
        <View style={[{height:width>576?"75%":"50%",width:(Dimensions.get("window").width/100)*90,alignSelf:"center",borderWidth:3,
        borderColor:"#4E1BBC",
        borderRadius:20,
        alignItems:"center",justifyContent:"flex-start"},s` bg-white mt-5  `]}>
         

{/*  */}

<View

 style={{width:"100%",flexDirection:'column',
 justifyContent:'center',
        height:Dimensions.get("screen").width>576?"25%":"25%",
       alignItems:'center', 
     //  backgroundColor: "#0ff",
       }}
 >

         <Text    style={[s` text-gray-500    text-center font-bold`,{fontSize:RFValue(16)}]}>
کد تایید دریافتی توسط پیامک را وارد نمایید</Text> 
 
</View>
          {/* formik */}



          <Formik 
       // validationSchema={validation} 
        initialValues={{code: ''}}
         onSubmit={(values, {setSubmitting}) => {

             request({
      mobile:phone,
       //code:pass
       code:values.code
}).then(response => {
    console.log('response--->',response)
  //  console.log('response--autch--page-code--->',response.data.auth)
    if(response.error === false){
      
       // setauth(response.data.auth_key)
        if(response.data.signup === false){
            setasync('auth', response.data.auth)

/////////////////////////////////metrix///////////////////////////////////

//Metrix.setUserCustomId(response.data.auth);
////////////////////////////////////////////////////////////////////



          //  navigation.navigate('user',{screen:'paneluser'})
            navigation.navigate('user',{screen:'dashboard'})
        }
        else {
           // navigation.navigate('Profile')
          
           navigation.navigate('signup')
        }
    }else {
        console.log('response.message--->',response.message)
        seterr(response.message)
    }
}).catch(error => {
    console.log('error---cach',error)
    seterr(response.message)

})


            setSubmitting(false)
        }}>
            {({
                  handleChange,
                  handleBlur,
                  values,
                  handleSubmit,
                  errors

              }) => <>



<View
 
 
 style={{width:"100%",flexDirection:'column',
 justifyContent:'center',
        height:Dimensions.get("screen").width>576?"75%":"75%",
       alignItems:'center', 
   //   backgroundColor: "#f0f",
      // borderRadius:20
       }}
 >
           

 <TextInput
                        value={values.code}
                        onChangeText={handleChange('code')}
                        onBlur={handleBlur('code')}
                        //placeholder="09"
                        placeholderTextColor="#3f3f46"
                        keyboardType="numeric"
                        style={[{width:width>576?"70%":"70%",backgroundColor:"#fff",borderWidth:2,borderColor:"#0ff",
                        marginBottom:width>576?5:2,}, s`  rounded-2xl   text-center     `]}
                        />

          <Text style={{color:"#000",fontFamily:"vazir",color:"#f00",fontSize:14
       
                      }}>{err}</Text> 
       
           
           

           <TouchableOpacity  
           onPress={handleSubmit}
           
           style={[s`py-3  rounded-2xl `,{width:width>576?"60%":"60%",backgroundColor:"#0f0",}]}
           
           
           >
            <Text style={[s`  font-bold text-center  `,{fontSize:RFValue(24),color:"#f3f3f3"}]}>
              ثبت   
                </Text>
           </TouchableOpacity>
           </View>




           {   state.number > 0 ? <View style={{ alignSelf:"flex-start",}}>

                                    <Text style={[styles.timer,{display: state.number > 1 ?  null : 'none'}]}> {state.number}</Text>
                                 </View>
                            
                            
                            :  
                            
                            
                            <View       style={{alignSelf:"flex-end",}}>

                                   <TouchableOpacity onPress={()=>{
                                       setstate({number:35})
                                       mycode()
                                   }} >
                                       <Text style={styles.textagaintimer}>دریافت مجدد کد تایید</Text>
                                   </TouchableOpacity>

                                    </View>
                        }



</>}

        </Formik>









{/*  */}

</View>
  
</View>


</View>







    );
};




const styles=StyleSheet.create({
    timer:{
        fontSize:RFValue(23),
        color:'black'
    },
    textagaintimer:{
        color:'black',
         fontSize:RFValue(16),
         fontFamily:'BYekan.ttf'
     },

    p:{
        borderTopRightRadius:50,
        borderTopLeftRadius:50
    },


    container:{
      flex:1,
      //backgroundColor: "#070125",
      backgroundColor: "#2D2B32",
  },
  body:{
    position:'relative',
   top:'2%',
   zIndex:2,
   borderBottomLeftRadius:14,
   borderBottomRightRadius:14,
   backgroundColor: "#2D2B32",
  },  
     
  // footer: {
  //   height: (Dimensions.get('window').height / 100) * 20,
  //   zIndex:1,
  //   width:'90%',
  //   flexDirection:'row',
  //   //backgroundColor:"yellow",
  // },
  parentinput:{
    alignItems:"center",
    //backgroundColor:"pink",
  
     
   height:(Dimensions.get('window').height/100)*18,
  },
  textname:{
    marginBottom:6,
         color:'white',
         fontSize:RFValue(12),
         fontFamily:'vazir'
     },
  textinput:{
    // width:"100%",
    color:"white",
    fontSize:24,
    width:"90%",
    padding:10,
    
    backgroundColor:"#54506B",
    borderWidth:1,
    borderColor:"#fff",
    borderRadius:10,
  },  
  line: {
    //width: '90%',
    width:Dimensions.get('window'). width>576?"90%":"70%",
    borderWidth: 1,
    borderColor: "#662d5c",
    alignSelf: 'center',
    marginTop:5,
    marginBottom:5,
  
  },   
  
  
   parentsubmit: {
  
      borderWidth: 1,
      borderColor: '#6efff0',
      width: '80%',
      alignSelf: 'center',
      borderRadius: 34,
      height: Dimensions.get('window').width > 576 ? 45 :45,
    // height: (Dimensions.get('window').height/100)*8,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:'7%',
    //marginTop:'2%',
  },
  submit: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  // iconsumbmit: {
  // 	width: Dimensions.get('window').width > 576 ? 43 : 33,
  // 	height: Dimensions.get('window').width > 576 ? 43 : 33,
  // },
  textsubmit: {
      color: '#00f7ff',
      fontSize: RFValue(25),
      width: '85%',
      textAlign: 'center',
      paddingLeft: '8%',
      fontFamily:'vazir'
  },
  errback:{
    alignSelf: 'center',
    color: 'red',
    fontSize: RFValue(14),
    fontFamily:'BYekan.ttf',
  },
  })




 export {Code};

