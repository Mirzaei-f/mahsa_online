// import React, { useState, useRef, useEffect } from 'react';
// import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import Video from 'react-native-video';


// const Test = () => {
//   const videoPlayer = useRef(null);
//   const [isFullScreen, setIsFullScreen] = useState(false);

//   useEffect(() => {
//     const orientationChange = (orientation) => {
//       setIsFullScreen(orientation === 'LANDSCAPE');
//     };

//     Orientation.addOrientationListener(orientationChange);

//     return () => {
//       Orientation.removeOrientationListener(orientationChange);
//     };
//   }, []);

//   const toggleFullScreen = async () => {
//     if (isFullScreen) {
//       await Orientation.lockToPortrait();
//     } else {
//       await Orientation.lockToLandscape();
//     }
//     setIsFullScreen(!isFullScreen); // Toggle isFullScreen after locking orientation
//   };

//   return (
//     <View>
//       <Video
//         ref={videoPlayer}
//         source={{ uri: 'https://www.w3schools.com/html/movie.mp4' }}
//         style={isFullScreen ? styles.fullScreenVideo : styles.normalVideo}
//         controls={true}
//         paused={false}
//         resizeMode="cover"
//       />
//       <View style={styles.fullScreenButtonContainer}>
//         <YourFullScreenButton onPress={toggleFullScreen} isFullScreen={isFullScreen} />
//       </View>
//     </View>
//   );
// };

// const YourFullScreenButton = ({ onPress, isFullScreen }) => (
//   <TouchableOpacity onPress={onPress} style={styles.fullScreenButton}>
//     <Text style={styles.fullScreenButtonText}>
//       {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
//     </Text>
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   normalVideo: {
//     width: 300,
//     height: 200,
//   },
//   fullScreenVideo: {
//     flex: 1,
//   },
//   fullScreenButtonContainer: {
//     position: 'absolute',
//     top: 20,
//     right: 20,
//     zIndex: 1,
//   },
//   fullScreenButton: {
//     padding: 10,
//     backgroundColor: '#333',
//     borderRadius: 5,
//   },
//   fullScreenButtonText: {
//     color: '#fff',
//   },
// });

// export { Test };


////////////////////////////////////////////////////////////////////////
// import Video from 'react-native-video-controls';
// import Orientation from 'react-native-orientation-locker';

// import { View, Text, StyleSheet } from 'react-native'
// import React, { useState, useRef } from 'react';

// const Test = () => {
//   const videoPlayer = useRef(null);

//   const [fullScreen, setFullScreen] = useState(false);
//   const FullScreen = () => {
//           if(fullScreen){
//               Orientation.lockToPortrait();
//           } else{
//               Orientation.lockToLandscape();
//           }
//           setFullScreen(!fullScreen)
//       }


//   return (
//     <View style= {fullScreen ?  styles.fullscreenVideo : styles.video }>
//                     <Video
//                         fullscreen = {fullScreen}
//                         ref={videoPlayer }
//                         // source={{
//                         //     uri:videos,
//                         //     type:'mpd'
//                         // }}
//                         source={{ uri: 'https://www.w3schools.com/html/movie.mp4' }}
//                         style={{...StyleSheet.absoluteFill}}
                        
//                     />
// </View>
//   )
// }

// export  {Test}

// const styles=StyleSheet.create({

//   fullscreenVideo:{
//     backgroundColor: 'black',
//     ...StyleSheet.absoluteFill,
//     elevation: 1,
            
// },


// })

////////////////////////////////////


// import React, { useState, useRef } from 'react';
// import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';
// import VideoPlayer from 'react-native-video-controls';
// import Orientation from 'react-native-orientation-locker';

// const Test = () => {
//   const [fullScreen, setFullScreen] = useState(false);
//   const video = useRef(null);

//   const FullScreen = () => {
//     if (fullScreen) {
//       Orientation.lockToPortrait();
//     } else {
//       Orientation.lockToLandscape();
//     }
//     setFullScreen(!fullScreen);
//   };

//   return (
//     <View>
//       <VideoPlayer
//   source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
//   navigator={this.props.navigator}
// />;
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   video: {
//     flex: 1,
//   },
//   fullscreenVideo: {
//     backgroundColor: 'black',
//     ...StyleSheet.absoluteFill,
//     elevation: 1,
//   },
//   fullscreenButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     padding: 10,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     borderRadius: 5,
//   },
//   fullscreenButtonText: {
//     color: 'white',
//   },
// });

// export {Test};


// ////////////////////////
// import { View, Text } from 'react-native'
// import React from 'react'

// const Test = () => {
//   return (
//     <View>
//       <Text>Test</Text>
//     </View>
//   )
// }

// export { Test}



///////////////////////////////////////////////////////////////






// import { View, Text ,TouchableOpacity,StyleSheet,Image,Dimensions} from 'react-native'
// import     { React,useRef,useState,useEffect} from 'react'
// import Video1 from    "react-native-video"
// import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
// import { baseUrl, imageUrl, videoUrl } from "../components/Addresses";
// import Orientation from'react-native-orientation-locker';

// import { RFValue } from 'react-native-responsive-fontsize';
// import Icon from "react-native-vector-icons/MaterialIcons";

// const   width=Dimensions.get("window").width;
// const   height=Dimensions.get("window").height;

// const ASPECT_RATIO = width / height;


// const Test = () => {
//   const videoPlayer = useRef(null);
//   const [duration, setDuration] = useState(0);
//   const [paused, setPaused] = useState(true);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   // const [ScreenType, setScreenType] = useState("contain");
//   let [ScreenType, setScreenType] = useState("contain");

 












//   const onSeek = (seek) => {
//     videoPlayer?.current.seek(seek);
//   };

//   const onSeeking = (currentVideoTime) => setCurrentTime(currentVideoTime);

//   const onPaused = (newState) => {
//     setPaused(!paused);
//     setPlayerState(newState);
//   };

//   const onReplay = () => {
//     videoPlayer?.current.seek(0);
//     setCurrentTime(0);
//     setPlayerState(PLAYER_STATES.PAUSED);
//     setPaused(true);
//   };

//   const onProgress = (data) => {
//     if (!isLoading) {
//       setCurrentTime(data.currentTime);
//     }
//   };

//   const onLoad = (data) => {
//     videoPlayer.current.seek(0);
//     setDuration(Math.round(data.duration));
//     setIsLoading(false);
//   };

//   const onLoadStart = () => setIsLoading(true);

//   const onEnd = () => {
//     setPlayerState(PLAYER_STATES.ENDED);
//     setCurrentTime(duration);
//   };




//   const onFullScreen = () => {

//     setIsFullScreen(!isFullScreen);
  
//     if (ScreenType === 'contain') {
//       setScreenType('stretch');
//       // Adjust styles for full screen
//       // styles.backgroundVideo.height = height/3; // Set height to full screen
       
//       // styles.backgroundVideo.width = width/2;  // Set width to full screen
   
     
//       // styles.backgroundVideo.marginVertical = 0; // Remove vertical margin
//       // Orientation.lockToPortrait();
//     } else {
//       setScreenType('contain');
//       // Reset styles for non-full screen
//       // styles.backgroundVideo.height = width > 576 ? 350 : height/2;
//       // styles.backgroundVideo.width = width > 576 ? 470 : width - 70;
//       // styles.backgroundVideo.marginVertical = "10%";
//       //  Orientation.lockToLandscape();
   
//     }
//   };



  
  
//   return (
//     <View 
//     style={styles.container}
//       >
  

     

      
//       <Video1
//       source={{ uri: 'https://www.w3schools.com/html/movie.mp4' }}
//         style={styles.video}
     
//         resizeMode={ScreenType}
//       //  controls={true}
//       />
      
//       <MediaControls
//          isFullScreen={false}
//                          duration={duration}
//                          isLoading={isLoading}
//                          progress={currentTime}
//                          onPaused={onPaused}
//                          onReplay={onReplay}
//                          onSeek={onSeek}
//                          onSeeking={onSeeking}
//                          mainColor={"red"}
//                          playerState={playerState}
//                          onFullScreen={onFullScreen}
//                        style={{backgroundVideo:"#000"}}
//                        sliderStyle={{ containerStyle: { }, thumbStyle: { }, trackStyle: {} }}
     
//       /> 
        
//       {/* Full-screen button */}
//       <TouchableOpacity onPress={onFullScreen} style={styles.fullScreenButton}>
//         <Icon name={isFullScreen ? 'fullscreen-exit' : 'fullscreen'} size={RFValue(30)} style={{ color: "#f0f" }} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export {Test};

// var styles = StyleSheet.create({
 

//   container: {
//      flex: 1,
//     width:300,
//     height:300,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   video: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
 
//    fullScreenButton: {
//      position: 'absolute',
//      top: 20,
//      right: 20,
//      zIndex: 1,
//    },
//    backgroundVideo: {
//     // ... (other styles)
//      // height: width > 576 ? 350 : height,
//      // width: width > 576 ? 470 : width-100 ,
  
//      // marginVertical: "10%",
//    },
   
// });


///////////////////////////////////////////////////////

// import React, { useState, useRef, useEffect } from 'react';
// import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import Video from 'react-native-video';


// const Test=()=>{


// return(

// <View  style={styles.container}>


// <Video
//       //source={{ uri: 'https://www.w3schools.com/html/movie.mp4' }}
//       source={{ uri:'http://azhman.azhman.online:1935/azhman2/section-5-439/playlist.m3u8' }}
//         style={{
//           width:300,
//           height:200,
//           top:70
//         }}
     
//         resizeMode={"contain"}
//        controls={true}
//       />


// </View>


// )

// }

// export {Test}



// const styles=StyleSheet.create({

// container:{
//  flex:1,
// //  backgroundColor:"#f00"

// },
// txt:{

//   fontSize:12,
// },
// txtinput:{
//   padding:20,
// }




// })


///////////////////////////////////////////////////////////////////////////////////
// import React, {useState,useEffect, useContext} from 'react';
// import {
//     SafeAreaView,
//     Text,
//     StyleSheet,
//     View,
//     TouchableOpacity,
//     Dimensions,
//     TextInput,
//     ScrollView,
//     Image,BackHandler, Alert, FlatList, moment, unix, Animated, PermissionsAndroid

// } from 'react-native';

// import { s } from "react-native-wind";
// import { Buttonview } from '../../components/Buttonview';
// import { Need } from '../../components/Need'; 
// import { Package } from '../../components/Package'; 
// import { Headernew } from '../../components/Headernew';
// import {RFValue} from "react-native-responsive-fontsize";
// import { useFocusEffect, useNavigation } from "@react-navigation/native";
// import { usefetchuser } from '../../components/usefetchuser';
// import { ActivityIndicator } from 'react-native-paper';
// import { JDate ,JTime} from '../../components/JDate';

// import { windowHeight, windowWidth } from '../../components/Dimensions'
// import { Black, White } from '../../components/Color'
// //import { Videoplayer2 } from '../../components/Videoplayer2';
// import { Videoplayer } from '../../components/Videoplayer';
// // const   width=Dimensions.get("window").width;
// //const { width: windowWidth, height: windowHeight } = Dimensions.get('window');


// import Video1 from    "react-native-video"
// const Test = () => {
    
 
//     const [messages, setMessages] = useState([])
//     const [message, setMessage] = useState('');
//     const [reconnect, setReconnect] = useState(false);
//     const [Animation] = useState(new Animated.Value(0))
//     const navigation = useNavigation();
//     const [repeat, setRepeat] = useState(false)
//    const {request} = usefetchuser('packages/section-content?=&=')
//     const [isLoading, setIsLoading] = useState(true)

  
//     const [data,setdata]=useState([])


//     useEffect(() => {
//         const backAction =() => {

//                // navigation.navigate('ticket',{})
//             navigation.navigate("livesections",{})
//             return true;
//         };

//         const backHandler = BackHandler.addEventListener(
//             'hardwareBackPress',
//             backAction,
//         );

//         return () => backHandler.remove();
//     }, []);















//     useEffect(() => {
//         Animated.loop(
//             Animated.timing(Animation, {
//                 toValue: 1,
//                 duration: 15000,
//                 useNativeDriver: false,
//             })
//         ).start();
//   //  }, [repeat])
//     }, [repeat])

//     const backgroundColor = Animation.interpolate({
//         inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
//         outputRange: ['#1abc9c', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#1abc9c'],
//     });

   
    
      
// ///////////////////////////////////////






//     return (

       
//         <Animated.View style={[styles.container, { backgroundColor: backgroundColor }]}>
            
               
// <Videoplayer 
// inputUrl={'https://mahsaonlin.com/upload/sections/51/section-5-471.mp4'} 
// //inputUrl={'https://www.w3schools.com/html/movie.mp4'} 
//                 repeat={repeat} setRepeat={setRepeat}
//                  /> 
 
//           </Animated.View >






//               //   <>
                          
//                 //  <Video1
//                 //  // source={{ uri: 'https://www.w3schools.com/html/movie.mp4' }}
                 
//                 //  source={{ uri:'https://mahsaonlin.com/upload/sections/51/section-5-471.mp4'}}
                 
//                 //    // style={Styles.video}
//                 //      style={{
//                 //        //width:isFullScreen ?width: 300 ,
//                 //       // aspectRatio:width>576? 16 / 9:1/1  ,
//                 //        //aspectRatio:width>576? 16 / 9:16 / 9  ,
                     
//                 //     left:40,
//                 //      top:100,
//                 //      width:300,
//                 //     height:500,
//                 //      }}
                 
                   
//                 //    //resizeMode={ScreenType}
//                 //    resizeMode={"contain"}
//                 //    controls={true}
//                 //   // onLoad={onVideoLoad} */}
                 
//                 //  />
//                          //  </>
                 
       
//     )
// }




// export {Test}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#3498db',
//     },
//     blackContainer: {
//         flex: 1,
//         backgroundColor: 'black',
//     },
//     playerView: {
//         heigth: Math.floor(windowHeight),
//         width: windowWidth,
//     },
//     chatItemCommon: {
//         marginBottom: 8,
//         borderRadius: 10,
//         maxWidth: '60%',
//         padding: 5,
//         backgroundColor: "rgba(255,255,255,0.3)",
//     },
//     msgtxt: {
//         padding: 5,
//         // maxWidth: '80%',
//         fontSize: RFValue(14),
//         color: Black,
//         textAlign: 'right',
//         fontFamily: 'BYekan',
//         // lineHeight: 25
//     },
//     listStyle: {
//         paddingHorizontal: 10,
//         paddingBottom: 20
//     },
//     heartIcons: {
//         margin: 10,
//     },
//     heartIconContainer: {
//         position: 'absolute',
//         // bottom: 0,
//         bottom: 50,
//         margin: 10
//     },
//     heartIcon: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         position: 'relative',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     heartCount: {
//         fontFamily: 'BYekan',
//         fontSize: RFValue(16),
//         color: White,
//         position: 'absolute'
//     }
// })

///////////////////////////////////////////////////////////////////////
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Test = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // or 'column'
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap', // 'nowrap' is the default
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    margin: 10,
  },
});

export {Test};
