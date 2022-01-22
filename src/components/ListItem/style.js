import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const ListItemContainer = styled.View`
    padding: 0 20px;
    margin-top: 20px;
`;

export const ListItemInner = styled.TouchableWithoutFeedback`
top: 100px;
`;

export const ListInnerContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #393939;
`;

export const BotaoDelete = styled.TouchableOpacity`
    width: 80px;
    height: 100%;
    background-color: #F34749
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    align-items: center ;
    justify-content: center;
`;

export const BotaoEdit = styled.TouchableOpacity`
width: 80px;
height: 100%;
    background-color: #ED8554;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    align-items: center ;
    justify-content: center;
`;

export const Infos = styled.View``; 

export const Nome = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`; 

export const InfoText = styled.Text`
    font-size: 14px;
    color: #fff;
`; 

export const CheckArea = styled.View``; 

export const CheckButton = styled.View`
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: ${props => props.done == true ? '#D3e23a' : '#C4C4C4'};
`;