import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #F0F4FF;
    align-items: center;

`;

export const Message = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: 24px;
`;

export const Name = styled.Text`
    font-size: 24px;
    color: #121212;
    margin-top: 8px;
    margin-bottom: 24px;
    padding: 0 14px;
`;

export const NewText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
`;

export const NewLink = styled.TouchableOpacity`
    background-color: #3b3dbf;
    width: 90%;
    height: 45px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
`;
export const LogoutText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #c62c36;
`;

export const LogoutButton = styled.TouchableOpacity`
    border-color: #c62c36;
    border-width: 1px;
    width: 90%;
    height: 45px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
`;