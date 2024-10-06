import { ActivityIndicator, Dimensions, Image, ImageBackground, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
//import { isSet } from '../../Components/Common'
import { useNavigation } from '@react-navigation/native'
import { windowHeight, windowWidth } from '../../components/Dimensions'
import Video from 'react-native-video'
import { Black, Blue, Gray, White, WhiteSmoke } from "../../components/Color"
import { RFValue } from 'react-native-responsive-fontsize';
import { BallIndicator } from 'react-native-indicators'


const Playsavedvideo = ({inputUrl}) => {
console.log("inputUrl",inputUrl)
    const { height } = useWindowDimensions();
    const { navigate, replace } = useNavigation();
    const [opacity, setOpacity] = useState({
        indicator: false,
        button: 0
    })


    const onLoadStart = () => {
        setOpacity(pro => ({
            ...pro,
            indicator: true,
            button: 0
        }));
    }

    const onLoad = () => {
        setOpacity(pro => ({
            ...pro,
            indicator: false,
            button: 1
        }));
    }

    const onBuffer = ({ isBuffering }) => {
        setOpacity(pro => ({
            ...pro,
            indicator: isBuffering ? 1 : 0
        }));
    }

    return (
        <View style={{ flex: 1 }}>
            
                        <Video
                            source={{ uri:inputUrl }}
                            resizeMode='stretch'
                            poster='https://www.google.com/imgres?imgurl=https%3A%2F%2Fs.cafebazaar.ir%2Fimages%2Ficons%2Fcom.recorder.music.bstech.videoplayer-7d1f6203-2f2e-415c-a642-003420ef38d6_512x512.webp&tbnid=iKs8rEWA8esBbM&vet=12ahUKEwicyKeW4Z2DAxWlAvsDHVhTBSQQMyggegQIARB-..i&imgrefurl=https%3A%2F%2Fcafebazaar.ir%2Fapp%2Fcom.aliafzal.videoplayer&docid=F9gcwgq_tM-0aM&w=512&h=512&q=%20%D9%BE%D8%AE%D8%B4%20%D9%88%DB%8C%D8%AF%DB%8C%D9%88%D8%B9%DA%A9%D8%B3&ved=2ahUKEwicyKeW4Z2DAxWlAvsDHVhTBSQQMyggegQIARB-'
                            posterResizeMode='stretch'
                            disableDisconnectError={true}
                            controls={true}
                            onBuffer={onBuffer}
                            onLoadStart={onLoadStart}
                            onLoad={onLoad}
                            style={styles.backgroundVideo}
                        />
                        {
                            opacity.indicator &&
                            <BallIndicator
                                size={50}
                                color={Blue}
                            />
                        }
                        <Text
                            style={[styles.backButton, { opacity: opacity.button }]}
                           // onPress={() => { replace('user', { screen: 'LiveStreaming' }) }}
                        >لیست کلاس های ذخیره شده</Text>
                 
     

        </View>
    )
}

export {Playsavedvideo}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    backButton: {
        position: 'absolute', backgroundColor: Blue, margin: 10, borderRadius: 20, padding: 15,
        color: White, fontSize: RFValue(12)
    },
    activityIndicator: {
        position: 'absolute'
    }
})
