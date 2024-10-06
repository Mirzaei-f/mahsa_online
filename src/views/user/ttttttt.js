
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

import { windowHeight, windowWidth } from '../../components/Dimensions'
import { Black, White } from '../../components/Color'
import { Videoplayer2 } from '../../components/Videoplayer2';
import { Videoplayer } from '../../components/Videoplayer';
// const   width=Dimensions.get("window").width;
//const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
const Livesaved = (props) => {
    
  //  const {id} = props.route.params;
  const {id,group} = props.route.params;

    console.log("id2222222222222222222222222",id)
    console.log("group2222222222222222222222222",group)
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('');
    const [reconnect, setReconnect] = useState(false);
    const [Animation] = useState(new Animated.Value(0))
    const navigation = useNavigation();
    const [repeat, setRepeat] = useState(false)
   const {request} = usefetchuser('packages/section-content?=&=')
    const [isLoading, setIsLoading] = useState(true)

  
    const [data,setdata]=useState([])


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

   
    
      
///////////////////////////////////////
const finished = () => {
    return new Promise((resolve, reject) => {
        request({
            id: id
        })
        .then(res => {
            console.log('res---finish--->', res.data);
            setdata(res.data);

            if (res.error === true) {
                alert(res.message);
                reject(res.message); // Reject the promise in case of an error
            } else {
                // navigation.navigate('paneluser')
                resolve(); // Resolve the promise if there is no error
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
            reject(error); // Reject the promise if an error occurs during the request
        });
    });
};



      useFocusEffect(
        React.useCallback(()=>{
            finished()
        },[])
      )

////////////////////////////



//console.log("data2222222222222222222",data)


    return (

       
        <Animated.View style={[styles.container, { backgroundColor: backgroundColor }]}>


<Videoplayer2 inputUrl={"https://mahsaonlin.com/upload/sections/51/section-5-471.mp4"} 
                repeat={repeat} setRepeat={setRepeat}
                 />

        </Animated.View >
    )
}




export {Livesaved}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
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
    }
})

