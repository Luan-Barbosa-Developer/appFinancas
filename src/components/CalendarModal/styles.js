import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    background-color: rgba(34, 34, 34, 0.4);
`;

export const ModalContent = styled.View`
    flex: 2;
    justify-content: center;
    background-color: #FFF;
    padding: 14px;
`;

export const ButtomFilterText = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
`;

export const ButtomFilter = styled.TouchableOpacity`
    border-radius: 4px;
    background-color: #3b3dbf;
    height: 45px;
    align-items: center;
    justify-content: center;
`;