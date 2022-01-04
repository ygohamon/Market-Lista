import styled from 'styled-components/native';

export const TabArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    background-color: #cb6fd6;
`;
export const TabItem = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 60px;
`;

export const TabItemFilled = styled(TabItem)`
    background-color: #732a7c;
`;

export const TabItemPreco = styled(TabItem)`
    background-color: #9c3ea8;
`;

export const PrecoContainer = styled.View`
    background-color: #be73c8;
    height: 30px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
`;

export const Preco = styled.Text`
    color: #e9ddeb;
    font-size: 16px;
    font-weight: bold;
`;