
import React, {useState,useContext,useEffect, useRef,} from 'react';
import {ActivityIndicator, Dimensions,FlatList,Image,ImageBackground, StyleSheet,Text,TextInput,TouchableOpacity,View, BackHandler, ScrollView ,Animated, Alert,} from "react-native";
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
import { JDate, JTime } from '../../components/JDate';
import { Video } from '../../components/Video';
import { Subdiet } from '../../components/Subdiet';   
import moment from 'jalali-moment'

//const moment = require('jalali-moment');

const now = moment();
const formattedDate = now.format('jYYYY/jM/jD');

const Diet = () => {




    //const { id,price,status } = props.route.params;

    const navigation=useNavigation()
    const { request } = usefetchuser('packages/list')
const [modal,setmodal]=useState(false)
const [radio,setradio]=useState(false)
const [data,setdata]=useState([])
const [packageIdstate,setpackageIdstate]=useState()
const [packagenamestate,setpackagenamestate]=useState("")
const [isLoading, setIsLoading] = useState(true)
const [radioStates, setRadioStates] = useState([]);
const [isActive, setIsActive] = useState(false);


const animationController=useRef(new Animated.Value(0)).current;

  
  
  
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
  
         console.log('---diet+++++----->', res.data[0].package.status);
  
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

            //  const filteredData = res.data.map(i=>i.package.filter(item => item.status==="active"));


            // const filteredData = res.data.map((i) => {
            //   if (i.package && Array.isArray(i.package)) {
            //     return i.package.filter((item) => item.preview === "1");
            //   }
            //   return []; // or any default value if package is undefined
            // });


          //    console.log("filteredDiet**********************************===>",filteredData)
          //  setdata(filteredData);
          //    resolve(filteredData);
          

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
      }
    });
  };
  








// ///////////////////////////



const toggleListItem=()=>{
    const config={
      duration:300,
      toValue:isActive? 0 : 1,
      useNativeDriver:true
    };
    Animated.timing(animationController,config).start();
    setIsActive(!isActive)
    setAPI()
    setRadioStates("")
  }


  const    arrowTransform=animationController.interpolate(
    {
      inputRange:[0, 1],
      outputRange:["0deg", "180deg"]
    })










// /////////////////////////////

const handleRadioChange = (index, packageId,packageName) => {
  const newRadioStates = [...radioStates];
  newRadioStates[index] = !newRadioStates[index];
  setRadioStates(newRadioStates);

  // ایجاد وقفه 500 میلی‌ثانیه
  setTimeout(() => {
    setIsActive(false);
    Animated.timing(animationController, {
      toValue: isActive ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, 500);

  console.log("Package ID:", packageId);
  console.log("Package Name:", packageName);

  setpackageIdstate(packageId)
  setpackagenamestate(packageName)

};











  return (
    <View   style={{flex:1,backgroundColor:"#fff",alignItems:"center",}}>
      <Headernew/>


<ScrollView>




 
<TouchableOpacity 
       onPress={toggleListItem}
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


{packagenamestate !==""   && packagenamestate !==undefined ?


<Text  style={{fontSize:RFValue(16),fontWeight:"bold",padding:10,color:"#000"}}>
{packagenamestate}

</Text>


:  <Text  style={{fontSize:RFValue(16),fontWeight:"bold",padding:10,color:"#000"}}>

پکیج خود را انتخاب کنید


</Text>  

    }
    
   
       
<Animated.View  style={{transform:[{rotateZ:arrowTransform}]}}>
         < MaterialIcons    name="keyboard-arrow-down" size={28} color="#000"/>
         </Animated.View>
   
    </TouchableOpacity>


{isActive?

<View  style={{justifyContent:"space-between",

padding:20,
marginVertical:"1%",

//backgroundColor:"#c2c2c2",

borderRadius:10,
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


}}>

{isLoading ? (
  <ActivityIndicator size={40} color="#00f" style={{ flex: 1 }} />
) : (


  <ScrollView>

{
     data ==[] ? <ActivityIndicator size={50} style={{ flex: 1,}}/> 
  
     : data.map((item,i)=>{
         return(

        
          <TouchableOpacity  
         
          onPress={() => handleRadioChange(i,item.package_id,item.package.name)}  style={Styles.viewmap} key={i}>
                
                {     (item.package.status==="ready" )  &&(
                 <View style={Styles.sub}>






{radioStates[i] ? (
                      <MaterialIcons


                      
                        style={{ margin: 10 }}
                        name={'radio-button-checked'}
                        size={32}
                        color="#000"
                      />
                    ) : (
                      <MaterialIcons
                        style={{ margin: 10 }}
                        name={'radio-button-off'}
                        size={32}
                        color="#000"
                      />
                    )}
            
        
                

           <Text style={Styles.txt}>{item.package.name} </Text>
       
          
                     
          </View>
             )}
          </TouchableOpacity >

       
         )} )
         }
            






  </ScrollView>
   
)}
    
</View>
:
null


}

    
    <Subdiet       packageId={packageIdstate}/>

    </ScrollView>

    </View>
  )




};




export  {Diet}





const Styles=StyleSheet.create({
   
   
    viewmap:{
       // backgroundColor:'#733AF3',
      backgroundColor:'#f5f5f5',
    //  backgroundColor:'#8AAEE0',
    
        borderRadius:10,
        width:'100%',
        alignSelf: 'center',
        flexDirection:'column',
       alignItems:'flex-end',
       // justifyContent:'center',
        marginVertical:'1%'
    },
   
    sub:{
        flexDirection:'row-reverse',
   alignItems:'center',
     //justifyContent:'center',
      //  width:'95%',
    },
    txt:{
        color:'#000',fontSize:RFValue(18),marginVertical:'2%',
      padding:10
    },
    
   
  
  
  
  })
  
  
  
  