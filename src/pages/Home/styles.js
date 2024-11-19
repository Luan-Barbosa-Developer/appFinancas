import styled from "styled-components";

export const Background = styled.SafeAreaView`
    flex: 1;
    background-color: #f0f0ff;
    
`;

export const ListBalance = styled.FlatList`
    max-height: 190px;
`;

export const Area = styled.View`
    background-color: #fff;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    flex-direction: row;
    margin-top: 8px;
    padding-left: 14px;
    padding-top: 14px;
    padding-right: 14px;
    align-items: baseline;
`;

export const Title = styled.Text`
    margin-left: 4px;
    margin-bottom: 14px;
    color: #121212;
    font-weight: bold;
    font-size: 19px;
`;

export const List = styled.FlatList`
    flex: 1;
    background-color: #FFF;
`;
