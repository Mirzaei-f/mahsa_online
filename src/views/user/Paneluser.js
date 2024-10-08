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
import AsyncStorage from "@react-native-async-storage/async-storage";


import Icon from "react-native-vector-icons/MaterialIcons";
import {RFValue} from "react-native-responsive-fontsize";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Header } from '../../components/Header';
import { Context } from '../../components/Context';
import { usefetchuser } from '../../components/usefetchuser';
import { ActivityIndicator } from 'react-native-paper';
import { JDate ,JTime} from '../../components/JDate';


const Paneluser=()=>{

    const cameraViewRef = React.useRef(null);

    const [number,setnumbr]=useState('')
    const [messages,setmessages]=useState('')
    const [data,setdata]=useState([])
    const {reload,setreload}=useContext(Context)
    const navigation=useNavigation()
    console.log("reeeeeeeeeeeeloadpanllllluser",reload)
    const {request} = usefetchuser('dashboard/home')


    const Go=(id)=>{
        console.log("idddddddddddpanleuserrr===>",id)
        navigation.navigate('live',{id:id})
    }

    const setAPI=()=>{
        request().then(res=>{

            console.log('res--panel ---dashboard/home----->',res.data.readySections )

            if(res.error == true){
                alert(res.message)
            }
            else{
                if(res.data.readySections == []  || res.data.readySections == undefined || typeof res.data.readySections == 'undefined'){
                    setmessages('کلاسی برای برگزاری نیست ')
                }else {
                    setdata(res.data.readySections)

                }
            }

        })
    }



    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };



    useFocusEffect(
        React.useCallback(()=>{
           setAPI()
            requestCameraPermission()

           
        },[!reload])
     )


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



    return(

        <View style={Styles.container}>

            <Header/>

            <Text style={{fontSize:RFValue(20),color:'red',alignSelf:'center'}}>{messages}</Text>

<ScrollView>

{
    data ==[] ? <ActivityIndicator size={50} style={{
        flex: 1,
    }}/> : data.map((item,i)=>{
        return(

            <View style={Styles.pakegmahsa} key={i}>

            <Text style={{color:'#000',fontSize:RFValue(13),marginVertical:'5%',alignSelf:'center'}}>{item.title}</Text>

            <View style={Styles.parentdatestaetend}>

            <Text style={Styles.textdate} >{JDate(item.date)}</Text>


            <Text style={Styles.textdate}>تاریخ</Text>
 </View>
            <View style={Styles.parentdatestaetend}>
            <Text style={Styles.textdate}>{JTime(item.start_at)} </Text>
            <Text style={Styles.textdate}>شروع  کلاس  </Text>
 </View>
            <View style={Styles.parentdatestaetend}>
                <Text style={Styles.textdate}> {JTime(item.end_at)} </Text>
                <Text style={Styles.textdate}>پایان کلاس  </Text>

            </View>

            <TouchableOpacity  onPress={()=>Go(item.id)}  style={Styles.submitpakege}>
                <Text style={Styles.texsubmitpakege}>  پخش زنده  </Text>

            </TouchableOpacity>
            </View>
        )
    })
}

</ScrollView>

        </View>

    )


}


export {Paneluser}

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
      //  backgroundColor:'#5220BD',
      backgroundColor:'#f5f5f5',
        borderRadius:10,
        width:'95%',
        alignSelf: 'center',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:'3%'
    },
    txtpakegs:{
        color:'bleck',fontSize:RFValue(19),fontWeight:'bold',marginVertical:'5%',alignSelf:'center'
    },
    parentdatestaetend:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'95%',
    },
    textdate:{
        color:'#000',fontSize:RFValue(12),marginVertical:'2%',alignSelf:'center'
    },
    submitpakege:{
        width:'95%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
      
       backgroundColor:"#FFD119",
       
      
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



