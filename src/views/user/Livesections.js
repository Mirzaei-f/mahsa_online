
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

import { Headernew } from '../../components/Headernew';
import {RFValue} from "react-native-responsive-fontsize";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { usefetchuser } from '../../components/usefetchuser';
import { ActivityIndicator } from 'react-native-paper';
import { JDate ,JTime,} from '../../components/JDate';


const   width=Dimensions.get("window").width;



const Livesections = () => {



    const [data,setdata]=useState([])
    const [data2,setdata2]=useState([])
    const [coursedata,setcoursedata]=useState([])

    const [msg,setmsg]=useState('')

    const navigation=useNavigation()
    const [messages,setmessages]=useState('')
    const {request} = usefetchuser('packages/all-sections')
  
    const [isLoading, setIsLoading] = useState(true)
    const [change, setchange] = useState(true)
  
    const [sortedData, setSortedData] = useState([]);










    useEffect(() => {
      const backAction =() => {

             // navigation.navigate('ticket',{})
          navigation.navigate("dashboard",{})
          return true;
      };

      const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
      );

      return () => backHandler.remove();
  }, []);






    //////////////////////////////////////////////////////////////////////////////////

// const fetchdata2 = async (result2) => {
//   return new Promise((resolve, reject) => {
  
//     try {
//       if (result2 && result2.length > 0) {
//         const mappedResult = result2.map(item => item.held);
//    //     console.log("fetchdata22222222222222222222222222222222222222222222222222222222=========>", mappedResult);
//         resolve(mappedResult);
//       } else {
//         resolve('No data available'); // یا هر مقدار یا پیام دلخواهی که بخواهید برگردانید
//       }
//     } catch (error) {
//       reject(error);
//     }
//   });
// };




   
    
// const fetchdata1 = async(result) => {
//   return new Promise(async (resolve, reject) => {
//   let response;

//       try {
         

//         fetchdata2(result)
//               .then(res => {
//                 response = res;
//              //   console.log("fetchdataresult=========>", res);
//                   resolve(response);    
                  
//                })
//                .catch(error => {
//                    reject(error);
//                });
//       } catch (error) {
//           reject(error);
//       }
//   });
// };


        

// const setAPI = async () => {
//   return new Promise(async (resolve, reject) => {
//     let result;
//     try {
//       setIsLoading(true);
//       const res = await request();

//       if (res.error) {
//         Alert.alert(res.message);
//         reject(res.message);
//       } else {
//         if (!res.data.sections || typeof res.data.sections === 'undefined') {
//           setmessages('پکیج ای برای نمایش وجود ندارد');
//           resolve('No package available for display');
//         } else {
//           // Debugging: Log the value of res.data.sections
//         //  console.dir(res.data.sections);

//           // Check if res.data.sections is an array and has elements
//           if (Array.isArray(res.data.sections) && res.data.sections.length > 0) {
//             const r = await res.data.sections.map(item => {
//               // Check if item.course contains exists before using it
//               const courseid=item.course.contains.course_id
//               setcoursedata(courseid)
//             console.log("courseidddddddddddddddddddddddddddddd",courseid)
//               const contains = item.course && item.course.contains;
             
//               return contains;
//             }).flat(); // Use flat to flatten the array

//             // Debugging: Log the value of r
//             //console.log("r:", r);

//             fetchdata1(r).then(elms => {
//               result = elms.flat();
//              // console.log("eneresult####################################",result)


//             //  const sortedResult = result.sort((a, b) => {
//             //   const dateA = moment(a.date, 'jYYYY/jM/jD');
//             //   const dateB = moment(b.date, 'jYYYY/jM/jD');
//             //   return dateA - dateB;
//             // });
          
//             // setSortedData(sortedResult);

//             const sortedAsc =   result.sort(
//               (objA, objB) => Number(objA.date) - Number(objB.date),
//               );

              
//              // console.log("sortedAsc",sortedAsc);
//               const reversedSortedAsc = sortedAsc.reverse();
//               //setdata(result);
//               setdata(reversedSortedAsc);
//               const fetch2=res.data.live
//               const result2=fetch2.flat();
//               setdata2( result2);
//            //   console.log("res.data.live", result2)
           
//               resolve(result);
//             }).catch(error => {
//               reject(error);
//             });

//             setIsLoading(false);
//           } else {
//             console.error("No valid sections found in res.data.sections");

//             reject("No valid sections found");
//             setmsg("No valid sections found");
//             setIsLoading(false);
//           }
//         }
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//       console.error('Full error response:', error.response);
//       reject(error);
//       setIsLoading(false);
//     }
//   });
// };

//     useFocusEffect(
//       React.useCallback(()=>{
//          setAPI()
    
//       },[])
//     )
    
      
    
///////////////////////////////////

  


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
          !res.data ||
          res.data=== undefined ||
          typeof res.data === 'undefined'
        ) {
          setmessages(' پکیج ای برای نمایش وجود ندارد');
          resolve('No package available for display');
        } else {


        
        setdata(res.data.placed);
        setdata2(res.data.live);
            resolve(res.data.placed);
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





////////////////////////////////////////////////

  return (
    <View style={[s``,{backgroundColor:"#fff",flex:1}]}>


    {/* header */}
    <Headernew/>
    
    
    {/* scrollview */}
    
    


    <ScrollView >
    
    
    
    <View  style={{width:width,
    //backgroundColor:"#ff0",
    flexDirection:"row",
    margin:"2%",
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"center"
 
    }}>

<TouchableOpacity 

onPress={()=> setchange(!change)}

style={{width:width/2,
  
   backgroundColor:change?"#e2e2e2":"#00f",
   padding:25,
   alignItems:"center",justifyContent:"center"

}}>
  <Text  style={{fontSize:RFValue(15),fontWeight:"bold",


color:change?"#000":"#fff",}}>
 کلاس های برگزار شده   </Text>
</TouchableOpacity>




<TouchableOpacity 

onPress={()=> setchange(!change)}

style={{width:width/2,
backgroundColor:change?"#00f":"#e2e2e2",
   padding:25,
   alignItems:"center",justifyContent:"center"
}}>
  <Text   style={{fontSize:RFValue(15),fontWeight:"bold",

color:change?"#fff":"#000",

}}>
 پخش زنده 
  </Text>
</TouchableOpacity>




    </View>
    
    {/*  */}
    
    {isLoading ? (
      <ActivityIndicator size={40} color="#00f" style={{ flex: 1 }} />
    ) : (
    
    <ScrollView>
     
      


{
  change ?
  <>


{
    //  data2==[] ? (
    //  <>
     
    //  <ActivityIndicator size={50} style={{ flex: 1, }}/>
     

    //     </>

    //  )
    data2.length === 0 ? (

      <Text style={{ fontSize: RFValue(18), fontWeight: 'bold', color: '#f00', textAlign:"center" }}>
     شما در حال حاضر هیچ کلاسی ندارید
      </Text>
    ) 
     : data2.map((item2,j)=>{
         return(
 




          
             <View style={Styles.pakegmahsa} key={j}>





 

 

  <View style={Styles.parentdatestaetend}>
             <Text style={Styles.textdate}>{item2.title} </Text>
             <Text style={Styles.textdate}>
عنوان جلسه :
              </Text>
  </View>





 <View style={Styles.parentdatestaetend}>
{( item2.mood=== "playing") &&<Text style={[Styles.textdate,{color:"#0f0"}]}>در حال پخش  </Text>}
 {( item2.mood=== "ready") &&<Text style={[Styles.textdate,{color:"0f0"}]}>آماده پخش </Text>}
{( item2.mood=== "pending") &&<Text style={[Styles.textdate,{color:"#0f0"}]}>در انتظار پخش  </Text>}
{( item2.mood=== "complete") &&<Text style={[Styles.textdate,{color:"#0f0"}]}>اتمام جلسه و ذخیره شده</Text>}
{( item2.mood=== "failed") &&<Text style={[Styles.textdate,{color:"#f00"}]}> اتمام جلسه و ذخیره نشده</Text>} 
  <Text style={Styles.textdate}>وضعیت جلسه :  </Text>
  </View>



  <View style={Styles.parentdatestaetend}>
             <Text style={Styles.textdate}>{JDate(item2.date)} </Text>
             <Text style={Styles.textdate}>
             تاریخ برگزاری
              </Text>
  </View>

             <View style={Styles.parentdatestaetend}>
             <Text style={Styles.textdate}>{JTime(item2.start_at)} </Text>
             <Text style={Styles.textdate}>
             ساعت شروع 
              </Text>
  </View>
             <View style={Styles.parentdatestaetend}>
                 <Text style={Styles.textdate}> {JTime(item2.end_at)} </Text>
                 <Text style={Styles.textdate}>
                  ساعت پایان   
                 </Text>
 
             </View>
 
             <TouchableOpacity  
             onPress={()=>{navigation.navigate("live",{hlsurl:item2.hls})}}
             
              style={Styles.submitpakege}>
              {/* {( item2.mood=== "playing") &&
              <Text style={Styles.textdate}>شرکت در جلسه  </Text>  
              } */}
              
         
              <Text style={ Styles.texsubmitpakege}>شرکت در جلسه  </Text>  
 
             </TouchableOpacity>
             </View>
         )
     })
 } 
 






  </>
  :


  (
    <>
    
    {
         data ==[] ? <ActivityIndicator size={50} style={{
             flex: 1,
         }}/> :  data.map((item,i)=>{
             return(
     
                 <View style={Styles.pakegmahsa} key={i}>
    
     <View style={Styles.parentdatestaetend}>
                 <Text style={Styles.textdate}>{item.title} </Text>
                 <Text style={Styles.textdate}>
    عنوان جلسه :
                  </Text>
      </View>
    
     
     <View style={Styles.parentdatestaetend}>
    {( item.mood=== "playing") &&<Text style={[Styles.textdate,{color:"#f00"}]}>در حال پخش  </Text>}
    {( item.mood=== "ready") &&<Text style={[Styles.textdate,{color:"0f0"}]}>آماده پخش </Text>}
    {( item.mood=== "pending") &&<Text style={[Styles.textdate,{color:"#0f0"}]}>در انتظار پخش  </Text>}
    {( item.mood=== "complete") &&<Text style={[Styles.textdate,{color:"#0f0"}]}>  ذخیره موفق</Text>}
    {( item.mood=== "failed") &&<Text style={[Styles.textdate,{color:"#f00"}]}> اتمام جلسه و ذخیره نشده</Text>}
      <Text style={Styles.textdate}>وضعیت جلسه :  </Text>
      </View>
    
    
    
      <View style={Styles.parentdatestaetend}>
          <Text style={Styles.textdate}>{JDate(item.date)} </Text>
     
                 <Text style={Styles.textdate}>
                 تاریخ برگزاری
                  </Text>
      </View>
    
                 <View style={Styles.parentdatestaetend}>
                 <Text style={Styles.textdate}>{JTime(item.start_at)} </Text>
                 <Text style={Styles.textdate}>
                 ساعت شروع 
                  </Text>
      </View>
                 <View style={Styles.parentdatestaetend}>
                     <Text style={Styles.textdate}> {JTime(item.end_at)} </Text>
                     <Text style={Styles.textdate}>
                      ساعت پایان   
                     </Text>
     
                 </View>

                 {/* <View style={Styles.parentdatestaetend}>
                     <Text style={Styles.textdate}> {item.hls} </Text>
                     <Text style={Styles.textdate}>
                      ساعت پایان   
                     </Text>
     
                 </View> */}
     
                 <TouchableOpacity  
                 onPress={()=>{navigation.navigate("livesaved",{id:item.id,group:item.group})}}
                 
                 
                  style={Styles.submitpakege}>
                  {/* {( item.mood=== "playing") &&<Text style={Styles.textdate}>شرکت در جلسه  </Text>}    */}
                  <Text style={Styles.texsubmitpakege}>  
                  مشاهده 
                  </Text>
                  {/* {( item.mood=== "complete") &&<Text style={Styles.textdate}>  مشاهده  </Text>}
                {( item.mood=== "failed") &&<Text style={Styles.textdate}> مشاهده </Text>} */}
    
    
     
                 </TouchableOpacity>
                 </View>
             )
         })
     } 
     
    
    
    
    
    
    </>
    
    
      )


  
}



    
     </ScrollView>
    
    
    )}
    
    
    
    
    
    
    </ScrollView>
    
    
        </View>
  )
}

export  {Livesections}




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
        color:'#fff',fontSize:RFValue(14),marginVertical:'2%',alignSelf:'center'
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
  
  
  
  