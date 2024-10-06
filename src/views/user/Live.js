
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
import Icon2 from "react-native-vector-icons/FontAwesome";
import { windowHeight, windowWidth } from '../../components/Dimensions'
import { Black, White } from '../../components/Color'
import { Videoplayer } from '../../components/Videoplayer';
// const   width=Dimensions.get("window").width;
//const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
const Live = (props) => {
    
  //  const {id} = props.route.params;
  const { hlsurl } = props.route.params;

    console.log("hlsssssssssssssss",hlsurl)
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('');
    const [reconnect, setReconnect] = useState(false);
    const [Animation] = useState(new Animated.Value(0))
    const navigation = useNavigation();
    const [repeat, setRepeat] = useState(false)
    const [textinput, setTextinput] = useState()

    //const [isModalVisible, setModalVisible] = useState(false);






    useEffect(() => {
        const backAction =() => {

               // navigation.navigate('ticket',{})
            navigation.navigate("livesections",{})
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);


    useEffect(() => {
        Animated.loop(
            Animated.timing(Animation, {
                toValue: 1,
                duration: 15000,
                useNativeDriver: false,
            })
        ).start();
  //  }, [repeat])
    }, [repeat])

    const backgroundColor = Animation.interpolate({
        inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
        outputRange: ['#1abc9c', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#1abc9c'],
    });

    // const { data, doFetch: connect } = useFetch('datacourse/get_data_play', true)

    

    // const { doFetch } = useFetch('comment/add', true);

    // const sendMsg = () => {
    //     setMessages([{ message: message }, ...messages]);
    //     doFetch({
    //         idTable: props.route.params.idDataCourse,
    //         nameTable: 'DataCourse',
    //         comment: message,
    //         type: 'comment',
    //     })
    //     setMessage('');
    // };
    
    ////////////////////////////////////////////////////////////////////
    

///////////////////////////////////////////////////////////////////////////////////


const sendAPI = async () => {
    try {
        const res = await requestsend({
            id: id,
            text: textinput,
            image: "",
            video: "",
            document: "",
            audio: ""
        });

        //   console.log('SendLOGS----->', res.data);

        if (res.error == true) {
            alert(res.message);
        } else {
            if (res.data == [] || res.data == undefined || typeof res.data == 'undefined') {
                setmessages('error');
            } else {
                setdatasend(res.data);
            }
        }


        // setload(true)
        await setAPI();

      
    } catch (error) {
        
        console.error(error);
    }
   
}



    const Send = async () => {
       // await sendAPI()
        //setTextinput("")
      //  Alert.alert("پیام ارسال شد",)
        Alert.alert(
            '',
            'پیام ارسال شد',
            [
              {
                text: 'OK',
                style: 'cancel',
              },
            ],
            {
              titleStyle: {
                color: 'red',
                fontSize: 20,
                textAlign: 'center',
              },
              messageStyle: {
                color: '#f00',
                fontSize: 16,
                textAlign: 'center',
              },
            }
          );
    }






    return (
        <Animated.View style={[styles.container, { backgroundColor: backgroundColor }]}>
            {/* <BackgroundColors /> */}
            
              {   hlsurl != ' ' &&
                <Videoplayer inputUrl={hlsurl} 
               // repeat={repeat} setRepeat={setRepeat}
                 />
            
            }









<View style={[styles.searchSection,
                
            ]}>
                <TouchableOpacity
                    onPress={() => Send()}
                >
                    <Icon2 style={styles.searchIcon} name="send" size={28} color="#f00" />

                </TouchableOpacity>


                {/* < UploadFiles  id={id}/> */}

                <TextInput
                    //  style={[styles.input, {opacity: (inputtext) ? 0 : 1}]}
                    // style={styles.input}
                    style={styles.inputs}
                    placeholder="نوشتن پیام جدید"
                    value={textinput}
                    onChangeText={(text) => setTextinput(text)}
                    //onFocus={()=>setAPI()}
                    ///onFocus={()=>setPage("1")}
                    selectionColor={'#000'}

                >

                </TextInput>
                {/* <View style={{top:"1%",backgroundColor:"yellow",alignItems:"center",justifyContent:"center"}}> */}








            </View>

        </Animated.View >
    )
}

// function ChatItem({ item }) {
//     return (
//         <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
//             <View style={[styles.chatItemCommon, styles.receive]}>
//                 <Text style={{ ...styles.msgtxt, color: Black, lineHeight: 25 }}>{item["message"]}</Text>
//             </View>
//             <View style={{ width: 50, height: 50, backgroundColor: 'rgba(239,161,238,0.69)', borderRadius: 50, margin: 5 }} />
//         </View>
  //  )
//}


// export default React.memo(Live)
export {Live}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
        justifyContent:"flex-end",
        alignItems:"center"
    },
    blackContainer: {
        flex: 1,
        backgroundColor: 'black',
    },
    playerView: {
        heigth: Math.floor(windowHeight),
        width: windowWidth,
    },
    chatItemCommon: {
        marginBottom: 8,
        borderRadius: 10,
        maxWidth: '60%',
        padding: 5,
        backgroundColor: "rgba(255,255,255,0.3)",
    },
    msgtxt: {
        padding: 5,
        // maxWidth: '80%',
        fontSize: RFValue(14),
        color: Black,
        textAlign: 'right',
        fontFamily: 'BYekan',
        // lineHeight: 25
    },
    listStyle: {
        paddingHorizontal: 10,
        paddingBottom: 20
    },
    heartIcons: {
        margin: 10,
    },
    heartIconContainer: {
        position: 'absolute',
        // bottom: 0,
        bottom: 50,
        margin: 10
    },
    heartIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heartCount: {
        fontFamily: 'BYekan',
        fontSize: RFValue(16),
        color: White,
        position: 'absolute'
    },
    
    searchSection: {
        width: "95%",
        // flex:1,
        alignSelf: "center",
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        //  backgroundColor:'#100530',
        backgroundColor: '#f5f5f5',
        //  backgroundColor: '#FFD119',
      //  bottom:"50%",


        // top: "100%",
        marginBottom: "5%",
        borderRadius: 5,



    },
    searchIcon: {
        padding: 20,
    },

    inputs: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        //  backgroundColor:'#100530',
        backgroundColor: '#f5f5f5',

        // backgroundColor: '#FFD119',
        color: '#000',
        textAlign: "center",
        // borderBottomLeftRadius:5,
        borderRadius: 5,
    },

    modalIcons: {
        fontSize: RFValue(25),
        color: "gray"
    },
    modalTexts: {
        fontSize: RFValue(12),
        //   color: Gray,
        color: "gray"
        //fontFamily: "BYekan"
    },
    
    modalIcons: {
        fontSize: RFValue(25),
       // color: "gray"
    },
    modalTexts: {
        fontSize: RFValue(12),
        //   color: Gray,
        color: "gray"
        //fontFamily: "BYekan"
    },
    /////
    centeredView1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //  marginTop: 22,
        ///  backgroundColor:"#f00",

    },
    button: {
        borderRadius: 20,
        padding: 20,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    modalView1: {
        margin: 20,
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        padding: 35,
        position: "absolute",
        bottom: "7%",
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText1: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: RFValue(20)
    },
    ///

    fileModal: {
        height: 200,
        backgroundColor: White,
        flexDirection: 'row'
    },
    modalSec: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalIcons: {
        fontSize: RFValue(25),
       // color: Gray
    },
    modalTexts: {
        fontSize: RFValue(12),
        //color: Gray,
        fontFamily: "BYekan"
    },


})