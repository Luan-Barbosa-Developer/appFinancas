import  React, {useState, useContext } from "react";
import { ActivityIndicator } from "react-native";
import { Platform } from "react-native";
import { AuthContext } from "../../contexts/auth";


import { 
    Background, 
    Container, 
    Logo, 
    Input, 
    AreaInput,
    SubmitButton,
    SubmitText,
    LinkText, 
    LinkButton
 } from "./styles";

 import { useNavigation } from "@react-navigation/native";

export default function SignIn(){

    const navigation = useNavigation();
    const {signIn, loadingAuth} = useContext(AuthContext);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        signIn(email, password);
    }

    return(
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Logo
                source={require('../../assets/Logo.png')}
                />

                <AreaInput>
                    <Input
                        placeholder='Seu email'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Sua senha'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.8}
                onPress={handleLogin}
                
                >
                {
                    loadingAuth ? (
                        <ActivityIndicator size={20} color={'#fff'}/>
                    ) :(
                        <SubmitText>Acessar</SubmitText>
                    )

                }

                </SubmitButton>

                <LinkButton 
                    onPress={() => navigation.navigate('SignUp')}
                >
                        <LinkText> Criar uma conta</LinkText>
                </LinkButton>
            </Container>
        </Background>
    );
}