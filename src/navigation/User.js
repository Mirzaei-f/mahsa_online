import React from "react";
import {Text, View,SafeAreaView} from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Paneluser} from "../views/user/Paneluser";
import {createDrawerNavigator} from "@react-navigation/drawer";
import { Drawerpage } from "../views/user/Drawer";
import { Live } from "../views/user/Live";
import { Test } from "../views/user/Test";
import { Sugestiontitle } from "../views/user/Sugestiontitle";
import { Messanger } from "../views/user/Messanger";
import {Question} from "../views/user/Question";
import {Aboutus} from "../views/user/Aboutus";
import { Contactus } from "../views/user/Contactus";
import {TicketList } from "../views/user/TicketList";
import {Ticket}  from "../views/user/Ticket"
import { Packagescreen } from "../views/user/Packagescreen";
import { Answer } from "../views/user/Answer";
import { Shopping } from "../views/user/Shopping";
import { Testnew} from "../views/user/Testnew";
import {Diet} from "../views/user/Diet";
import {Factors} from "../views/user/Factors"
import {Livesaved} from "../views/user/Livesaved"
import {Livesections} from "../views/user/Livesections"
import {Playsavedvideo} from "../views/user/Playsavedvideo"
import { UploadFiles } from "../components/UploadFiles";
import { Subdiet  } from "../components/Subdiet";
import { Package } from "../components/Package";
import { Questionsdiet} from "../components/Questionsdiet";
import { Q1} from "../components/Q1";


import { Dashboard } from "../views/user/Dashboard";
const Drawer=createDrawerNavigator()

const Stack=createNativeStackNavigator()

const User=()=>{

    return(
        <Drawer.Navigator  
       // initialRouteName={'callmahsapage'} 
        screenOptions={{headerShown: false,drawerPosition: 'right'}} drawerContent={()=><Drawerpage/>}>
    

 

             <Drawer.Screen  options={{ unmountOnBlur: true }} name={'paneluser'} component={Paneluser}/> 
             
             <Drawer.Screen  
             //options={{ unmountOnBlur: true }}
              name={'dashboard'} component={Dashboard}/> 
            <Drawer.Screen options={{ unmountOnBlur: true }} name={'live'} component={Live}/>
          
            <Drawer.Screen name={'test'} component={Test}/>
            <Drawer.Screen name={'uploadfiles'} component={UploadFiles}/>
            <Drawer.Screen   options={{ unmountOnBlur: true }}  name={'sugestiontitle'} component={Sugestiontitle}/>
            <Drawer.Screen  options={{ unmountOnBlur: true }} name={'contactus'} component={Contactus}/>
            <Drawer.Screen options={{ unmountOnBlur: true }} name={'aboutus'} component={Aboutus}/>
            <Drawer.Screen  options={{ unmountOnBlur: true }} name={'messanger'} component={ Messanger }/>
            <Drawer.Screen options={{ unmountOnBlur: true }} name={'question'} component={Question}/>
            <Drawer.Screen   options={{ unmountOnBlur: true }}   name={'packagescreen'} component={ Packagescreen }/>
            <Drawer.Screen name={'answer'} component={ Answer }/>
            <Drawer.Screen name={'shopping'} component={ Shopping }/>
            <Drawer.Screen name={'testnew'} component={ Testnew }/>
            <Drawer.Screen   options={{ unmountOnBlur: true }}  name={'diet'} component={ Diet }/>
            <Drawer.Screen         options={{ unmountOnBlur: true }}        name={'subdiet '} component={ Subdiet  }/>
            <Drawer.Screen     options={{ unmountOnBlur: true }}    name={'ticketlist'} component={TicketList}/>
            <Drawer.Screen     options={{ unmountOnBlur: true }}    name={'package'} component={Package}/>
            <Drawer.Screen     options={{ unmountOnBlur: true }}    name={'factors'} component={Factors}/>
            <Drawer.Screen     options={{ unmountOnBlur: true }}    name={'livesections'} component={Livesections}/>
            <Drawer.Screen     options={{ unmountOnBlur: true }}    name={'livesaved'} component={Livesaved}/>
            <Drawer.Screen     options={{ unmountOnBlur: true }}    name={'playsavedvideo'} component={Playsavedvideo}/>
            <Drawer.Screen     options={{ unmountOnBlur: true }}    name={'questionsdiet'} component={Questionsdiet}/>
            <Drawer.Screen     options={{ unmountOnBlur: true }}    name={'q1'} component={Q1}/>
          
            <Stack.Screen     options={{ unmountOnBlur: true }}   name={'ticket'} component={Ticket}/>
        </Drawer.Navigator>
    )
}

export {User}
