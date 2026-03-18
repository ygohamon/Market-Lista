import styled from 'styled-components/native';

export const TabArea = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    min-height: 60px;
    background-color: #1A1B26;
    border-top-width: 1px;
    border-top-color: #252636;
`;

export const TabItem = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 60px;
`;

export const TabItemFilled = styled(TabItem)`
    background-color: transparent;
`;

export const TabItemPreco = styled.TouchableOpacity`
    flex: 2;
    align-items: center;
    justify-content: center;
    height: 60px;
`;

export const PrecoContainer = styled.View`
    background-color: ${props => props.acima ? '#3A1A1A' : '#1E2030'};
    border-radius: 16px;
    padding: 6px 14px;
    align-items: center;
    border-width: 1px;
    border-color: ${props => props.acima ? '#FF5757' : '#2A2D3E'};
`;

export const Preco = styled.Text`
    color: ${props => props.acima ? '#FF5757' : '#F5C842'};
    font-size: 13px;
    font-weight: bold;
`;

export const PrecoSub = styled.Text`
    color: #4A4D5E;
    font-size: 10px;
    margin-top: 1px;
`;

// Modal de orçamento
export const OrcamentoModal = styled.Modal``;

export const OrcamentoFundo = styled.TouchableOpacity`
    flex: 1;
    background-color: rgba(0,0,0,0.7);
    align-items: center;
    justify-content: center;
    padding: 32px;
`;

export const OrcamentoJanela = styled.View`
    width: 100%;
    background-color: #1A1B26;
    border-radius: 20px;
    padding: 24px;
    border-width: 1px;
    border-color: #252636;
`;

export const OrcamentoTitulo = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: #FFFFFF;
    margin-bottom: 16px;
    text-align: center;
`;

export const OrcamentoCampo = styled.TextInput`
    height: 52px;
    background-color: #252636;
    border-radius: 12px;
    padding: 0 16px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 16px;
    border-width: 1px;
    border-color: #F5C842;
`;

export const OrcamentoBotaoRow = styled.View`
    flex-direction: row;
    gap: 10px;
`;

export const OrcamentoBotao = styled.TouchableOpacity`
    flex: 1;
    height: 48px;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.cancelar ? '#252636' : '#F5C842'};
`;

export const OrcamentoBotaoTexto = styled.Text`
    font-weight: bold;
    font-size: 15px;
    color: ${props => props.cancelar ? '#9094A6' : '#12131A'};
`;
