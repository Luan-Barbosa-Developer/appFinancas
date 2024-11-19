import React from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes(params) {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
            name="SignIn" 
            component={SignIn} 
            options={{
                headerShown: false,
            }}
            />
            
            <AuthStack.Screen 
            name="SignUp" 
            component={SignUp}
            options={{
                headerStyle:{
                    backgroundColor: '#3b3dbf',
                    borderBottomWich: 1,
                    borderBottomColor: '#00b94a'
                },
                headerTintColor: '#fff',
                headerTitle: 'Voltar',
                headerBackTitleVisible: false
            }}
            />
        </AuthStack.Navigator>
    );
}

