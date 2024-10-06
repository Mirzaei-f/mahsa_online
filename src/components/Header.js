







import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { RFValue } from "react-native-responsive-fontsize";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";



const Header = () => {
  return (
    <View style={{flex:1,flexDirection:"row",}}>
        <TouchableOpacity>
        <FontAwesome style={{ padding: 5, }} name="user-circle-o" size={19} color="#4D1BB8" />
        </TouchableOpacity>
  
        {/* <FontAwesome style={{ padding: 5, }} name="bars" size={19} color="#556b2f" /> */}
      
    </View>
  )
}

export  {Header}