import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";
import CustomDrawer from "../components/CustomDrawer";
const appDrawer = createDrawerNavigator();

export default function AppRoutes(){
    return(
        <appDrawer.Navigator
            drawerContent={ (props) => <CustomDrawer {...props}/>}
            screenOptions={{
                headerShown: false,

                drawerStyle:{
                    backgroundColor: "#fff",
                    paddingTop: 20,
                },

                drawerActiveTintColor: '#fff',
                drawerActiveBackgroundColor: '#3b3bbf',

                drawerInactiveBackgroundColor: '#f0f2ff',
                drawerInactiveTintColor: '#121212'
        }}
        >
            <appDrawer.Screen
            name="Home"
            component={Home}
            />
            <appDrawer.Screen
            name="Registrar"
            component={New}
            />
            <appDrawer.Screen
            name="Perfil"
            component={Profile}
            />
        </appDrawer.Navigator>       
    );
}