import React, {useContext} from "react";
import { View, Text, Image } from "react-native";

import { DrawerItemList, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { AuthContext } from "../../contexts/auth";

export default function CustomDrawer(props) {

    const { user, signOut } = useContext(AuthContext);

    return(
        <DrawerContentScrollView>
            <View 
            style={{alignItems: 'center', justifyContent: 'center', marginTop: 25, marginBottom: 15}}
            >
                <Image 
                source={require('../../assets/Logo.png')}
                style={{width: 90, height: 90}}
                resizeMode="contain"
                />

                <Text style={{fontSize: 18}}>Bem-Vindo</Text>

                <Text 
                style={{fontSize: 17, fontWeight: 'bold', marginBottom: 14, paddingHorizontal: 20}}
                numberOfLines={1}
                >
                    {user && user.name}
                </Text>

            </View>

            <DrawerItemList {...props}/>

            <DrawerItem {...props}
            label='Sair'
            onPress={signOut}
            inactiveBackgroundColor='#F0F2FF'
            inactiveTintColor='#121212'
            />

        </DrawerContentScrollView>
    );
}