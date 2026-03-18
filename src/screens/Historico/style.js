import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #12131A;
`;

export const ListaScroll = styled.ScrollView`
    flex: 1;
    padding: 16px;
`;

export const MesCard = styled.View`
    background-color: #1A1B26;
    border-radius: 16px;
    padding: 18px;
    margin-bottom: 14px;
    border-width: 1px;
    border-color: #252636;
`;

export const MesCabecalho = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
`;

export const MesTitulo = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: #FFFFFF;
    text-transform: capitalize;
`;

export const MesAno = styled.Text`
    font-size: 13px;
    color: #9094A6;
`;

export const MesStats = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 14px;
`;

export const StatItem = styled.View`
    align-items: center;
`;

export const StatValor = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.destaque ? '#F5C842' : '#FFFFFF'};
`;

export const StatLabel = styled.Text`
    font-size: 11px;
    color: #9094A6;
    margin-top: 2px;
`;

export const OrcamentoBar = styled.View`
    height: 4px;
    background-color: #252636;
    border-radius: 2px;
    margin-bottom: 14px;
    overflow: hidden;
`;

export const OrcamentoFill = styled.View`
    height: 4px;
    border-radius: 2px;
    background-color: ${props => props.acima ? '#FF5757' : '#B8E14A'};
`;

export const BotaoReaproveitar = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #252636;
    border-radius: 10px;
    padding: 10px;
    border-width: 1px;
    border-color: #F5C842;
`;

export const BotaoReaproveitarTexto = styled.Text`
    color: #F5C842;
    font-weight: bold;
    font-size: 14px;
    margin-left: 8px;
`;

export const EmptyContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 60px 40px;
`;

export const EmptyTexto = styled.Text`
    font-size: 15px;
    color: #4A4D5E;
    text-align: center;
    margin-top: 16px;
    line-height: 22px;
`;

export const Carregando = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
