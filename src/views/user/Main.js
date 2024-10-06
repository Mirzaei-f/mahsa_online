import { View, Text ,Image,StyleSheet, TouchableOpacity,Dimensions, SafeAreaView} from 'react-native'
import React from 'react'
import {pic} from "../../assets/images/ttt.jpg";

import { RFValue } from "react-native-responsive-fontsize";

import Icon2 from "react-native-vector-icons/FontAwesome";

import Icon from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

import liveimg  from "../../assets/images/live2.png";
import liveimg1 from "../../assets/images/live1.jpg";



import { useFocusEffect, useNavigation } from "@react-navigation/native";

const {width,height}=Dimensions.get("window")
import {s} from "react-native-wind";

const Main = () => {
  return (
    <View  style={[s`flex-1  bg-white `,
    //{backgroundColor:"#5221BD"}
    ]}>


<SafeAreaView 

style={[s`flex-1   `,
//{backgroundColor:"#5221BD"}
    ]} >


<View
style={[s` flex-row justify-between items-center mx-2 mt-2  `,
//{backgroundColor:"#5221BD"}
]} 
>



<View  style={[s` flex-row   items-center   `,{}]}  >    

<Icon2 name="user-circle-o" size={47} 
//color="#C79870"  
color="#91A989"   
//color="#D0C2B5"
    />

<Text       style={[s` font-medium mx-2`,{} ]}  >name</Text>

</View>

    <View  >
    <Entypo name="dots-three-vertical" size={28} 
   // color="#C79870"     
//color="#D0C2B5"
color="#91A989"   
    // style={[s`w-9 h-9 rounded-full `,  ]} 
      />

    </View>








</View>



<View style={[s`mt-6 px-2 my-2 `,{flexWrap: "wrap", width:width,flexDirection:"row",justifyContent:"space-around",marginBottom:10}]}>



<TouchableOpacity style={[s` p-4 px-5  mr-2  mt-10  items-center `,{


width:"40%",
height:width/3,

    borderRadius:40,
    backgroundColor:"#D0C2B5",
    //backgroundColor:"#DFDCD7",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    
    elevation: 22,

}]} >


<Image source={liveimg}    style={[s`h-20 w-20   rounded-full`,{

marginTop:-43


}]} />
    <Text  style={[s`font-semibold mt-5`,{color:"#000", fontSize:RFValue(14)}]}>لیست فاکتورها 
        
    </Text>
</TouchableOpacity>


<TouchableOpacity style={[s` p-4 px-5  mr-2  mt-10  items-center `,{


width:"40%",
height:width/3,

    borderRadius:40,
   backgroundColor:"#D0C2B5",
  // backgroundColor:"#DFDCD7",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    
    elevation: 22,

}]} >


<Image source={liveimg}    style={[s`h-20 w-20   rounded-full`,{

marginTop:-43


}]} />
    <Text  style={[s`font-semibold mt-5`,{color:"#000", fontSize:RFValue(14)}]}>لیست فاکتورها 
        
    </Text>
</TouchableOpacity>


<TouchableOpacity style={[s` p-4 px-5  mr-2  mt-10  items-center `,{


width:"40%",
height:width/3,

    borderRadius:40,
backgroundColor:"#D0C2B5",
//backgroundColor:"#DFDCD7",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    
    elevation: 22,

}]} >


<Image source={liveimg}    style={[s`h-20 w-20   rounded-full`,{

marginTop:-43


}]} />
    <Text  style={[s`font-semibold mt-5`,{color:"#000", fontSize:RFValue(14)}]}>لیست فاکتورها 
        
    </Text>
</TouchableOpacity>
<TouchableOpacity style={[s` p-4 px-5  mr-2  mt-10  items-center `,{


width:"40%",
height:width/3,

    borderRadius:40,
   backgroundColor:"#D0C2B5",
  // backgroundColor:"#DFDCD7",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    
    elevation: 22,

}]} >


<Image source={liveimg}    style={[s`h-20 w-20   rounded-full`,{

marginTop:-43


}]} />
    <Text  style={[s`font-semibold mt-5`,{color:"#000", fontSize:RFValue(14)}]}>لیست فاکتورها 
        
    </Text>
</TouchableOpacity>

</View>










<View style={[s`mt-10  px-5 flex-row `,{ alignSelf:"center"

}]}>

<TouchableOpacity style={[s` p-4 px-5 w-32 mr-2   items-center `,{
    
//backgroundColor: "#B78E67",
//backgroundColor: "rgba(195, 243, 247, 0.8)",
//backgroundColor:"#C9CEB9",
//backgroundColor:"#DFDCD7",
//backgroundColor:"#D0C2B5",
backgroundColor:"#91A989",

borderRadius:40,
width:250,height:290,

shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    
    elevation: 22,

}]} >

{/* <View  style={[s`flex-row justify-center -mt-34`,{

shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height:10,
      },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      
     elevation: 2,



}]}> */}
{/* <Image source={liveimg}    style={[s`h-40 w-40   rounded-full`,{

marginTop:-93


}]} /> */}
{/* </View> */}

    <Text  style={[s`font-semibold text-2xl  mt-4`,{
        //color:"#fff",
}]}>دوره آنالیز آذر

        
    </Text>

<View     style={{flexDirection:"row-reverse" , justifyContent:"space-between", marginTop:40}}>    
<Text  style={[s`mt-4 mx-6`,{color:"#807F7D",fontWeight:"bold", fontSize:RFValue(14)}]}>شروع ثبت نام
        
        </Text>
        <Text  style={[s`mt-4`,{color:"#807F7D",fontWeight:"bold", fontSize:RFValue(14)}]}>1402/08/12
        
        </Text>


</View>
   



<View     style={{flexDirection:"row-reverse" , justifyContent:"space-between"}}>    
<Text  style={[s`mt-4 mx-6`,{color:"#807F7D",fontWeight:"bold", fontSize:RFValue(14)}]}>پایان ثبت نام
        
        </Text>
        <Text  style={[s`mt-4`,{color:"#807F7D",fontWeight:"bold", fontSize:RFValue(14)}]}>1402/08/12
        
        </Text>


</View>

<TouchableOpacity style={{backgroundColor:"#A46433", width:width/3,marginVertical:30,paddingVertical:20,alignItems:"center",borderRadius:50}}>

    <Text    style={[,{color:"#fff",fontWeight:"bold", fontSize:RFValue(14)}]}>ثبت نام دوره </Text>
</TouchableOpacity>
        
</TouchableOpacity>

</View> 




    </SafeAreaView>


    



{/* */}
    </View>
  )
}

export { Main}