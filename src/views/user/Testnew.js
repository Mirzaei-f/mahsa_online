
import React, {useState,useContext,useEffect} from 'react';
import {ActivityIndicator, Dimensions,FlatList,Image,ImageBackground, StyleSheet,Text,TextInput,TouchableOpacity,View, BackHandler, ScrollView } from "react-native";
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

import {Video } from '../../components/Video';
const   width=Dimensions.get("window").width;
const   height=Dimensions.get("window").height;

//import toturial from "../assets/images/toturial.jpg"
import movie from "../../assets/images/movie.mp4"



const Testnew = () => {
  return (
    <View>
      <Text>Testnew</Text>



      
<Video

///source={movie}

//source={{uri:"https://mahsaonlin.com/upload/chats/6__VIDEO__1693406577.mp4"}}


source={{uri:"https://www.w3schools.com/html/mov_bbb.mp4"}}
/>

    </View>
  )
}

export { Testnew}