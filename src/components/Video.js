// // export default YourComponent;
// import { View, Text ,TouchableOpacity,StyleSheet,Image,Dimensions} from 'react-native'
// import     { React,useRef,useState} from 'react'
// import Video1 from "react-native-video"
// import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
// import { baseUrl, imageUrl, videoUrl } from "../components/Addresses";


// import { RFValue } from 'react-native-responsive-fontsize';
// import Icon from "react-native-vector-icons/MaterialIcons";

// const   width=Dimensions.get("window").width;
// const   height=Dimensions.get("window").height;

// const Video =({source}) => {


    
//  //  console.log("source",source)
// // The video we will play on the player.
// //const video = require('../assets/video.mp4');
    
// const videoPlayer = useRef(null);
// const [duration, setDuration] = useState(0);
// const [paused, setPaused] = useState(true);

// const [currentTime, setCurrentTime] = useState(0);
// const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
// const [isLoading, setIsLoading] = useState(true);
// const [isFullScreen, setIsFullScreen] = useState(false);

// //const [ScreenType,setScreenType] = useState("contain");
// const [ScreenType,setScreenType] = useState("contain");
// const onSeek = (seek) => {
//     videoPlayer?.current.seek(seek);
// };

// const onSeeking = (currentVideoTime) => setCurrentTime(currentVideoTime);

// const onPaused = (newState) => {
//     setPaused(!paused);
//     setPlayerState(newState);
// };

// const onReplay = () => {
//     videoPlayer?.current.seek(0);
//     setCurrentTime(0);
//     if (Platform.OS === 'android') {
//         setPlayerState(PLAYER_STATES.PAUSED);
//         setPaused(true);
//     } else {
//         setPlayerState(PLAYER_STATES.PLAYING);
//         setPaused(false);
//     }
// };

// const onProgress = (data) => {
//     if (!isLoading) {
//         setCurrentTime(data.currentTime);
//     }
// };

// const onLoad = (data) => {

//   videoPlayer.current.seek(0); // this will set first frame of video as thumbnail
//     setDuration(Math.round(data.duration));
//     setIsLoading(false);
// };

// const onLoadStart = () => setIsLoading(true);

// const onEnd = () => {
//     setPlayerState(PLAYER_STATES.ENDED);
//     setCurrentTime(duration);
// };


// const enterFullScreen=()=>{};

// const onFullScreen=()=>{

//  setIsFullScreen(isFullScreen)
// if(ScreenType="contain")
//  setScreenType("cover")
//  else setScreenType("contain")




// if (ScreenType == 'contain'){
//   setScreenType('cover');
// }
 
// else{
//   setScreenType('contain');
// }






// }








//   return (
//     <View   
//     //style={{alignItems:"center",top:0,position:"relative"}}
//     >
// {/* 
// <Image style={{ width:300, height: 200, }} 
//       //blurRadius={10} 
//       resizeMode='stretch' resizeMethod='resize'
//        source={require('../assets/images/logomahsa2.jpg')} />  */}
// {/* <Icon name='file-download' size={RFValue(40)} style={{ color: "#000",position:"absolute",alignSelf:"center",}} /> */}
// <Video1  
//                 onEnd={onEnd}
//               //  onError={onError}
//                 onLoad={onLoad}
//                 // onLoad={() => {
//                 //   videoPlayer.current.seek(0); // this will set first frame of video as thumbnail
//                 // }}
//                 onLoadStart={onLoadStart}
//                 posterResizeMode={'cover'}
//                 onProgress={onProgress}
//                 paused={paused}
//                 ref={(ref) => (videoPlayer.current = ref)}
//                 resizeMode={'cover'}
//               source={{uri:`${baseUrl}${imageUrl}${source}`}}
//             //  thumbnail={require('../assets/images/logomahsa2.jpg')}
//                 style={styles.backgroundVideo}
//                //source={{uri:"https://mahsaonlin.com/upload/chats/6__VIDEO__1693406577.mp4"}}
//             />
              
                
//             <MediaControls
//                 isFullScreen={false}
//                 duration={duration}
//                 isLoading={isLoading}
//                 progress={currentTime}
//                 onPaused={onPaused}
//                 onReplay={onReplay}
//                 onSeek={onSeek}
//                 onSeeking={onSeeking}
//                 mainColor={"red"}
//                 playerState={playerState}
//                 onFullScreen={onFullScreen}
                
//                 sliderStyle={{ containerStyle: {}, thumbStyle: {}, trackStyle: {} }}
//             />

  






//     </View>
//   )
// }

// export {Video}





// var styles = StyleSheet.create({
//     // backgroundVideo: {
//     //   position: 'absolute',
//     //   top: 0,
//     //   left: 0,
//     //   bottom: 0,
//     //   right: 0,
//     // },
  
  
  
  
  
//     backgroundVideo: {

      
//       height:width>576?350:height/2,
//      // width: '20%',
//      width:width>576?470:width-70,
//      // backgroundColor:"#f0f",
//      marginVertical:"10%",
//     //  borderWidth:2,
//     //  borderColor:"#00f",
     
      
      
//   },
//   mediaControls: {
//    // height:width>576?350:height/3,
//     height:350,
     
//       //alignSelf: 'center',
//   },
//   });




import { View, Text ,TouchableOpacity,StyleSheet,Image,Dimensions} from 'react-native'
import     { React,useRef,useState,useEffect} from 'react'
import Video1 from "react-native-video"
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import { baseUrl, imageUrl, videoUrl } from "../components/Addresses";
import Orientation from'react-native-orientation-locker';

import { RFValue } from 'react-native-responsive-fontsize';
import Icon from "react-native-vector-icons/MaterialIcons";

const   width=Dimensions.get("window").width;
const   height=Dimensions.get("window").height;


const Video = ({ source }) => {
  const videoPlayer = useRef(null);
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  // const [ScreenType, setScreenType] = useState("contain");
  let [ScreenType, setScreenType] = useState("contain");

 












  const onSeek = (seek) => {
    videoPlayer?.current.seek(seek);
  };

  const onSeeking = (currentVideoTime) => setCurrentTime(currentVideoTime);

  const onPaused = (newState) => {
    setPaused(!paused);
    setPlayerState(newState);
  };

  const onReplay = () => {
    videoPlayer?.current.seek(0);
    setCurrentTime(0);
    setPlayerState(PLAYER_STATES.PAUSED);
    setPaused(true);
  };

  const onProgress = (data) => {
    if (!isLoading) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = (data) => {
    videoPlayer.current.seek(0);
    setDuration(Math.round(data.duration));
    setIsLoading(false);
  };

  const onLoadStart = () => setIsLoading(true);

  const onEnd = () => {
    setPlayerState(PLAYER_STATES.ENDED);
    setCurrentTime(duration);
  };

  
  
  // const onFullScreen = () => {
  //   setIsFullScreen(!isFullScreen);
  
  //   if (ScreenType === 'contain') {
  //     setScreenType('cover');
  //   } else {
  //     setScreenType('contain');
  //   }
  // };



  const onFullScreen = () => {

    if (isFullScreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }

    setIsFullScreen(!isFullScreen);
  
    if (ScreenType === 'contain') {
      setScreenType('cover');
      // Adjust styles for full screen
      styles.backgroundVideo.height = height; // Set height to full screen
      styles.backgroundVideo.width = width;  // Set width to full screen
      styles.backgroundVideo.marginVertical = 0; // Remove vertical margin
    } else {
      setScreenType('contain');
      // Reset styles for non-full screen
      styles.backgroundVideo.height = width > 576 ? 350 : height/2;
      styles.backgroundVideo.width = width > 576 ? 470 : width - 70;
      styles.backgroundVideo.marginVertical = "10%";
    }
  };



  
  
  return (
    <View 
    //style={{flex:1}}
      >
      {/* Your other UI components here */}

      <Video1
        

        onEnd={onEnd}
                      //  onError={onError}
                        onLoad={onLoad}
                        // onLoad={() => {
                        //   videoPlayer.current.seek(0); // this will set first frame of video as thumbnail
                        // }}
                        onLoadStart={onLoadStart}
                       // posterResizeMode={'contain'}
                        onProgress={onProgress}
                        paused={paused}
                        ref={(ref) => (videoPlayer.current = ref)}
                        resizeMode={ScreenType}
                       // resizeMode={'cover'}
                      //source={{uri:`${baseUrl}${imageUrl}${source}`}}
                    //  thumbnail={require('../assets/images/logomahsa2.jpg')}
                      //  style={styles.backgroundVideo}
                       //source={{uri:"https://mahsaonlin.com/upload/chats/6__VIDEO__1693406577.mp4"}}


        source={{ uri: `${baseUrl}${imageUrl}${source}` }}
        style={styles.backgroundVideo}
      />
      
      
      
       <MediaControls
         isFullScreen={false}
                         duration={duration}
                         isLoading={isLoading}
                         progress={currentTime}
                         onPaused={onPaused}
                         onReplay={onReplay}
                         onSeek={onSeek}
                         onSeeking={onSeeking}
                         mainColor={"red"}
                         playerState={playerState}
                         onFullScreen={onFullScreen}
                       
                       sliderStyle={{ containerStyle: { }, thumbStyle: { }, trackStyle: {} }}
     
      /> 

      {/* Full-screen button */}
      <TouchableOpacity onPress={onFullScreen} style={styles.fullScreenButton}>
        <Icon name={isFullScreen ? 'fullscreen-exit' : 'fullscreen'} size={RFValue(30)} style={{ color: "#f0f" }} />
      </TouchableOpacity>
    </View>
  );
};

export { Video };

var styles = StyleSheet.create({
  backgroundVideo: {
   // ... (other styles)
    height: width > 576 ? 350 : height / 2,
    width: width > 576 ? 470 : width - 70,
    marginVertical: "10%",
  },
  fullScreenButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  // mediaControls: {
  //      // height:width>576?350:height/3,
  //       height:350,
         
  //         //alignSelf: 'center',
  //     },


  mediaPlayer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "black",
  },


});
