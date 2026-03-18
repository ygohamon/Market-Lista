import styled from 'styled-components/native';

export const ListItemContainer = styled.View`
    padding: 0 16px;
    margin-top: 10px;
`;

export const ListItemInner = styled.TouchableWithoutFeedback``;

export const ListInnerContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 14px 16px;
    border-radius: 14px;
    background-color: #1E2030;
    opacity: ${props => props.done ? 0.5 : 1};
`;

export const BotaoDelete = styled.TouchableOpacity`
    width: 80px;
    height: 100%;
    background-color: #FF5757;
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
    align-items: center;
    justify-content: center;
`;

export const BotaoEdit = styled.TouchableOpacity`
    width: 80px;
    height: 100%;
    background-color: #FF8C5A;
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    align-items: center;
    justify-content: center;
`;

export const Infos = styled.View`
    flex: 1;
`;

export const Nome = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FFFFFF;
    margin-bottom: 6px;
    text-decoration-line: ${props => props.done ? 'line-through' : 'none'};
`;

export const InfoText = styled.Text`
    font-size: 13px;
    color: #9094A6;
    margin-bottom: 2px;
`;

export const TotalText = styled.Text`
    font-size: 13px;
    font-weight: 600;
    color: #F5C842;
`;

export const CheckArea = styled.View`
    margin-left: 12px;
`;

export const CheckButton = styled.View`
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 19px;
    background-color: ${props => props.done ? '#B8E14A' : 'transparent'};
    border-width: 2px;
    border-color: ${props => props.done ? '#B8E14A' : '#3A3D4E'};
`;
