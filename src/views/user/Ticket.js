
import React, { useState, useEffect, useContext, useRef } from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Button,
    ScrollView,
    Image, BackHandler, Alert, FlatList, moment, unix, Animated, PermissionsAndroid

} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon2 from "react-native-vector-icons/FontAwesome";

import Icon from "react-native-vector-icons/MaterialIcons";
import { RFValue } from "react-native-responsive-fontsize";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Header } from '../../components/Header';
import { Context } from '../../components/Context';
import { usefetchuser } from '../../components/usefetchuser';
import { ActivityIndicator } from 'react-native-paper';
import { JDate, JTime } from '../../components/JDate';
import logomain from "../../assets/images/t1.jpg";
import { baseUrl, imageUrl } from "../../components/Addresses";
import FastImage from 'react-native-fast-image' //for show gif
//import Video from "react-native-video"
import { Video } from '../../components/Video';
import { Document } from '../../components/Document';
//import BigList from "react-native-big-list";
import { Audio } from '../../components/Audio';
import { UploadAudio } from '../../components/UploadAudio';
import { UploadFiles } from '../../components/UploadFiles';
import Entypo from 'react-native-vector-icons/Entypo';
import { handleChoosePhoto } from "../../components/UploadItems"
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { handleChooseaudio } from "../../components/UploadItems";
import { AudioPlayer } from '../../components/AudioPlayer';



const audioRecorderPlayer = new AudioRecorderPlayer();

let page = 0;
let count = 12;



const Ticket = (props) => {

    const navigation = useNavigation()

    const { id , type,status} = props.route.params;

    const regex = /(<([^>]+)>)/ig;


    const refflatlist = useRef(null);
    const scrollViewRef = useRef();
    const flatListRef = useRef(null);
    // const VideoRef = useRef(null);


    const [recordSecs, setRecordSecs] = useState(0);
    const [recordTime, setRecordTime] = useState('');
    const [endaudio, setendaudio] = useState();
    const [currentPositionSec, setCurrentPositionSec] = useState(0);
    const [currentDurationSec, setCurrentDurationSec] = useState(0);
    const [playTime, setPlayTime] = useState('');
    const [duration, setDuration] = useState('');
    const [fetchstatus, setfetchstatus] = useState(false);



    // const [mobilenumber,setmobilenumber]=useState("");

    const [textinput, setTextinput] = useState("")

    const [data, setdata] = useState([])
    const [totaldata, settotaldata] = useState([])
    const [imgset, setimgset] = useState()
    const [messages, setmessages] = useState('')
    const [datasend, setdatasend] = useState([])
    // const [total,settotal]=useState(0)
    const { request } = usefetchuser('tickets/chat')
    const { request: requestsend } = usefetchuser('tickets/send-message')
    const [load, setload] = useState(false);
    // const [pages, setPages] = useState(1);




//////////////////////////////////////////////

    useEffect(() => {
        const backAction =() => {

               // navigation.navigate('ticket',{})
            navigation.navigate("ticketlist",{type:type,status:""})
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);
    ////////////////////////////////////////





    useEffect(() => {
        // Scroll to the end of the list when the component mounts
        //     flatListRef.current.scrollToEnd({ animated: true });
    }, []);








    //     const uploadImage = () => {
    //        // if (message !== '') {

    //         handleChoosePhoto('image').then((image) => {
    //             console.log("imageuploadticket===>",image)


    //             requestsend({
    //                     id:id,
    //                    image: image,
    //                    text:"",
    //                     video: '',
    //                     audio: '',
    //                     document: ''
    //                 })

    //             }).catch(error => {
    //                 console.error("خطا در انتخاب تصویر: ", error);
    //             });


    // }
    /////////////////////////


    ///////////////////0000000//////

    const uploadImage = async () => {

        handleChoosePhoto('image').then(image => {

            // console.log("imageuploadticket===>", image);

            requestsend({
                id: id,
                image: image,
                text: "",
                video: '',
                audio: '',
                document: ''
            });
            // setAPI()
            // setAPI()
            //     .then((result) => {
            //         // Handle success, 'result' will be the new data or whatever you want to return.
            //         // console.log('Success:', result);
            //     })
            //     .catch((error) => {
            //         // Handle errors
            //         console.error('Error:', error);
            //     });
        })

    }



    ////////////////////////////////////////



    const setAPI = () => {
        console.log("id12345",id)
        request(
            {
                id: id,
            }

        ).then(res => {

            console.log('CHATLOGS----->', res.data)
            console.log('sender----->', res.data.sender)
            if (res.error == true) {
                alert(res.message)
            }
            else {
                if (res.data == [] || res.data == undefined || typeof res.data == 'undefined') {
                    setmessages('error')
                } else {


                    setdata(res.data)

                }
            }

        })
    }

    /////////////////////////////////////////////////////////


    const reversed = [...data].reverse();
    //console.log(" reversed=>", reversed)
    //////////////////////////////////////

    const fetchData = async () => {

        if (data.length != 0) {
            console.log("1111", [page, count])
            setfetchstatus(true)
            page = count;
            count += 12;

            console.log("22222222", [page, count])

            await setAPI();


            //  setAPI()
            //  .then((result) => {
            //    // Handle success, 'result' will be the new data or whatever you want to return.
            //    console.log('Success:', result);
            //  })
            //  .catch((error) => {
            //    // Handle errors
            //    console.error('Error:', error);
            //  });
 


            setfetchstatus(false)
        }

        

    }
    ////////////////////////////////////////////////////////////////////////////
    // const setAPI = () => {
    //     return new Promise(async (resolve, reject) => {
    //         console.log("page", page);
    //         console.log("count", count);

    //         try {
    //             const res = await request({
    //                 id: id,
    //             });

    //             console.log('RESPONSE => ', res.data);
    //             console.log('DATA 1 => ', data);

    //             if (res.error === true) {
    //                 Alert.alert(res.message);
    //                 reject(res.message); // Reject the Promise with an error message.
    //             } else {
    //                 if (res.data === null || res.data === undefined || typeof res.data === 'undefined') {
    //                     setmessages('error');
    //                     reject('Error message'); // Reject the Promise with an error message.
    //                 } else {
    //                     const newData = data.concat(res.data.slice(page, count)); // Concatenate the new data with the existing data
    //                     console.log("SLICED RESPONSE => ", res.data.slice(page, count));
    //                     // await setdata(...data,res.data.slice(page,count));
    //                     setdata(newData);
    //                     resolve(newData); // Resolve the Promise with the new data
    //                 }
    //             }
    //         } catch (error) {
    //             console.error('An error occurred:', error);
    //             reject(error); // Reject the Promise with the error object
    //         }
    //     });
    // };



    ////////////////////////////////////////////////////////////////////////


    // const setAPI = async () => {
    //     console.log("page",page)
    //        console.log("count",count)
    //     try {
    //         const res = await request({
    //             id: id,
    //         });

    //         console.log('audiosetapi----->', res.data);
    //         console.log('s333333----->', res.data.sender);

    //         if (res.error === true) {
    //             Alert.alert(res.message);
    //         } else {
    //             if (res.data === null || res.data === undefined || typeof res.data === 'undefined') {
    //                 setmessages('error');
    //             } else {

    //             //  await  settotaldata(res.data)
    //              await   setdata(...data,res.data.slice(page,count));
    //              //  setdata(...data,totaldata.slice(page,count));
    //                 console.log("1111",res.data.slice(page,count))
    //                 // const array = [];
    //                 // array.
    //             }
    //         }
    //     } catch (error) {
    //         console.error('An error occurred:', error);
    //     }
    // };


    ///////////////////////////////////////////////////


    // const sendAPI = () => {
    //     requestsend(
    //         {
    //             id: id,
    //             text: textinput,
    //             image: "",
    //             video: "",
    //             document:"",
    //             audio:""
    //         }


    //     ).then(res => {


    //         console.log('SendLOGS----->', res.data)

    //         if (res.error == true) {
    //             alert(res.message)
    //         }
    //         else {
    //             if (res.data == [] || res.data == undefined || typeof res.data == 'undefined') {
    //                 setmessages('error')
    //             } else {


    //                 setdatasend(res.data)

    //             }
    //         }

    //     })
    //     setAPI()

    // }

    //////////////////////8888888/////////////////////


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

            // setAPI()
            //     .then((result) => {
            //         // Handle success, 'result' will be the new data or whatever you want to return.
            //         console.log('Success:', result);
            //     })
            //     .catch((error) => {
            //         // Handle errors
            //         console.error('Error:', error);
            //     });
            //////////////////////
        } catch (error) {
            // Handle any errors that may occur during the asynchronous operation
            console.error(error);
        }
        //navigation.navigate("ticket",{id:id})
    }



    ////////////////////////////////////////////


    const Send = async () => {
        await sendAPI()
        setTextinput("")
        //  alert("پیام ارسال شد",)
    }



    useFocusEffect(
        React.useCallback(() => {
            setAPI()

        }, [])

    )




    const ismymessage = (sender) => {
        return sender === "admin"
    }




    //     const MyListItem = React.memo(({ item, index }) => {

    //         // console.log(ismymessage(item.sender))
    //         // Render your list item here
    //         let Tickets = (<TouchableOpacity

    //         key={index}

    //             style={[Styles.chat, {
    //                 backgroundColor: ismymessage(item.sender) ? "#fff" : "#99ff66",
    //                  alignSelf: ismymessage(item.sender) ? "flex-end" : "flex-start", }]}
    //              >

    // {(item.text !== "n/a" && item.text !== null && item.text !== undefined) &&
    //   <Text style={{ color: '#000', fontSize: RFValue(14), marginVertical: '5%', }}>{item.text.replace(regex, '')}</Text>
    //     }

    //             {(item.image !== "n/a" && item.image !== null && item.image !== undefined) &&
    //                 <FastImage
    //                     style={{ width: 200, height: 200 }}
    //                     source={{ uri: `${baseUrl}${imageUrl}/${item.image}` }}
    //                     resizeMode={FastImage.resizeMode.contain}
    //                 />} 
    // {/* 
    // {(item.video !== "n/a" && item.video !== null && item.video !== undefined) &&         

    // <Video 
    // source={{ uri:`${baseUrl}${imageUrl}/${item.video}` }}   
    // controls
    // resizeMode="contain"
    // paused={true}   
    // style={{width:300,height:300,alignSelf:"center",}}
    //  />
    //      }  */}



    //         </TouchableOpacity>
    //         )
    //         return (

    //             Tickets
    //         );
    //     });





    const MyListItem = (({ item }) => {
        // const isEnd = index === data.length - 1;
        // console.log ('item.document' , item.document) ;
        // console.log ('item.document' , item.document) ;
        // console.log ('item.document' , item.document) ;

        return (

            <ScrollView
                contentContainerStyle={Styles.containerscroolview}

                style={[
                    Styles.chat
                    , {
                        backgroundColor: ismymessage(item.sender) ? "#fff" : "#99ff66",
                        alignSelf: ismymessage(item.sender) ? "flex-end" : "flex-start",
                    }]}>





                {/* 

<Video 
source={{ uri:`${baseUrl}${imageUrl}/${item.video} `}}   
controls
resizeMode="contain"
paused={true}   
style={{width:300,height:300,alignSelf:"center",}}
 /> */}

                {(item.image !== "n/a" && item.image !== null && item.image !== undefined) &&
                    <FastImage
                        style={{ width: 200, height: 200 }}
                        source={{ uri: `${baseUrl}${imageUrl}/${item.image}` }}
                        resizeMode={FastImage.resizeMode.contain}
                    />}

                {(item.text !== "n/a" && item.text !== null && item.text !== undefined) &&
                    <Text style={{ color: '#000', fontSize: RFValue(14), marginVertical: '5%', }}>{item.text.replace(regex, '')}</Text>
                }


                {(item.document !== "n/a" && item.document !== null && item.document !== undefined) &&
                    <Document source={item.document} />

                }

                {(item.audio !== "n/a" && item.audio !== null && item.audio !== undefined) &&
                    <AudioPlayer source={item.audio} />

                }
                {(item.video !== "n/a" && item.video !== null && item.video !== undefined) &&

                    <Video

                        source={item.video}
                    />
                }


            </ScrollView>
        )



    }

    )


    /////////////////////////////////AUDIO//////////////////////////////////////////////////


    const onStartRecord = async () => {
        const result = await audioRecorderPlayer.startRecorder();
        audioRecorderPlayer.addRecordBackListener((e) => {
            setRecordSecs(e.currentPosition);
            setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
        });
        console.log("start-result-audio=>", result);
    };


    const onStopRecord = async () => {
        const result = await audioRecorderPlayer.stopRecorder();
        audioRecorderPlayer.removeRecordBackListener();
        setRecordSecs(0);
        console.log("stop-result-audio=>", result);
        //  setResult(result)
        uploadaudio(result)
    };





    const uploadaudio = async (result) => {

        //    console.log("resultaudio===>", result);
        try {
            const audio = await handleChooseaudio(result);
            console.log("audioname===>", audio);

            await requestsend({
                //  id: id.id,
                id: id,
                image: "",
                text: "",
                video: "",
                audio: audio,
                document: ""
            })
            // .then(res=>{
            //   console.log("audioend",res)
            //    setmsg(res.message)
            // })
        } catch (error) {
            console.error("خطا ارسال ", error);
        }
        await setAPI();
        setAPI()
            .then((result) => {
                // Handle success, 'result' will be the new data or whatever you want to return.
                console.log('Success:', result);
            })
            .catch((error) => {
                // Handle errors
                console.error('Error:', error);
            });
    };











    /////////////////////////EndAUDIO/////////////////////////////////////////////////////////




    console.log("DATA => ", data)
    return (
        <SafeAreaView
            style={Styles.container}
        >
            <Image

                source={logomain}
                style={StyleSheet.absoluteFillObject}
            //blurRadius={40}

            />
            {/* <Header /> */}

            <Text>Ticket</Text>
            <FlatList
                // data={data}
                //    data={reversed}
                data={data}
                renderItem={MyListItem}
                keyExtractor={(item, i) => i}
                //initialScrollIndex={data.length-2} // از آخرین پیام شروع کنید
                //inverted={true}
                ref={refflatlist}

                //  style={{  transform: [{ scaleY: -1 }] }}
                inverted
                //   onContentSizeChange={() => refflatlist.current.scrollToEnd({ animated: true })}


              //  onEndReached={() => fetchData()}
              //  ListFooterComponent={() => {



                //    return (

                     //   <ActivityIndicator color="blue" size="large" />
                 //   )
              //  }
                //}

            />



            {/* 
<UploadAudio  id={id}/> */}




            {/* uploadimage */}


            {/* <TouchableOpacity
                onPress={uploadImage}
            //  style={styles.modalSec}
            >
                <Entypo name='images'
                    style={Styles.modalIcons}
                />
                <Text
                    style={Styles.modalTexts}
                >تصویر</Text>
            </TouchableOpacity> */}


            {/* enduploadimage */}

            <View style={[Styles.searchSection,
                //{ transform: [{ scaleY: -1 }]}
            ]}>
                <TouchableOpacity
                    onPress={() => Send()}
                >
                    <Icon2 style={Styles.searchIcon} name="send" size={28} color="#000" />

                </TouchableOpacity>




                {/* 

    <TouchableOpacity 
   onPress={<Audio/>}
    >

<Icon2  style={Styles.searchIcon} name="microphone" size={28} color="#f0f" />

    </TouchableOpacity>
   */}



                {/* < UploadFiles  id={id}/> */}

                <TextInput
                    //  style={[styles.input, {opacity: (inputtext) ? 0 : 1}]}
                    // style={styles.input}
                    style={Styles.inputs}
                    placeholder="نوشتن پیام جدید"
                    value={textinput}
                    onChangeText={(text) => setTextinput(text)}
                    //onFocus={()=>setAPI()}
                    ///onFocus={()=>setPage("1")}
                    selectionColor={'#000'}

                >

                </TextInput>
                {/* <View style={{top:"1%",backgroundColor:"yellow",alignItems:"center",justifyContent:"center"}}> */}





                <TouchableOpacity onPressIn={onStartRecord} onPressOut={onStopRecord}>
                    <Icon2 style={{ padding: 10, }} name="microphone" size={28} color="#f00" />
                </TouchableOpacity>






            </View>

        </SafeAreaView>
    )
}

export { Ticket }









const Styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems:'center',
        //  justifyContent:'center',
        backgroundColor: '#5221BD'
    },
    vid: {
        height: 300,
        width: 300
    },
    parents: {
        width: '80%',

        backgroundColor: ' #F5F5F5',

        alignSelf: 'center',
        height: (Dimensions.get('window').height / 100) * 25,
        marginVertical: '2%',
        borderRadius: 10
    },

    titlearticle: {
        color: 'black',
        fontSize: RFValue(14),
        alignSelf: 'flex-end',
        marginHorizontal: '5%',
        marginVertical: '4%'
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: (Dimensions.get('window').height / 100) * 7,
        backgroundColor: 'white'
    },
    logo: {
        width: 50,
        height: 50
    },
    Viewalert: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#5220BD',
        borderRadius: 5,
        marginVertical: '2%',

    },
    textalert: {
        color: 'white',
        fontSize: RFValue(12),
        width: '95%',
        marginVertical: '1%'
    },
    mainparentalert: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        alignSelf: 'center',
    },
    parentoptions: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: '3%'
    },
    options: {
        borderRadius: 10,
        borderColor: '#5220BD',
        borderWidth: 2,
        width: '45%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: (Dimensions.get('window').height / 100) * 12,
        backgroundColor: 'white'
    },
    chat: {
        //  backgroundColor:'#5220BD',
        // backgroundColor:'#f5f5f5',
        borderRadius: 10,
        width: '80%',
        //  height:"10%",
        // alignSelf: 'center',
        flexDirection: 'column',

        //     alignItems:'flex-end',
        // justifyContent:'center',
        // marginVertical: '2%',
        shadowColor: "#f0f",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: .3,
        shadowRadius: 20,
        padding: 10,
        margin: 10
    },


    containerscroolview: {


        alignItems: 'flex-end',
        justifyContent: 'center',


    },








    txtpakegs: {
        color: 'bleck', fontSize: RFValue(19), fontWeight: 'bold', marginVertical: '5%', alignSelf: 'center'
    },
    parentdatestaetend: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%',
    },
    //     chat:{
    // //marginVertical:10,
    // //marginHorizontal:16,
    // justifyContent:"center",
    // alignItems:"center",
    // borderRadius:6,
    // paddingBottom:32,


    //     },
    textdate: {
        color: '#000', fontSize: RFValue(12), marginVertical: '2%', alignSelf: 'center'
    },
    submitpakege: {
        width: '95%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,

        backgroundColor: "#FFD119",


        marginVertical: '2%'
    }
    , texsubmitpakege: {
        color: 'black', fontSize: RFValue(14), marginVertical: '2%', alignSelf: 'center'

    },
    needs: {
        width: '95%',
        backgroundColor: 'white',
        alignSelf: 'center'
    },
    parentneeds: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: '5%'
    },
    neddoption: {
        borderRadius: 10,
        width: '45%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    newArticle: {
        width: '95%',
        backgroundColor: 'white',
        alignSelf: 'center',
        marginVertical: "3%"
    },
    imagenewArticle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: '3%'
    },

    maintex: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: '10%'

    },
    childArticle: {
        borderColor: '#5220BD',
        borderWidth: 2,
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center',
        marginVertical: '4%'

    },
    containu: {
        color: '#5220BD',
        fontSize: RFValue(14),
        alignSelf: 'flex-end',
        marginHorizontal: '5%',
        marginVertical: '4%'
    },


    input: {
        backgroundColor: '#100530',
        fontSize: RFValue(17),
        color: '#fff',
        padding: 15,
        marginVertical: "2%",
        //borderRadius:5,
        width: "80%",
        //height:Dimensions.get("window").width>576?"20%":"8%",
        height: "90%",
        textAlign: "center",
        // ...Platform.select({ web: {
        //   cursor: 'pointer',
        // }}),
        //opacity: (state) ? 0 : 1

    },
    searchSection: {
        width: "90%",
        // flex:1,
        alignSelf: "center",
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        //  backgroundColor:'#100530',
        backgroundColor: '#f5f5f5',
        //  backgroundColor: '#FFD119',


        top: "2%",
        marginBottom: "5%",
        borderRadius: 5,



    },
    searchIcon: {
        padding: 10,
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



})

