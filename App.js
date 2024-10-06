// import { View, Text } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App





// import { View,Image,TouchableOpacity,Dimensions, Text } from 'react-native'
// import React, { useState } from 'react';
//  import { NavigationContainer } from '@react-navigation/native';
//  import { createDrawerNavigator } from '@react-navigation/drawer';
//  //import { createNativeStackNavigator } from '@react-navigation/native-stack';
//  import { Login, Code, T2, T1, Splash } from './screens/Index';
//  import Apptimestamp from './screens/timestamp/Apptimestamp';
//  import Food from './screens/Signupfolder/Food';
// import Apptimestamp2 from './screens/timestamp/Apptimestamp2';
// import Paper from './screens/MAHSA/Paper';
// import TrainAnimated from "./screens/Signupfolder/TrainAnimated"
// import Profile from './screens/timestamp/Profile';
//  import Context from './screens/Signupfolder/Context';
//  import DrawerContent from "./screens/timestamp/DrawerContent";
//  import Edit from './screens/Signupfolder/Edit';
//  import Edit2 from './screens/Signupfolder/Edit2';
//  import SignupMahsa from './screens/SignupMahsa';
//  const Drawer=createDrawerNavigator();
//  import 'react-native-gesture-handler';
//  //const Stack = createNativeStackNavigator();
// const App = () => {
//   const [auth, setAuth] = useState('Ali');
//   const [phone, setphone] = useState();
  

//   const Data = {

//     auth: auth,
//     setauth: (value) => { setAuth(value) },
//     phone:phone,
//     setphone: (value) => { setphone(value) },
    
   
//   };
//   return (
//     <NavigationContainer >
//         <Context.Provider value={Data}>
        
//           <Drawer.Navigator headerMode={false} 
//           initialRouteName={'Splash'} 
//           screenOptions={{drawerPosition:'right',}}
//           drawerContent={props=><DrawerContent {...props}/>}
//           >
         
         


//          <Drawer.Screen
//                 name="SignupMahsa"
//                 component={SignupMahsa}
//                // options={{ title: 'Welcome ' }}
//                 options={{headerShown:false}}
//             />


//          <Drawer.Screen
//                 name="Splash"
//                 component={Splash}
//                // options={{ title: 'Welcome ' }}
//                 options={{headerShown:false}}
//             />
            
//             <Drawer.Screen
//                 name="Edit2"
//                 component={Edit2}
//                // options={{ title: 'Welcome ' }}
//                 options={{headerShown:false,swipeEnabled:false}}
                
//             />


//              <Drawer.Screen
//                 name="Edit"
//                 component={Edit}
//                // options={{ title: 'Welcome ' }}
//                 options={{headerShown:false}}
//             />

// <Drawer.Screen
//                 name="Profile"
//                 component={Profile}
//                // options={{ title: 'Welcome ' }}
//                 options={{headerShown:false,swipeEnabled:false}}
//             />
//          <Drawer.Screen
//                 name="Paper"
//                 component={Paper}
//                // options={{ title: 'Welcome ' }}
//                 options={{headerShown:false}}
//             />
         
        
//           {/* <Stack.Screen
//                 name="  TrainAnimated "
//                 component={  TrainAnimated }
//                // options={{ title: 'Welcome ' }}
//                 options={{headerShown:false}}
//             /> */}
         
         
         
         
//             <Drawer.Screen
//                 name="Login"
//                 component={Login}
//                // options={{ title: 'Welcome ' }}
//                options={{headerShown:false,swipeEnabled:false}}
//             />
//             <Drawer.Screen
//                 name="Code"
//                 component={Code}
//                // options={{ title: 'Welcome ' }}
//                options={{headerShown:false,swipeEnabled:false}}
//             />
//              <Drawer.Screen
//                 name="T2"
//                 component={T2}
//               //  options={{ title: 'Welcome ' }}
//               options={{headerShown:false}}
//             />
//             <Drawer.Screen
//                 name="Apptimestamp"
//                 component={Apptimestamp }
//               //  options={{ title: 'Welcome ' }}
//               options={{headerShown:false,swipeEnabled:false}}
//             />
// <Drawer.Screen
//                 name="Food"
//                 component={Food }
//                // options={{ title: 'Welcome ' }}
//                options={{headerShown:false}}
//             />

// <Drawer.Screen
//                 name="Apptimestamp2"
//                 component={Apptimestamp2}
//                // options={{ title: 'Welcome ' }}
//                options={{headerShown:false,swipeEnabled:false}}
//             />

// </Drawer.Navigator>
//       </Context.Provider>
//     </NavigationContainer>
//   )
// }

// export default App




//////////////////////////////



import React, {useContext, useEffect, useState} from "react";
import {View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {User} from "./src/navigation/User";
import { Context } from "./src/components/Context";
import { Guest } from "./src/navigation/guest";
import 'react-native-gesture-handler';
///import 'react-native-reanimated'
import 'react-native-gesture-handler'

//import { Metrix } from "@metrixorg/react-native-plugin";




const Stack = createNativeStackNavigator()

const App = () => {
/////////////////////////////////////////////////


// useEffect(() => {
//     const sessionIdListener = (sessionId) => {
//       // این بخش اجرا می‌شود هر زمان که شناسه جلسه تغییر کند
//       console.log('Session ID changed:', sessionId);
//       // TODO: انجام عملیات مورد نظر بر اساس تغییرات در شناسه جلسه
//     };

//     // افزودن شنونده
//     Metrix.setSessionIdListener(sessionIdListener);

//     // در زمان عدم نیاز به شنونده (مثلاً در زمان خروج از صفحه)
//     return () => {
//       // حذف شنونده
//       Metrix.setSessionIdListener(null);
//     };
//   }, []); // تغییرات در این افکت صرفا در زمان نخستین رندر اعمال می‌شود

//////////////////////////////////////////////////////////////////////////
// useEffect(() => {
//     const metrixUserIdListener = metrixUserId => {
//       console.log('Metrix User ID:', metrixUserId);
//       // TODO: Add your logic here to handle the Metrix user ID
//     };

//     // Set up the Metrix user ID listener
//     Metrix.setUserIdListener(metrixUserIdListener);

//     // Start the Metrix SDK
//     // Metrix.start();

//     // Clean up the listener when the component unmounts
//     return () => {
//       Metrix.removeUserIdListener(metrixUserIdListener);
//     };
//   }, []); // The empty dependency array ensures that this effect runs only once on mount



/////////////////////////////////////////////

    const [phone,setphone]=useState('')
    const [auth,setauth]=useState('')
    const [reload,setreload]=useState()
    const [name,setname]=useState('')
    const [lastname,setlastname]=useState('')


    const data={
        phone:phone,
        setphone:(value)=>{setphone(value)},
        auth:auth,
        setauth:(value)=>{setauth(value)},
        reload:reload,
        setreload:(value)=>{setreload(value)},
        name:name,
        setname:(value)=>{setname(value)},

        lastname:lastname,
        setlastname:(value)=>{setlastname(value)},
    }

////////////////////////////pushnotification///////////////////////////////////////////////////////


////////appid//////////////coogolvdzrzmpch


/////////////////////////////////////////////////////////////////////////////////////////////////

    return (

        <Context.Provider value={data}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'guest'} screenOptions={{headerShown:false}}>

                    <Stack.Screen name='user' component={User}/>

                    <Stack.Screen name='guest' component={Guest}/>


                </Stack.Navigator>

            </NavigationContainer>
        </Context.Provider>
    )
}

export default App









