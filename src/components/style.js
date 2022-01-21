import styled from 'styled-components/native';

export const BackArea = styled.View`
    flex: 1;
    width: 100%;
    padding: 0 20px;
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BotaoDelete = styled.TouchableOpacity`
    width: 80px;
    height: 100%;
    background-color: #ff9994
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const BotaoEdit = styled.TouchableOpacity`
    width: 80px;
    height: 100%;
    background-color: #bed1d8;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    align-items: center;
    justify-content: center;
`;