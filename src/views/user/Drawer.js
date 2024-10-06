import React, {useContext, useEffect, useRef, useState} from "react";
import {Text, View, TouchableOpacity, StyleSheet, Image, Dimensions, BackHandler,Animated,Easing, ScrollView} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {RFValue} from "react-native-responsive-fontsize";
import { Context } from "../../components/Context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import { List } from 'react-native-paper';

import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { s } from "react-native-wind";
const   width=Dimensions.get("window").width;
const   height=Dimensions.get("window").height;

const Drawerpage = () => {

    const {auth, setauth} = useContext(Context)
    const navigation=useNavigation()
  





    return (
        <View style={styles.container}>
<View    style={{backgroundColor:"#5220BD" , height:width>576?"30%":"20%",alignItems:"flex-end",justifyContent:"space-around",paddingHorizontal:30}}>

<FontAwesome style={[s` mt-3 ` ,{
       // paddingHorizontal: 15,
       //margiginRight:"3%",
    } ]} name="user-circle-o" size={width>576?45:55} color="#fff" />


<Text style={{color:"#fff",fontWeight:"bold",fontSize:RFValue(22)}}>مهسا آنلاین </Text>
</View>









{/*  */}


<ScrollView>


<TouchableOpacity style={styles.option} onPress={() =>   navigation.navigate("user",{screen:"dashboard"})}>
    <Text style={styles.texoption}>
داشبورد    </Text>
    <Icon name={'home'} size={RFValue(28)} color={"#5220BD"} style={{margin:'6%',alignSelf:'flex-end'}}/>
</TouchableOpacity>








{/*  */}





<TouchableOpacity style={styles.option} onPress={() => { navigation.navigate('user',{screen:'package'})


}}>
    <Text style={styles.texoption}>
پکیج ها </Text>
    <Feather name={'package'} size={RFValue(28)} color={"#5220BD"} style={{margin:'6%',alignSelf:'flex-end'}}/>
</TouchableOpacity>




{/*  */}



{/* 

<TouchableOpacity style={styles.option} onPress={() => { navigation.navigate('guest',{screen:'login'})


}}>
    <Text style={styles.texoption}>
مقالات</Text>
    <Icon name={'article'} size={RFValue(28)} color={"#5220BD"} style={{margin:'6%',alignSelf:'flex-end'}}/>
</TouchableOpacity>
 */}



{/*  */}





<TouchableOpacity style={styles.option} onPress={()=>navigation.navigate("user",{screen:'contactus'})}>
    <Text style={styles.texoption}>
تماس با ما 
</Text>
    <Icon name={'quick-contacts-dialer'} size={RFValue(28)} color={"#5220BD"} style={{margin:'6%',alignSelf:'flex-end'}}/>
</TouchableOpacity>


{/*  */}





<TouchableOpacity style={styles.option} onPress={()=>navigation.navigate("user",{screen:'aboutus'})}>
    <Text style={styles.texoption}>
درباره ما 
</Text>
    <FontAwesome5 name={'users'} size={RFValue(28)} color={"#5220BD"} style={{margin:'6%',alignSelf:'flex-end'}}/>
</TouchableOpacity>



{/*  */}





<TouchableOpacity style={styles.option} onPress={()=>navigation.navigate("user",{screen:'sugestiontitle'})}


>
    <Text style={styles.texoption}>
راهنما
</Text>
    <FontAwesome5  name={'info-circle'} size={RFValue(28)} color={"#5220BD"} style={{margin:'6%',alignSelf:'flex-end'}}/>
</TouchableOpacity>




{/*  */}



{/* 

<TouchableOpacity style={styles.option} onPress={() => { navigation.navigate('guest',{screen:'login'})


}}>
    <Text style={styles.texoption}>
دانلود اپلیکیشن
</Text>
    <Icon name={'phone-android'} size={RFValue(28)} color={"#5220BD"} style={{margin:'6%',alignSelf:'flex-end'}}/>
</TouchableOpacity>
 */}










{/*  */}

<TouchableOpacity style={styles.option} onPress={() => {

AsyncStorage.removeItem('auth').then(() => {

    setauth('')

    navigation.navigate('guest',{screen:'login'})

})

}}>
    <Text style={styles.texoption}>خروج از حساب</Text>
    <Icon name={'exit-to-app'} size={RFValue(28)} color={"#5220BD"} style={{margin:'6%',alignSelf:'flex-end'}}/>
</TouchableOpacity>





</ScrollView>




        </View>
    )
}

export {Drawerpage}




const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5F5F5'
    },
    head:{
        backgroundColor: '#5220BD',

    },
profile:{
color:'white',
fontSize:RFValue(18),
margin:'4%'


},
option:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
alignSelf:'flex-end'
}
,texoption:{
    fontSize:RFValue(18),
    color:"gray"
},
line: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: "#662d5c",
    alignSelf: 'center',
    height: 0,
},
touchText:{
 //fontWeight:"bold",
 fontSize:RFValue(15)
   // color:"#000"
},
touchable:{
    flexDirection:"row-reverse",
    justifyContent:"space-between",
    paddingHorizontal:20,
    
    paddingVertical:20,
},
fontSize:{
    fontSize:RFValue(14)
},

fontSize1:{
    fontSize:RFValue(14),
    marginBottom:25
},
})


