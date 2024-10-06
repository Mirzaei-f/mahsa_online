
import React, {useState,useContext,useEffect, useRef,} from 'react';
import {ActivityIndicator, Dimensions,FlatList,Image,ImageBackground, StyleSheet,Text,TextInput,TouchableOpacity,View,Linking, BackHandler, ScrollView ,Animated, Alert,} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { s } from "react-native-wind";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Headernew} from "./components/Headernew"

import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Reanimated from 'react-native-reanimated';
import { usefetchuser } from './usefetchuser';
import { JDate, JTime } from './JDate';
import { baseUrl,docUrl,imageUrl } from './Addresses';
import { WebView } from 'react-native-webview';
const   width=Dimensions.get("window").width;
const   height=Dimensions.get("window").height;

import moment from 'jalali-moment'

//const moment = require('jalali-moment');

const now = moment();
const formattedDate = now.format('jYYYY/jM/jD');




const Subdiet = ({packageId}) => {

  const [data,setdata]=useState([])
  const navigation=useNavigation()
  const { request } = usefetchuser('diet/list')


////////////////////stapi/////////////////////





const setAPI = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await request();

      // console.log('---subdiet@@@@@@@----->', res.data);

      if (res.error) {
        Alert.alert(res.message);
        reject(res.message);
      } else {
        if (
          !res.data ||
          res.data === undefined ||
          typeof res.data === 'undefined'
        ) {
          setmessages(' پکیج ای برای نمایش وجود ندارد');
          resolve('No package available for display');
        } else {
         // Filter data based on packageId
         const filteredData = res.data.filter(item => item.package_id === packageId);
         console.log("filteredData1111111111111111111111111111111",filteredData)
       setdata(filteredData);
         
         resolve(filteredData);
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);

      // Log the full error response for further investigation
      console.error('Full error response:', error.response);

      // Handle the error appropriately, e.g., show an error message to the user
      reject(error);
    }
  });
};

///////////////////////////////////////////////////////////////////////////////////////


useFocusEffect(
  React.useCallback(()=>{
     setAPI()

  },[packageId])
)

//////////////////////////////////////////////////////////////////////
// const openLink = (url) => {
//   console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkk",url)

//   return <WebView source={{ uri: url  }}
  
  
//     onError={(syntheticEvent) => {
//       const { nativeEvent } = syntheticEvent;
//       console.warn('WebView error: ', nativeEvent);
//       setError(`WebView error: ${nativeEvent.description}`);
  
  
  
//   }} />;
// };

/////////////////////////////////////////////////////////////




  return (
    <View style={Styles.container}>
    
      {/* <Text>{packageId}</Text> */}
     

      <ScrollView>

{
     data ==[] ? <ActivityIndicator size={50} style={{ flex: 1,}}/> 
     : data.map((item,i)=>{
  
console.log("55555566666666666666666",`${baseUrl}${docUrl}${item.regime_id}`)

         return(


          <TouchableOpacity  style={Styles.viewmap}  key={i}>
                
                  
{item.type==="diet" && <Text style={[{color:"#000"},Styles.txt,]}> برنامه غذایی </Text>  }
{item.type==="shock" && <Text style={[{color:"#000"},Styles.txt]}> رژیم شوک </Text>  }
          
            {/* <Text > {item.course_id}</Text>   */}


                                     
            <View style={{alignItems:"space-around",justifyContent:"center"}}>

                                        {/* regime uploaded */}         
            {   item.status==="regime uploaded" && (
              <View style={{alignItems:"center",justifyContent:"space-around"}}>
              

             

              

< View   style={{flexDirection:"row-reverse",marginVertical:"5%"}}>

<FontAwesome5 name={"exclamation-circle"} style={[{ padding:5},]} color="#f00" size={22}  />
                <Text style={[{color:"#f00"},Styles.txt]}>وضعیت:</Text>
                <Text style={[{color:"#000"},Styles.txt]} >تکمیل فرآیند </Text> 
    
              </View>

              {(item.regime_id !== "n/a" && item.regime_id !== null && item.regime_id !== undefined) &&



               <TouchableOpacity style={Styles.touchable} 
               //onPress={() => {Linking.openURL(`https://mahsaonlin.com/diet/download-regime?id=57`)} }  
           
               onPress={() => { Linking.openURL(`https://mahsaonlin.com/diet/download-regime?id=${item.regime_id}`)}}
> 
           

              {/* onPress={() => { Linking.openURL(`${baseUrl}${imageUrl}/${source}`) }}  */}
                      <Text style={[{color:"#fff",},Styles.txt]}>  دانلود برنامه غذایی</Text>  
                      {/* <Text > {item.regime_id}</Text>  */}
                </TouchableOpacity>
     }

</View>
            )
            
            }
                                                   {/* wait for answers*/}

       {   item.status==="wait for answers" && (
       



        <View style={{alignItems:"center",justifyContent:"space-around"}}>
              
        < View   style={{flexDirection:"row-reverse",alignItems:"center",justifyContent:"center"}}>

<FontAwesome5 name={"exclamation-circle"} style={[{ padding:5},]} color="#f00" size={22}  />
          <Text style={[{color:"#f00"},Styles.txt]}>وضعیت:</Text>
          <Text style={[{color:"#000"},Styles.txt]}> در انتظار پاسخ به سوالات </Text> 



        </View>

        < View   style={{flexDirection:"row-reverse",marginVertical:"5%"}}>
          
       


        <TouchableOpacity style={Styles.touchable} 
               //onPress={() => {Linking.openURL(`https://mahsaonlin.com/diet/download-regime?id=57`)} }  
           
            
             // onPress={()=>{navigation.navigate("questionsdiet",{id:item.user_id})}}
               onPress={()=>{navigation.navigate("q1",{id:item.user_id})}}
> 
           

             
                      <Text style={[{color:"#fff",},Styles.txt]}> پاسخ به سوالات</Text>  

                </TouchableOpacity>


        </View>




</View>







       )  }


                                                  
                                                  
                                                  
                                                   {/* pending */}
       {   item.status==="pending" && (
              <View style={{alignItems:"center",justifyContent:"space-around"}}>
              
              < View   style={{flexDirection:"row-reverse",alignItems:"center",justifyContent:"center"}}>

<FontAwesome5 name={"exclamation-circle"} style={[{ padding:5},]} color="#f00" size={22}  />
                <Text style={[{color:"#f00"},Styles.txt]}>وضعیت:</Text>
                <Text style={[{color:"#000"},Styles.txt]}> در انتظار فعال سازی  </Text> 

    
              </View>
     
              < View   style={{flexDirection:"row-reverse",marginVertical:"5%"}}>

<FontAwesome name={"hourglass-2"} style={[{ padding:5},]} color="#00f" size={22}  />
                <Text style={[{color:"#00f"},Styles.txt]}>تاریخ فعالسازی:</Text>
                <Text style={[{color:"#f00"},Styles.txt]}>{JDate(item.date)}       </Text> 
    
              </View>
     



</View>


)


 }
       {   item.status==="wait for response" &&  <Text style={[{color:"#000"},Styles.txt]}>منتظر مربی برای بارگذاری رژیم  </Text>  } 
       {   item.status==="regim not found" &&  <Text style={[{color:"#000"},Styles.txt]}>رژیمی یافت نشد </Text>  } 

      
     

       

            </View>
      


     
       {/* https://mahsaonlin.com/diet/download-regime?id=57 */}
           
              
      
          </TouchableOpacity >


         )} )
         }
            







  </ScrollView>

    </View>
  )
}

export  {Subdiet}




const Styles=StyleSheet.create({
   container:{
  //  backgroundColor:"#0f0",
    alignItems:"center",
   // width:width
   },
   
  viewmap:{
  //    // backgroundColor:'#733AF3',
  //   backgroundColor:'#f5f5f5',
    backgroundColor:'#fff',
  
  //     borderRadius:10,
  width:width-30,
  //     alignSelf: 'center',
  //     flexDirection:'column',
  //    alignItems:'flex-end',
  //    // justifyContent:'center',
      marginVertical:'2%',



  borderRadius:10,
  borderWidth:2,
  borderColor:"#00f",
 
 alignItems:"center",
 paddingHorizontal:20,
justifyContent:"space-around",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 15,
  },
  shadowOpacity: 0.55,
  shadowRadius: 14.78,

  elevation: 15,




  },
 
  touchable:{
      
    backgroundColor:"#00f",marginBottom:"2%",alignItems:"center",
              
    borderRadius:15,padding:width>576?20:10,
    
  },
  txt:{
      //color:'#000',
      fontSize:RFValue(18),
    //   marginVertical:'2%',
     padding:5
  },
  
 



})





