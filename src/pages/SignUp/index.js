import { React, useContext, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Platform } from "react-native";
import { AuthContext } from "../../contexts/auth";

import { Background, 
    Container,
     AreaInput, 
     Input, 
     SubmitButton, 
     SubmitText 
} from "../SignIn/styles";


export default function SignUp(){

    const { signUp, loadingAuth } = useContext(AuthContext);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function hadleSignUp() {

        if (nome === '' || password === '' || email === '') return;

        signUp(email, password, nome);
    }

    return(
    <Background>
        <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
        >
            <AreaInput>
                <Input
                    placeholder="Nome"
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                />
            </AreaInput>

            <AreaInput>
                <Input
                    placeholder="Seu Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
            </AreaInput>

            <AreaInput>
                <Input
                    placeholder="Sua Senha"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
            </AreaInput>

            <SubmitButton 
            activeOpacity={0.8}
            onPress={hadleSignUp}
            >
                {
                    loadingAuth ? (
                        <ActivityIndicator size={20} color={'#fff'}/>
                    ) :(
                        <SubmitText>Cadastrar</SubmitText>
                    )

                }
            </SubmitButton>

        </Container>
    </Background>
    );
}