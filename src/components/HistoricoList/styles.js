import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #F0F4FF;
    border-radius: 4px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 14px;
    padding: 12px;
`;

export const IconView = styled.View`
    flex-direction: row;
    background-color: ${props => props.type === 'despesa' ? '#ef463a' : '#00B94A'};
    padding-bottom: 4px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 8px;
    border-radius: 4px;
    margin-bottom: 2px;
`;

export const Tipo = styled.View`
    flex-direction: row;
    font-size: 16px;
    font-style: italic;
`;

export const TipoText = styled.Text`
    color: #FFF;
    font-size: 18px;
`;

export const ValorText = styled.Text`
    font-size: 23px;
    font-weight: bold;
`;

