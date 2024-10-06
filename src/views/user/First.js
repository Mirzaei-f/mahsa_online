import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { pic } from "../../assets/images/ttt.jpg";
import logomain from "../../assets/images/mahsaimg.jpg";
import { RFValue } from "react-native-responsive-fontsize";

import Icon2 from "react-native-vector-icons/FontAwesome";

import Icon from "react-native-vector-icons/MaterialIcons";


import { useFocusEffect, useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window")

const First = () => {

  const navigation = useNavigation()



      return (
    <View style={styles.container}>

                  <StatusBar backgroundColor="#91A989" barStyle="light-content" />
      {/* header */}
          <View style={styles.header}>
                  <TouchableOpacity onPress={() => navigation.navigate("main")} style={styles.btnheader}>
                       <Text style={styles.txtheader}   > بیخیال </Text>
                            <Icon style={{ padding: 5, }} name="keyboard-arrow-right" size={19} color="#556b2f" />
                    </TouchableOpacity>
      </View>

      {/* body */}
      <View style={styles.body}>
               <View style={styles.subbody}>
                       <Text style={styles.txtsub1}>با مهسا آنلاین همیشه و همه جا ورزش کنید </Text>
                     <Text style={styles.txtsub2}>همه چیز به خودت بستگی داره زندگی خودت رو بساز بدنت رو بساز خودت رو بساز </Text>
               </View>
      </View>





      {/* btn  */}
      <View style={styles.btncontainer}>
              <TouchableOpacity style={styles.btnlogin}>
                             <Text style={styles.txtlogin}> ورود </Text>
                  </TouchableOpacity>

            <TouchableOpacity style={styles.btnregister}>
                      <Text style={styles.txtregister} > ثبت نام </Text>
        </TouchableOpacity>
      </View>


      {/* footer */}
      <View style={styles.footer}>




        
      </View>



    </View>
  )
}

export { First }


styles = StyleSheet.create({

  container: {
    backgroundColor: "#FFF",
    flex: 1
  },
  header: {
    flex: 1,
    alignItems: "flex-end",
    top: 5
  },

  btnheader: {
    //backgroundColor:"#EEBA84",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

  },


  txtheader: {
    //color:"#B78E67",
    // color:"#556b2f",
    // color:"#2D3919",
    color: "#2D3919",
    fontSize: RFValue(18),
  },

  body: {
    flex: width > 537 ? 1 : 3,

    //backgroundColor:"#f0f",

    alignItems: "center",
    justifyContent: "center",

  },

  subbody: {

    flex: 1,
    width: width > 537 ? width : width / 1.2,
    //backgroundColor:"#0f0",

    justifyContent: "flex-end",


  },
  txtsub1: {
    color: "#000",
    fontWeight: "bold",
    fontSize: RFValue(20),
    alignSelf: "center"
  },

  txtsub2: {
    color: "#2D3919",
    width: width < 537 ? width / 1.3 : null,
    fontSize: RFValue(14),
    alignSelf: "center",
    marginTop: 6
  },


  btncontainer: {
    flex: 2,
    //backgroundColor:"#ff0",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },


  btnlogin: {
    //  backgroundColor:"rgba(0,0,0,0.05)",
    //backgroundColor:"#A98B73",
    //  backgroundColor:"rgba(164, 235, 241, 0.8)",
    //backgroundColor:"rgba(195, 243, 247, 0.8)",
    // backgroundColor:"#fff",
    // width:"40%",height:"50%",
    padding: width > 537 ? height / 10 : width / 9,
    marginHorizontal: 10,
    borderRadius: 20, alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    //borderColor:"#B78E67",
    borderColor: "#91A989",
    //borderColor:"#D0C2B5",

  },


  btnregister: {
    backgroundColor: "#91A989",
    // backgroundColor:"#D0C2B5",
    // backgroundColor:"#A98B73",



    padding: width > 537 ? height / 10 : width / 9,
    marginHorizontal: 10,
    borderRadius: 20, alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,

  },

  txtregister: {
    color: "#FFF",
    fontSize: RFValue(22),
  },

  txtlogin: {
    color: "#000", fontSize: RFValue(22),
    // backgroundColor:"rgba(1,0,0,0.05)",
  },
  footer: {
    flex: width > 537 ? 0.5 : 1,
  },
})